"""Offline regression checks for the links command; no API or data writes."""
import contextlib
import io
import os
import sys
import unittest
from unittest.mock import patch

sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
import bing_webmaster as bing


class BingLinks(unittest.TestCase):
    def run_links(self, response):
        output = io.StringIO()
        with patch.object(bing, "site", return_value="https://example.com/"), \
                patch.object(bing, "call", return_value=response) as call, \
                patch.object(bing, "save") as save, \
                contextlib.redirect_stdout(output):
            bing.cmd_links()
        call.assert_called_once_with(
            "GetLinkCounts", {"siteUrl": "https://example.com/", "page": 0})
        return output.getvalue(), save

    def test_empty_dict_reports_no_rows(self):
        output, save = self.run_links({})
        self.assertIn("No inbound link rows returned by GetLinkCounts", output)
        save.assert_called_once_with("links", [])

    def test_list_keeps_descending_counts(self):
        low = {"Count": 2, "Url": "https://example.com/low"}
        high = {"Count": 14, "Url": "https://example.com/high"}
        output, save = self.run_links([low, high])
        save.assert_called_once_with("links", [high, low])
        self.assertLess(output.index(high["Url"]), output.index(low["Url"]))

    def test_dict_with_list_reads_links(self):
        row = {"Count": 14, "Url": "https://example.com/page"}
        output, save = self.run_links({"Links": [row], "TotalPages": 1})
        self.assertIn(row["Url"], output)
        save.assert_called_once_with("links", [row])

    def test_empty_links_envelope_reports_no_rows(self):
        output, save = self.run_links({"Links": [], "TotalPages": 0})
        self.assertIn("No inbound link rows returned by GetLinkCounts", output)
        self.assertIn("does not establish that the site has no backlinks", output)
        save.assert_called_once_with("links", [])

    def test_unexpected_shapes_do_not_crash(self):
        for response in ({"TotalPages": 0}, {"Links": {}}, None,
                         {"Links": [None, "bad row"]}):
            with self.subTest(response=response):
                output, save = self.run_links(response)
                self.assertIn("No inbound link rows returned by GetLinkCounts", output)
                save.assert_called_once_with("links", [])

    def test_api_error_is_not_saved_as_empty_data(self):
        output, save = self.run_links({"_error": "HTTP 401 on GetLinkCounts"})
        self.assertIn("HTTP 401", output)
        save.assert_not_called()


if __name__ == "__main__":
    unittest.main()
