import os, sys, unittest
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from dfs_ai_buyer_sweep import parse_google

GOTO = "https://google.com/goto?url=CAESfgHE&gsessionid=x"

def raw(*items):
    return {"tasks": [{"status_code": 20000, "result": [{"items": list(items)}]}]}

class OrganicDomain(unittest.TestCase):
    def test_goto_redirect_uses_breadcrumb_domain(self):
        r = parse_google(raw({"type": "organic", "rank_group": 1, "domain": "google.com", "url": GOTO,
                              "breadcrumb": "https://www.reddit.com › AIForOperations › comments"}), "aio")
        self.assertEqual(r["organic_top10"][0]["domain"], "reddit.com")

    def test_factoryjet_in_breadcrumb_counts_as_cited(self):
        r = parse_google(raw({"type": "organic", "rank_group": 3, "domain": "google.com", "url": GOTO,
                              "breadcrumb": "https://factoryjet.com › services"}), "aio")
        self.assertTrue(r["factoryjet_cited"])

    def test_google_com_without_breadcrumb_is_not_a_site(self):
        r = parse_google(raw({"type": "organic", "rank_group": 2, "domain": "google.com", "url": GOTO}), "aio")
        self.assertEqual(r["organic_top10"][0]["domain"], "")

    def test_normal_domain_unchanged(self):
        r = parse_google(raw({"type": "organic", "rank_group": 1, "domain": "www.clutch.co",
                              "url": "https://clutch.co/x", "breadcrumb": "https://clutch.co › x"}), "aio")
        self.assertEqual(r["organic_top10"][0]["domain"], "clutch.co")

if __name__ == "__main__":
    unittest.main()
