import React from 'react';
import Link from 'next/link';
import type { BlogPost } from '../data.types';

// Every limit, version, date and product capability in this post was checked against
// the vendor's own documentation on 2026-09-17 (Oracle NetSuite Help Center, Odoo 18
// and 19 documentation and source, SAP's Service Layer guide and SDK help, and the
// Celigo, Boomi, n8n, Zapier and Make integration pages). The Sow Easy paragraph mirrors
// src/data/case-studies/index.ts exactly: build in progress, no results reported, and
// it is an ecommerce and ERP integration, not an AI agent deployment. Do not add
// numbers, partner status or client results without a checkable source.

export const post: BlogPost = {
  id: 'ai-agents-erp-netsuite-odoo-sap-business-one-2026',
  slug: 'ai-agents-erp-netsuite-odoo-sap-business-one-2026',
  title: 'AI Agents Inside Your ERP: NetSuite, Odoo and SAP Business One (2026)',
  excerpt:
    "What an AI agent inside NetSuite, Odoo or SAP Business One really does, the APIs and limits it has to live with, when the ERP's own AI is enough, and who should build the rest. Every limit here was checked against vendor documentation on September 17, 2026.",
  date: 'September 17, 2026',
  readTime: '19 min read',
  author: 'Bhavesh Barot',
  category: 'Emerging Tech',
  imageUrl: '/images/us/commerce/b2b-ecommerce-erp-desk.webp',
  imageAlt:
    'A desk with a tray of printed purchase orders and invoices beside a monitor showing a table of ERP records',
  meta: {
    title: 'AI Agents in NetSuite, Odoo and SAP Business One (2026)',
    description:
      'How AI agents work inside NetSuite, Odoo and SAP Business One: official APIs, real limits, approvals, native AI vs custom builds, and who implements them.',
  },
  keyTakeaways: [
    "An AI agent inside your ERP reads documents and questions, then reads and writes records only through the ERP's official APIs, signed in as its own limited integration user. Anything that changes money, prices or inventory waits for a person to approve.",
    "NetSuite: build new agents on REST web services with OAuth 2.0. NetSuite's help center says new integrations using token-based authentication or SOAP can't be built from the 2027.1 release, and all SOAP endpoints are disabled with 2028.2.",
    'NetSuite limits how many requests run at once across the whole account: 5 on the Standard service tier, 15 on Premium and 20 on Enterprise or Ultimate, plus 10 per SuiteCloud Plus license. Third-party connectors, such as your store integration, and your agent draw from the same pool.',
    "Odoo 19 added the External JSON-2 API with API keys and deprecated XML-RPC and JSON-RPC, which are scheduled for removal in Odoo 22. On Odoo's hosted plans, external API access needs the Custom plan, and Odoo Online can't run custom modules.",
    'SAP Business One agents should use the Service Layer, not the COM-based DI API. It supports SAP HANA and Microsoft SQL Server, cannot hold a transaction across requests, and gained webhooks in feature pack 2602.',
    "Use the vendor's built-in AI first when the work stays inside the ERP, such as NetSuite Bill Capture or Odoo 19's AI agents. Build a custom agent when documents arrive from outside, the job spans several systems, or you need your own approvals and test results.",
    'Before an agent writes anything, test it in a sandbox, score it on a set of past documents with known answers, and run it in shadow mode next to your team.',
  ],
  faqs: [
    {
      q: 'How can AI be used in ERP?',
      a: "Mostly in three ways. It answers questions from live ERP data, such as stock by location or a customer's open orders. It turns documents into draft records: purchase orders into sales orders, supplier bills into vendor bills, emailed requests for quote into quotes. And it handles routine follow-ups, like reminders on overdue invoices. The safe pattern is the same in NetSuite, Odoo and SAP Business One: the AI reads and drafts through official APIs, and a person approves anything that moves money, prices or stock.",
    },
    {
      q: 'Which AI is best for ERP?',
      a: "Start with the AI your ERP vendor already ships, because it works inside the ERP's own permissions. NetSuite offers Bill Capture for supplier bills and the NetSuite AI Connector Service for assistants such as Claude and ChatGPT. Odoo 19 includes AI agents that run on ChatGPT or Gemini models. No model is best for every ERP. What decides the result is which records the AI can reach, what it is allowed to change, and how well you test it. A custom agent makes sense when the work spans several systems.",
    },
    {
      q: 'Is AI replacing ERP systems?',
      a: 'No. AI agents depend on the ERP. Your ledger, stock counts, prices and approval history still live in NetSuite, Odoo or SAP Business One, and an agent is only useful because it can read and write those records through the APIs. What AI is replacing is the typing between systems: rekeying purchase orders, copying supplier ship dates by hand, and answering routine order status emails. NetSuite and Odoo are both building AI into the ERP itself rather than offering it as a replacement.',
    },
    {
      q: 'What is human-in-the-loop authorization for AI agents?',
      a: "It means an agent can prepare an action but cannot complete it until a person approves. In an ERP this usually maps to a status the ERP already has: a NetSuite sales order saved as Pending Approval, an Odoo quotation left in draft, or a SAP Business One draft document. NetSuite's help center says a Pending Approval order must be approved by someone with the right permissions before NetSuite can process it. The agent drafts, and the human commits.",
    },
    {
      q: 'Is ChatGPT a type of AI agent?',
      a: "On its own, ChatGPT is an assistant that answers and writes. It starts acting like an agent when it is connected to tools that take actions. NetSuite's AI Connector Service is one example: MCP-compatible clients, including ChatGPT and Claude, can create, read and update NetSuite records within the user's role permissions. A production ERP agent usually adds more around the model: one defined job, its own integration user, approval steps, logs and a test set.",
    },
    {
      q: 'How can AI be used to automate accounts payable tasks?',
      a: 'The first job is capture: reading supplier bills from email or PDF and turning them into draft vendor bills. NetSuite has this built in as Bill Capture, which accepts PDF, JPEG and PNG files and shows them on a Scanned Vendor Bills page for review before a bill is created. The next jobs are matching bills to purchase orders and receipts, flagging price or quantity differences, and routing exceptions to the right person. Releasing payments should stay with a person.',
    },
    {
      q: 'How can I automate the purchase order process?',
      a: "Break it into steps and automate the data entry first. An agent can draft purchase orders from an approved reorder list for a buyer to review. After the order goes out, it can read the supplier's acknowledgement and compare price, quantity and ship date against the open purchase order in NetSuite, Odoo or SAP Business One. Filling in a confirmed ship date can be automatic. A change in price or quantity should wait for the buyer to approve it.",
    },
    {
      q: 'How do I connect AI to NetSuite?',
      a: "There are two official routes. For staff chatting with an assistant, use the NetSuite AI Connector Service: install the free MCP Standard Tools SuiteApp and connect an MCP-compatible client with a non-administrator role. For unattended agents, call SuiteTalk REST web services or a RESTlet from your own service, authenticated with OAuth 2.0. NetSuite's help center says new integrations should use REST web services with OAuth 2.0 starting with the 2026.1 release.",
    },
    {
      q: 'Does NetSuite have an MCP server?',
      a: "Yes. NetSuite adopted the Model Context Protocol through the NetSuite AI Connector Service. Oracle provides the MCP Standard Tools SuiteApp with ready-made tools, and you can build your own. NetSuite's FAQ says it works with clients that support remote MCP and OAuth 2.0, and names Claude (Pro plan or higher) and ChatGPT as examples. It does not support Administrator roles, so connect it with a custom or other non-administrator role.",
    },
    {
      q: 'Is the NetSuite AI Connector Service free?',
      a: "NetSuite's FAQ says the AI Connector Service is not a paid feature and the MCP Standard Tools SuiteApp is free, although you may need a paid subscription for your AI client. Plan for two indirect costs. Its requests count against your account's concurrency limit, the same pool your other integrations use. And data sent to a third-party AI model is governed by that provider's privacy policy, not Oracle's terms.",
    },
    {
      q: 'Does NetSuite have a REST API?',
      a: "Yes. SuiteTalk REST web services let you create, read, update and delete records, run SuiteQL queries, and run record actions and transformations without deploying scripts. RESTlets are the other REST option: SuiteScript code you write and call from outside NetSuite. NetSuite is also retiring SOAP. Its help center says you can't build new SOAP integrations from the 2027.1 release, and all SOAP endpoints are disabled with 2028.2.",
    },
    {
      q: 'What is a RESTlet in NetSuite?',
      a: 'NetSuite defines a RESTlet as a SuiteScript you can call from outside NetSuite or from another script. It only runs when called and can return a value. For agents, RESTlets help when one request must do several things on the server under your rules, such as checking a purchase order against contract prices before creating the sales order. Each RESTlet execution can use up to 5,000 usage units, and RESTlet calls share the account concurrency limit.',
    },
    {
      q: 'What are the API limitations in NetSuite?',
      a: "Four matter most for agents. Web services and RESTlet requests share one account-wide concurrency limit set by your service tier and SuiteCloud Plus licenses. Scripts are metered in usage units, and a RESTlet gets 5,000 per execution. REST web services requests that run longer than 15 minutes time out. And authentication is changing: from the 2027.1 release you can't create new integrations that use token-based authentication, so new work should use OAuth 2.0.",
    },
    {
      q: 'What does it mean when the NetSuite concurrency limit is reached?',
      a: 'It means your account already has as many web services and RESTlet requests running at once as its limit allows, so NetSuite blocks the next request instead of queuing it. The base limit is 5 for Standard, 15 for Premium and 20 for Enterprise or Ultimate, plus 10 per SuiteCloud Plus license, shared by your web services and RESTlet integrations. The fixes are to retry with increasing waits, reserve part of the limit for key integrations, spread batch jobs out, or add licenses.',
    },
    {
      q: 'How do I set up OAuth 2.0 client credentials in NetSuite?',
      a: "In outline: turn on the OAuth 2.0 feature, create an integration record that uses the client credentials flow, which NetSuite describes as machine-to-machine with no user interaction, upload the public part of your certificate, and map it to an entity, a role and the application. Your service then posts to the token endpoint to get an access token. Each integration record can hold up to five active certificates. Redo sandbox authorizations after every sandbox refresh.",
    },
    {
      q: 'Does NetSuite have an AI platform?',
      a: "NetSuite builds AI into many parts of the product. Its help center lists features such as Bill Capture, Transaction Matching Assistant, Intelligent Close Manager, Item Creation Assistant and Text Enhance. Developers get the SuiteScript N/llm module, which calls Oracle Cloud Infrastructure Generative AI and uses AI Units, and the NetSuite AI Connector Service connects outside assistants over MCP. Oracle notes these AI features have not been assessed for HIPAA compliance.",
    },
    {
      q: 'Does Odoo have AI capabilities?',
      a: "Yes. Odoo 19, released in September 2025, added AI agents that learn from your documents and perform actions, AI fields that fill themselves in, natural-language search, AI inside server actions, and a live chat agent that can create leads. Agents run on ChatGPT or Gemini models. Odoo's documentation notes the standard Ask AI agent cannot change data, and an agent needs topics with tools before it can complete tasks.",
    },
    {
      q: 'Is the Odoo API free?',
      a: "It depends on how you run Odoo. On Odoo's subscription plans, the documentation says external API access is only available on the Custom plan, not on One App Free or Standard. Self-hosted Odoo Community ships the RPC endpoints module under the LGPL-3 license, so there is no API fee there. Either way, budget for the work around it: mapping fields, setting access rights and rotating API keys, which Odoo 19 limits to three months by default for non-admin users.",
    },
    {
      q: 'How can I integrate with the API in Odoo?',
      a: "On Odoo 19, use the External JSON-2 API. Send a POST request to /json/2/ followed by the model and method, with an API key in the Authorization header as a bearer token. Create the key under Preferences, Account Security, New API Key, ideally for a dedicated bot user that has only the permissions the integration needs. Every call is checked against that user's access rights and record rules. Versions before 19 use XML-RPC or JSON-RPC instead.",
    },
    {
      q: 'How do I use XML-RPC in Odoo?',
      a: 'Call authenticate on the common endpoint to get a user ID, then call execute_kw on the object endpoint with the database, user ID, password, model, method and arguments. Since Odoo 14 you can put an API key in place of the password. It still works, but Odoo 19 deprecates the /xmlrpc, /xmlrpc/2 and /jsonrpc endpoints and schedules their removal for Odoo 22 in fall 2028. On Odoo 19 or later, build new integrations on JSON-2.',
    },
    {
      q: 'What is Odoo.sh vs Odoo Online?',
      a: "Odoo Online is hosting that Odoo manages for you, and Odoo's documentation says it is incompatible with custom modules or modules from the Odoo Apps Store. Odoo.sh is Odoo's cloud platform for projects with custom code, with development, staging and production branches and SSH access. For AI agents the difference matters: on Odoo.sh or on-premise, a developer can add a custom method that does several steps in one transaction. On Odoo Online, you can't.",
    },
    {
      q: 'What does Odoo integrate with?',
      a: "Anything that can call its API, plus ready-made connectors in automation tools. n8n ships a built-in Odoo node for contacts, opportunities, notes and custom resources. Make has a verified Odoo app. Zapier's Odoo CRM app is narrow: a new lead trigger plus create lead and find contact actions. For stock, pricing and orders, we usually integrate through the API directly, which on Odoo's hosted plans requires the Custom plan.",
    },
    {
      q: 'What is the disadvantage of using Odoo?',
      a: "For integrations and AI agents, four things stand out. External API access on Odoo's hosted plans needs the Custom plan. Odoo Online can't run custom modules, which limits server-side logic. Each JSON-2 call runs in its own transaction, so multi-step changes need a single business method. And the API is changing: XML-RPC and JSON-RPC are deprecated in Odoo 19, so older connectors need rework before Odoo 22.",
    },
    {
      q: 'What is the API for SAP Business One?',
      a: "The main one is the Service Layer, a web API built on HTTP and OData that exposes SAP Business One's business objects. It supports OData version 3 at /b1s/v1 and version 4 at /b1s/v2. The older DI API is built on Microsoft COM technology, and SAP says it fits best in the Windows native environment. For an AI agent calling from a server in the cloud, SAP's web-based Service Layer is the better fit.",
    },
    {
      q: 'Is SAP Business One still available?',
      a: "Yes, and SAP is still developing it. SAP updated its Service Layer guide on July 27, 2026, and feature pack 2602 of SAP Business One 10.0 added webhooks to the Service Layer. SAP's product page describes it as ERP software for small businesses. If you are choosing between SAP Business One versions or hosting options, confirm what your region and partner offer before planning integrations.",
    },
    {
      q: 'Is SAP B1 outdated?',
      a: "Its integration layer is more current than its reputation. The Service Layer offers REST-style OData APIs, runs on Linux or Windows, and works with both SAP HANA and Microsoft SQL Server databases. Webhooks arrived with feature pack 2602. The dated part is the DI API, which is built on Microsoft COM and, by SAP's own description, fits best in the Windows native environment. A Business One system can support AI agents well if you build on the Service Layer and keep your version current.",
    },
    {
      q: 'Is SAP Business One different from SAP?',
      a: 'Yes. SAP Business One is a specific SAP product that SAP describes as ERP software for small businesses. It has its own integration APIs, the Service Layer and the DI API, so connectors and agents built for other SAP ERP products, such as S/4HANA, do not carry over without rework. When someone on your team says SAP, confirm which product and version they mean before anyone scopes an integration.',
    },
    {
      q: 'Does SAP have an AI tool?',
      a: "Yes. SAP's AI assistant is Joule, part of what SAP calls SAP Business AI. Check which products it covers, though. SAP's quarterly SAP Business AI release highlights from Q3 2025 through Q2 2026 mention S/4HANA many times and SAP Business One not once. If you run SAP Business One, ask your partner what AI your feature pack includes, and plan any agent that changes data on the Service Layer.",
    },
    {
      q: 'What are some alternatives to Celigo?',
      a: "For NetSuite and SAP Business One, common alternatives are Boomi, which offers a prebuilt NetSuite connector over REST or SOAP; Make, whose NetSuite app is only on its Enterprise plan; Zapier, whose NetSuite app is a premium app; n8n, which has no built-in NetSuite node, so you use its HTTP Request node; and custom code against the ERP's APIs. Choose on your ERP, the prebuilt flows you need and who will maintain it.",
    },
  ],
  content: (
    <article className="prose prose-lg max-w-none text-[#14110F]">
      <p className="text-sm text-gray-500 mb-6">
        By Bhavesh Barot | API details checked against Oracle NetSuite, Odoo and SAP documentation on
        September 17, 2026 | 19 min read
      </p>

      <div className="not-prose bg-[#FFF3EE] border-l-4 border-[#F05A28] p-5 rounded-r-xl mb-8">
        <p className="font-semibold text-gray-900 mb-2">Quick Answer</p>
        <p className="text-gray-700 text-base leading-relaxed">
          An AI agent inside your ERP is software that reads emails, PDFs or questions, then reads and
          writes ERP records only through the ERP&apos;s official APIs. It signs in as its own
          integration user with the smallest set of permissions the job needs. Anything that changes
          money, prices or inventory waits for a person to approve it.
        </p>
      </div>

      <p>
        This guide is for operations, finance and IT leads at mid-market companies on NetSuite, Odoo or
        SAP Business One. If you run SAP S/4HANA or Epicor Kinetic, read our{' '}
        <Link
          href="/blog/enterprise-erp-ai-agents-netsuite-sap-epicor-implementation-guide"
          className="text-[#B23E13] hover:underline"
        >
          enterprise ERP AI agent implementation guide
        </Link>{' '}
        instead. We build AI agents and ERP integrations, so we have a stake here. To keep this useful,
        every limit, version and date below comes from the vendors&apos; own documentation, and we say
        where a vendor&apos;s built-in AI beats hiring anyone, including us.
      </p>

      <h2>What an AI Agent Inside Your ERP Actually Does</h2>
      <p>
        An ERP (enterprise resource planning system) holds your orders, stock, prices and accounting. An
        AI agent uses a large language model to read messy inputs and call tools that take actions.
        Together, an ERP agent turns an emailed purchase order into a sales order, a PDF bill into a
        vendor bill, or a customer&apos;s question into an answer from live records. What makes one safe
        is not the model. It is three rules.
      </p>
      <ol>
        <li>
          <strong>Official APIs only.</strong> An API (application programming interface) is the door a
          vendor builds for other software: NetSuite&apos;s REST web services, Odoo&apos;s JSON-2 API or
          the SAP Business One Service Layer. No screen scraping, and no direct database writes that skip
          the ERP&apos;s own checks.
        </li>
        <li>
          <strong>Its own integration user.</strong> The agent signs in as a dedicated user whose role
          allows only what the job needs, a rule called least privilege. If a key leaks, the damage stops
          at that role.
        </li>
        <li>
          <strong>A person approves money, prices and inventory.</strong> The agent saves work in a state
          the ERP already treats as unapproved: a NetSuite sales order in Pending Approval, an Odoo
          quotation in draft, or a SAP Business One draft document. A human commits it.
        </li>
      </ol>

      <h2>Who Implements AI Agents Inside NetSuite, Odoo and SAP Business One?</h2>
      <p>Four kinds of teams do this work, and good projects usually combine two of them.</p>
      <ul>
        <li>
          <strong>The ERP vendor&apos;s built-in AI.</strong> NetSuite and Odoo ship AI features your
          admin or partner can switch on. It is usually the cheapest route when a job starts and ends
          inside the ERP.
        </li>
        <li>
          <strong>Your ERP implementation partner.</strong> It knows your custom fields, scripts, roles
          and approval rules, and should own configuration and upgrades. If a partner also builds agents,
          ask to see one running on real documents.
        </li>
        <li>
          <strong>An integration platform.</strong> iPaaS (integration platform as a service) tools like
          Celigo and Boomi move data between systems on rules you configure, and both now market AI agent
          features too. Their core strength is syncing orders, customers and stock.
        </li>
        <li>
          <strong>An AI engineering team.</strong> This is what FactoryJet does. A custom agent earns its
          cost when inputs are unstructured, the work crosses systems, or you need your own approval
          screens, test sets and logs.
        </li>
      </ul>
      <p>
        The split we recommend: your ERP partner sets up the integration role, custom fields and approval
        workflow, and the agent builder owns the agent, its tools, its evaluation set and its monitoring.
        Our ERP work so far includes a{' '}
        <Link href="/case-studies/grofresh-manufacturing-erp" className="text-[#B23E13] hover:underline">
          custom ERPNext implementation for GroFresh Agro
        </Link>
        , a food processing manufacturer that had run on Tally and spreadsheets, and the Sow Easy
        WooCommerce and Odoo build described below.
      </p>

      <h2>NetSuite: REST Web Services, RESTlets and One Shared Request Pool</h2>

      <h3>Which NetSuite API an Agent Should Call</h3>
      <p>
        Start with SuiteTalk REST web services. They let an outside program create, read, update and
        delete records, run SuiteQL queries (NetSuite&apos;s SQL-style query language) and transform one
        record into another, with no scripts to deploy. A RESTlet is a SuiteScript you call from outside
        NetSuite. Use one when a single request must do several things on the server under your rules,
        such as checking a purchase order against contract prices before creating the sales order. Each
        RESTlet execution gets up to 5,000 usage units, NetSuite&apos;s meter for script work, against
        1,000 for a Suitelet.
      </p>

      <h3>Authentication: OAuth 2.0, Not Token-Based Authentication</h3>
      <p>
        Check the date on any guide that recommends token-based authentication (TBA).{' '}
        <a
          href="https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_2104046421.html"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#B23E13] hover:underline"
        >
          NetSuite&apos;s SOAP removal FAQ
        </a>{' '}
        says new integrations should use REST web services with OAuth 2.0 from the 2026.1 release. From
        2027.1 you can&apos;t build new integrations with TBA or SOAP, and with 2028.2 all SOAP endpoints
        are disabled.
      </p>
      <p>
        For an unattended agent, use the OAuth 2.0 client credentials flow, which NetSuite describes as
        machine-to-machine with no user interaction. You upload the public part of a certificate and map
        it to an entity, a role and the application. One sandbox trap: tokens and OAuth 2.0
        authorizations are not copied when a sandbox is refreshed, so the test agent stops authenticating
        until you set it up again.
      </p>

      <h3>Concurrency: Every Integration Shares One Pool</h3>
      <p>
        Concurrency means requests running at the same time, and NetSuite caps it for web services and
        RESTlet requests combined across the whole account.{' '}
        <a
          href="https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/bridgehead_1500275603.html"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#B23E13] hover:underline"
        >
          NetSuite&apos;s concurrency governance table
        </a>{' '}
        sets the base by service tier: 5 for Standard, 15 for Premium and 20 for Enterprise or Ultimate,
        plus 10 per SuiteCloud Plus license. On a Standard account, those 5 slots are shared by third-party
        store connectors, your 3PL (third-party logistics) feed, any assistant using the AI Connector
        Service, and your agent. A few Oracle apps are exempt, including NetSuite&apos;s own NetSuite
        Connector, so their requests don&apos;t count toward the limit.
      </p>
      <p>
        When the pool is full, NetSuite blocks the request rather than queuing it. REST web services
        return HTTP 429 with CONCURRENCY_LIMIT_EXCEEDED, but RESTlets return HTTP 400 with
        SSS_REQUEST_LIMIT_EXCEEDED, so a retry handler that only watches for 429 misses RESTlet failures.
        You can reserve part of the limit for specific integrations, and REST requests running past 15
        minutes time out.
      </p>

      <h3>Stopping Duplicate Orders in NetSuite</h3>
      <p>
        Customers sometimes email the same purchase order twice, and agents retry. NetSuite&apos;s upsert
        operation creates or updates a record when you send a PUT request with an external ID in the URL,
        so a repeat send updates the same record instead of creating another. Build that ID from something
        stable, like the customer ID plus the customer&apos;s PO number. For asynchronous jobs, the
        X-NetSuite-Idempotency-Key header makes NetSuite reject a repeat with IDEMPOTENCY_ERROR and point
        to the original job.
      </p>

      <h3>NetSuite&apos;s Own AI, and When It Is Enough</h3>
      <p>
        NetSuite&apos;s help center lists AI features including Bill Capture, Transaction Matching
        Assistant, Intelligent Close Manager, Item Creation Assistant and Text Enhance. Two matter most
        for an agent decision.
      </p>
      <ul>
        <li>
          <strong>Bill Capture</strong> reads vendor bills you email or upload as PDF, JPEG or PNG files.
          Each lands on a Scanned Vendor Bills page for a person to review before a bill is created. If
          supplier bills are your main pain, try it before paying for a build.
        </li>
        <li>
          <strong>The NetSuite AI Connector Service</strong> connects outside assistants through the Model
          Context Protocol (MCP), an open standard for letting AI apps use tools.{' '}
          <a
            href="https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_4160616848.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#B23E13] hover:underline"
          >
            NetSuite&apos;s AI Connector FAQ
          </a>{' '}
          says it is not a paid feature, works with MCP clients such as Claude and ChatGPT, respects role
          permissions, refuses Administrator roles, and can create, read and update records. Its requests
          use the same concurrency pool, and data sent to the AI provider falls under that provider&apos;s
          privacy policy.
        </li>
      </ul>
      <p>
        Oracle also notes its AI features have not been assessed for HIPAA compliance, so keep protected
        health information out of them. Use the built-in options when a person works with the AI in real
        time or the job stays inside NetSuite. Build a custom agent when the work starts outside NetSuite
        (a shared inbox of PDF purchase orders, a supplier portal, a Shopify store), runs unattended at
        volume, or needs approval rules and a test set you control.
      </p>

      <h2>Odoo: The JSON-2 API, API Keys and Plan Limits</h2>

      <h3>Which Odoo API an Agent Should Call</h3>
      <p>
        Odoo 19 introduced the External JSON-2 API: a POST request to{' '}
        <code>{'/json/2/<model>/<method>'}</code>, such as <code>/json/2/sale.order/search_read</code>,
        with an API key as a bearer token.{' '}
        <a
          href="https://www.odoo.com/documentation/19.0/developer/reference/external_api.html"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#B23E13] hover:underline"
        >
          Odoo&apos;s JSON-2 API documentation
        </a>{' '}
        says the older XML-RPC and JSON-RPC endpoints are scheduled for removal in Odoo 22 (fall 2028).
        On Odoo 17 or 18, XML-RPC is still the route, with an API key in place of the password, so plan
        the switch into your next upgrade.
      </p>

      <h3>Your Plan and Hosting Decide What Is Possible</h3>
      <p>
        On Odoo&apos;s subscription plans, external API access is only on the Custom plan, not One App
        Free or Standard. Odoo Online is incompatible with custom modules, so you can&apos;t add
        server-side code there; Odoo.sh and on-premise installs can run them. For testing, Odoo.sh staging
        branches make neutralized copies of production with outgoing emails caught and payment and
        shipping connectors in test mode. On Odoo Online, a duplicate made for testing disables external
        actions and expires after 15 days.
      </p>

      <h3>The Bot User and One Transaction Per Call</h3>
      <p>
        Every JSON-2 call is checked against the calling user&apos;s access rights, record rules
        (Odoo&apos;s row-level filters) and field access. Odoo recommends a dedicated bot user with only
        the permissions it needs and an empty password, so nobody can log in as it. By default, Odoo 19
        limits API keys for non-admin users to three months, so schedule key rotation before go-live.
      </p>
      <p>
        The detail that agent builders miss most: each JSON-2 call runs in its own database transaction, and
        calls can&apos;t be chained into one. If an agent creates an order in one call and confirms it in
        another, someone else can change the stock in between. Odoo&apos;s advice is to call a single
        method that does the related work, such as <code>action_confirm</code> on a sales order, or to
        write one in a custom module, which Odoo Online doesn&apos;t allow.
      </p>

      <h3>Stopping Duplicate Orders in Odoo</h3>
      <p>
        Put the customer&apos;s PO number in the sales order&apos;s Customer Reference field (
        <code>client_order_ref</code>) and have the agent search for it before creating anything. Odoo 18 and
        19 add a safety net: a draft order shows &ldquo;this order might be a duplicate of&rdquo; when
        another order for the same customer that is not cancelled has the same reference. That warning
        helps the approver but does not stop the agent, so keep the search.
      </p>

      <h3>Odoo&apos;s Own AI, and When It Is Enough</h3>
      <p>
        Odoo 19, released in September 2025, added AI agents that learn from your documents and perform
        actions, AI fields that fill themselves in, natural-language search, AI steps in server actions
        (Odoo&apos;s automation rules), a live chat agent that can create leads, and AI prompts in
        Documents that sort files and trigger actions, plus a new server action type that creates vendor
        bills and customer invoices from documents. Agents run on ChatGPT or
        Gemini models. The standard Ask AI agent can&apos;t change data, and any agent needs topics with
        tools before it can complete tasks. Use Odoo&apos;s AI for work inside Odoo with a person
        watching. Build outside it when input arrives elsewhere, the job touches another system such as a
        WooCommerce or Shopify store, or you need an approval queue and test results you can audit.
      </p>

      <h3>What We Are Building With Odoo Today</h3>
      <p>
        FactoryJet is currently building Sow Easy&apos;s B2B WooCommerce store with Odoo integration.
        Odoo is the source of stock, pricing and SKU data, and development and testing happen against
        Odoo staging before launch. The build is in progress and no results are reported yet. It is an
        ecommerce and ERP integration, not an AI agent deployment, but it is the same plumbing an agent
        depends on: one system owns the data, and the store reads from it instead of keeping its own
        copy.{' '}
        <Link href="/case-studies/sow-easy-distributor-portal" className="text-[#B23E13] hover:underline">
          Read the Sow Easy case study
        </Link>
        .
      </p>

      <div className="not-prose bg-[#FAF8F5] border-2 border-[#E5DFD7] p-6 sm:p-8 rounded-xl my-10 shadow-sm">
        <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#B23E13] mb-2">
          // ERP agent scoping
        </p>
        <h3 className="text-xl sm:text-2xl font-bold text-[#1F2937] mb-3">
          Not Sure Which API Your Agent Should Use?
        </h3>
        <p className="text-[#4B5563] text-base leading-relaxed mb-6">
          Tell us your ERP, its version and the document type you want automated. We will map the API
          route, the limits you will hit and where approvals belong, and give you that scope in writing
          before any build starts.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/services/ai-integration-services"
            className="inline-flex items-center gap-2 bg-[#B23E13] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#9A3510] transition-colors shadow-sm"
          >
            See AI Integration Services &rarr;
          </Link>
          <a
            href="https://calendly.com/bhavesh-factoryjet/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-[#1F2937] border border-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            Book a 30-Minute Call
          </a>
        </div>
      </div>

      <h2>SAP Business One: Build on the Service Layer</h2>

      <h3>Service Layer First, DI API Only When You Must</h3>
      <p>
        The Service Layer is SAP&apos;s web API for Business One, built on HTTP and OData (a standard for
        REST-style data APIs).{' '}
        <a
          href="https://help.sap.com/doc/fc2f5477516c404c8bf9ad1315a17238/10.0/en-US/Working_with_SAP_Business_One_Service_Layer.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#B23E13] hover:underline"
        >
          SAP&apos;s Working with SAP Business One Service Layer guide
        </a>{' '}
        says it supports OData version 3 at <code>/b1s/v1</code> and version 4 at <code>/b1s/v2</code>,
        runs on SUSE Linux Enterprise or Microsoft Windows, and works with SAP HANA and Microsoft SQL
        Server. The older DI API is built on Microsoft COM technology, which SAP says fits best in the
        Windows native environment. That makes it awkward for an agent running on a cloud server.
      </p>

      <h3>Sessions, Transactions and Database Differences</h3>
      <p>
        An agent logs in with a POST to <code>/Login</code> and gets a B1SESSION cookie with an idle
        timeout (30 minutes in SAP&apos;s example). SAP calls login a heavy job, so reuse sessions. Lists
        return 20 records per page unless you ask for more.
      </p>
      <p>
        Service Layer transactions cannot cross requests. To make related changes succeed or fail
        together, send a batch request with a change set, which SAP treats as one atomic unit that rolls
        back entirely if any part fails. New user-defined fields and objects stay invisible until the
        Service Layer restarts, so add custom fields well before testing.
      </p>
      <p>
        The two databases differ in places. On SAP HANA, queries are case-sensitive by default because of
        HANA&apos;s default collation, so match names and reference numbers carefully. Semantic Layer views
        exist only on HANA, while automatic exposure of custom SQL views works only on SQL Server.
      </p>

      <h3>Webhooks, Drafts and Approvals</h3>
      <p>
        A webhook is a message a system sends the moment something happens, so the agent doesn&apos;t have
        to keep checking. As of SAP Business One 10.0 feature pack 2602, the Service Layer supports
        webhooks for events such as creating or updating business objects. They are disabled by default
        for each company. On older versions, the agent polls on a schedule.
      </p>
      <p>
        Business One already has the approval step an agent needs. The Service Layer exposes Drafts, a
        draft becomes a real document through SaveDraftToDocument, and approval requests are available
        through the API. Have the agent create drafts, let your approval procedures route them, and store
        the customer&apos;s own reference number in the NumAtCard field so the agent can check for
        repeats.
      </p>

      <h3>SAP&apos;s AI and Business One</h3>
      <p>
        SAP&apos;s AI assistant is Joule, part of what SAP calls SAP Business AI. SAP&apos;s quarterly SAP
        Business AI release highlights from Q3 2025 through Q2 2026 mention S/4HANA many times and SAP
        Business One not once. Ask your partner what your feature pack includes before planning around
        built-in AI, and build agents that change data on the Service Layer.
      </p>

      <h2>NetSuite vs Odoo vs SAP Business One for AI Agents</h2>
      <p>
        Here is how the same agent design lands on each ERP, from vendor documentation checked on
        September 17, 2026.
      </p>
      <div className="overflow-x-auto my-8">
        <table className="w-full text-left text-sm border border-[#E7DED6]">
          <thead className="bg-[#FFF8F5] border-b border-[#E7DED6]">
            <tr>
              <th className="p-4 font-bold text-[#14110F]">What matters</th>
              <th className="p-4 font-bold text-[#14110F]">NetSuite</th>
              <th className="p-4 font-bold text-[#14110F]">Odoo</th>
              <th className="p-4 font-bold text-[#14110F]">SAP Business One</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#E7DED6]">
            <tr>
              <td className="p-4 font-semibold">API for agents</td>
              <td className="p-4">SuiteTalk REST web services, plus RESTlets for custom server logic</td>
              <td className="p-4">External JSON-2 API on Odoo 19; XML-RPC or JSON-RPC on older versions</td>
              <td className="p-4">Service Layer (OData version 3 and 4); the COM-based DI API suits Windows-native programs</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold">Authentication</td>
              <td className="p-4">OAuth 2.0; no new token-based authentication integrations from 2027.1</td>
              <td className="p-4">API key as a bearer token; keys for non-admin users last up to three months by default</td>
              <td className="p-4">Login creates a B1SESSION cookie with an idle timeout</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold">Main limit to plan for</td>
              <td className="p-4">One account-wide concurrency pool: 5, 15 or 20 by tier, plus 10 per SuiteCloud Plus license</td>
              <td className="p-4">External API only on the Custom plan for hosted Odoo; one transaction per call</td>
              <td className="p-4">No transactions across requests; 20 records per page by default</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold">Where the agent parks work for approval</td>
              <td className="p-4">Sales order in Pending Approval</td>
              <td className="p-4">Quotation left in draft</td>
              <td className="p-4">Draft document, converted with SaveDraftToDocument</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold">Duplicate protection</td>
              <td className="p-4">Upsert by external ID; idempotency key on asynchronous requests</td>
              <td className="p-4">Search Customer Reference first; Odoo 18 and later warn on likely duplicate drafts</td>
              <td className="p-4">Check the NumAtCard reference; group related changes in an atomic change set</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold">Safe place to test</td>
              <td className="p-4">Sandbox account; re-create tokens and OAuth 2.0 authorizations after each refresh</td>
              <td className="p-4">Odoo.sh staging branch, or a testing duplicate on Odoo Online that expires after 15 days</td>
              <td className="p-4">A copy of the company database on the same database type as production</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold">Built-in AI</td>
              <td className="p-4">Bill Capture, AI Connector Service over MCP, SuiteScript N/llm module</td>
              <td className="p-4">Odoo 19 AI agents, AI fields and AI server actions</td>
              <td className="p-4">SAP Business AI highlights we read did not mention Business One; ask your partner</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold">Gotcha that bites first</td>
              <td className="p-4">RESTlets report overload as HTTP 400, not 429</td>
              <td className="p-4">Odoo Online cannot run the custom module a safe multi-step write may need</td>
              <td className="p-4">New user-defined fields are invisible until the Service Layer restarts</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>8 Agent Jobs That Fit Mid-Market ERP Users</h2>
      <p>For each job: what the agent reads, what it writes, and where a person signs off.</p>
      <ol>
        <li>
          <strong>Quote drafting from emailed requests for quote (RFQs).</strong> Reads the customer,
          items, customer prices (price levels in NetSuite, pricelists in Odoo, price lists in SAP Business
          One) and stock. Writes a draft quote: a NetSuite estimate, an Odoo quotation or a SAP Business
          One sales quotation draft. A person approves prices, discounts and lead times. Manufacturers
          quoting from drawings should read our{' '}
          <Link
            href="/blog/ai-agent-architecture-manufacturing-rfq-erp-sync-2026"
            className="text-[#B23E13] hover:underline"
          >
            RFQ quoting agent architecture
          </Link>
          .
        </li>
        <li>
          <strong>Sales order entry from PDF purchase orders.</strong> Reads the customer, ship-to
          addresses, item numbers, prices and credit status. Writes a sales order held for approval. A
          person approves any line where price, item or address doesn&apos;t match.
        </li>
        <li>
          <strong>Vendor bill capture and matching.</strong> Reads purchase orders and receipts. Writes a
          draft vendor bill (an A/P invoice draft in SAP Business One). A person approves price or quantity
          differences and releases payment. On NetSuite, try Bill Capture first.
        </li>
        <li>
          <strong>Supplier acknowledgement reconciliation.</strong> Reads open purchase orders and the
          supplier&apos;s confirmation. Writes confirmed ship dates or a note for the buyer. A person
          approves any price or quantity change.
        </li>
        <li>
          <strong>Inventory and reorder questions.</strong> Reads stock by location and open purchase and
          sales orders. Writes nothing, or a draft purchase order that a person approves.
        </li>
        <li>
          <strong>Collections follow-up.</strong> Reads open invoices, payment history and contacts. Writes
          activity notes and draft reminders. A person approves messages to disputed or key accounts, and
          any credit memo.
        </li>
        <li>
          <strong>Order status answers.</strong> Reads sales orders, shipments and tracking numbers. Writes
          a log of what it answered. Routine answers need no approval, but the agent must confirm who is
          asking first.
        </li>
        <li>
          <strong>Item data cleanup.</strong> Reads item records and supplier catalogs. Writes proposed
          fixes to descriptions, weights and categories, applied after a person approves them. For new
          items, NetSuite also ships an Item Creation Assistant.
        </li>
      </ol>

      <h2>Architecture: How to Build an ERP Agent That Cannot Do Serious Damage</h2>

      <h3>Least Privilege, Read Tools and Write Tools</h3>
      <p>
        Create one user and role per agent. In NetSuite, use a custom role, not Administrator;
        Oracle&apos;s own AI Connector Service refuses Administrator roles too. In Odoo, create the bot
        user Odoo recommends, so access logs show the bot rather than a person. In SAP Business One, give
        the Service Layer user only the permissions its documents need.
      </p>
      <p>
        Then split the agent&apos;s abilities. Read tools look things up and can run freely. Write tools
        should be few, narrow and boring: create a draft sales order, add a note, set a confirmed ship
        date. No write tool should post a payment, change a price list or adjust stock by itself. In plain
        terms, a write tool contract looks like this:
      </p>
      <div className="not-prose my-6 p-5 rounded-2xl bg-[#FAFAF7] border border-[#E7DED6] font-mono text-xs sm:text-sm text-[#14110F] overflow-x-auto">
        <pre className="whitespace-pre">{`tool:         create_sales_order_draft
reads:        customer, ship-to, items, customer prices, credit status
writes:       one sales order, status = awaiting approval
unique key:   customer ID + customer PO number (check before writing)
refuse when:  price differs from the price list, new ship-to address,
              customer on credit hold, any item not found
log:          source file, extracted fields, API request, API response`}</pre>
      </div>

      <h3>Idempotency, Retries and Audit Logs</h3>
      <p>
        Idempotency means doing something twice has the same effect as doing it once. Give every inbound
        document a stable key, check for it before writing, and use each ERP&apos;s own protections:
        external IDs and idempotency keys in NetSuite, Customer Reference in Odoo, NumAtCard in SAP
        Business One.
      </p>
      <p>
        Retry with exponential backoff (waiting longer after each failure) plus a small random delay, and
        treat NetSuite&apos;s 429 and RESTlet 400 limit errors as signals to slow down. Reuse SAP Business
        One sessions. In Odoo, never resume a multi-call sequence halfway; read the record again first. Log
        every run: the source document, what the model extracted, each tool call and ERP response, and who
        approved it and when. That log is what settles a disputed order months later.
      </p>

      <h3>Sandbox, Shadow Mode and an Evaluation Set</h3>
      <p>
        Shadow mode means the agent works on real documents but its output is only compared, never saved.
        An evaluation set is a fixed collection of past documents with known correct answers, used to
        score every change. Go live in this order:
      </p>
      <ol>
        <li>
          Build and test in a sandbox: a NetSuite sandbox account, an Odoo.sh staging branch or Odoo Online
          testing duplicate, or a copy of your SAP Business One company database.
        </li>
        <li>
          Assemble an evaluation set of a few hundred real past documents with the correct ERP result for
          each, including the ugly scans and odd formats.
        </li>
        <li>
          Run shadow mode in production: the agent reads live documents and proposes records while people
          keep doing the real entry. Compare the two every day.
        </li>
        <li>
          Turn on write tools, behind approval, once the agent matches your team on the evaluation set and
          in shadow mode.
        </li>
        <li>
          Keep measuring: the share of drafts approved without edits, the exceptions caught, and the time
          from document received to record created.
        </li>
      </ol>

      <h2>Build vs Buy: Native ERP AI, Integration Platforms or a Custom Agent</h2>
      <p>
        There are three routes, each with real limits. FactoryJet builds the third, so weigh our view
        accordingly.
      </p>

      <h3>Native ERP AI</h3>
      <p>
        It wins when work happens inside the ERP with a person present: Bill Capture for supplier bills,
        the AI Connector Service for staff questions under their own role, and Odoo 19 agents and AI
        fields for in-app tasks. The limits: you get the vendor&apos;s scope and roadmap, and data sent to
        outside models follows that provider&apos;s terms.
      </p>

      <h3>Integration Platforms and Workflow Tools</h3>
      <p>
        They win when rules are fixed and data is clean, such as syncing orders, customers and stock
        between a store and the ERP. Coverage is uneven, so check each tool&apos;s own pages. On September
        17, 2026 they showed:
      </p>
      <ul>
        <li>
          Celigo, which calls itself an iPaaS for NetSuite and beyond, sells prebuilt Shopify to NetSuite
          and Shopify to SAP Business One integrations and lists AI agents among its platform
          capabilities.
        </li>
        <li>Boomi offers a prebuilt NetSuite connector over REST or SOAP, plus Agentstudio for agents.</li>
        <li>
          n8n has a built-in Odoo node. We found no built-in NetSuite or SAP Business One node, so those
          need its general HTTP Request node.
        </li>
        <li>
          Zapier&apos;s NetSuite app is a premium app with SuiteQL and record actions. Its Odoo app covers
          Odoo CRM leads and contacts only, and Zapier lists SAP Business One as not yet supported.
        </li>
        <li>Make has a verified Odoo app, and its NetSuite app is only available on Make&apos;s Enterprise plan.</li>
      </ul>
      <p>
        The limits: the core of each tool is rule-based flows you configure. If you already use Celigo
        or Boomi, their newer agent features are worth testing, but check them against your messiest
        documents, your approval steps and a real test set before you rely on them. Our{' '}
        <Link
          href="/blog/n8n-vs-zapier-vs-make-ai-workflow-automation-2026"
          className="text-[#B23E13] hover:underline"
        >
          n8n vs Zapier vs Make comparison
        </Link>{' '}
        covers those three in depth.
      </p>

      <h3>A Custom Agent</h3>
      <p>
        It wins when inputs are unstructured, the job crosses systems, or approvals and audit trails must
        fit your process. The limits: you pay for the build and the ongoing care, and it still depends on
        your ERP partner for roles and fields. A sensible setup is often both: an integration platform for
        the fixed syncs and an agent for the judgment calls.
      </p>

      <h2>How to Start Without Betting the Business</h2>
      <ol>
        <li>Pick one queue you can count, such as PDF purchase orders from your 20 largest customers.</li>
        <li>
          Confirm API access: OAuth 2.0 and spare concurrency in NetSuite, the Custom plan and your version
          in Odoo, or the Service Layer version and database type in SAP Business One.
        </li>
        <li>Ask your ERP partner to create the integration role, fields and approval workflow.</li>
        <li>Build the read tools and the evaluation set first.</li>
        <li>Run shadow mode, then switch on draft-only writes behind approval.</li>
        <li>Review exceptions every week and add one document type at a time.</li>
      </ol>
      <p>
        If you want help, our{' '}
        <Link href="/services/ai-integration-services" className="text-[#B23E13] hover:underline">
          AI integration services
        </Link>{' '}
        team connects agents to ERPs, our{' '}
        <Link href="/services/ai-agent-development" className="text-[#B23E13] hover:underline">
          AI agent development
        </Link>{' '}
        team builds the agent itself, and{' '}
        <Link href="/services/ai-workflow-automation" className="text-[#B23E13] hover:underline">
          AI workflow automation
        </Link>{' '}
        covers the rule-based flows around it.
      </p>

      <div className="my-10 p-8 rounded-2xl bg-[#FFF8F5] border border-[#E7DED6] text-center not-prose">
        <div className="font-mono text-xs text-[#B23E13] font-bold uppercase mb-2">
          // For NetSuite, Odoo and SAP Business One teams
        </div>
        <h3 className="text-2xl font-bold text-[#14110F] mb-4">Map Your First ERP Agent in 30 Minutes</h3>
        <p className="text-base text-[#46403B] max-w-xl mx-auto mb-6">
          Bring one document type and your ERP version. Bhavesh Barot will walk through the API access,
          limits and approval step it needs, and tell you plainly whether native ERP AI, an integration
          platform or a custom agent fits best.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-4">
          <a
            href="https://calendly.com/bhavesh-factoryjet/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-[#B23E13] text-white font-bold hover:bg-[#9A3510] transition-colors shadow-md text-sm"
          >
            Book a 30-Minute Call &rarr;
          </a>
          <Link
            href="/services/ai-agent-development"
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-white border border-[#E7DED6] text-[#14110F] font-bold hover:border-[#B23E13] transition-colors text-sm"
          >
            See AI Agent Development
          </Link>
        </div>
      </div>

      <p className="text-sm text-gray-500 italic">
        Sources checked on September 17, 2026: Oracle NetSuite Help Center pages on SOAP removal,
        token-based authentication, OAuth 2.0, concurrency governance, REST errors, upsert, idempotency,
        RESTlets, Pending Approval, sandbox refresh and AI features; Odoo 18 and 19 documentation, release
        notes, pricing and source code; SAP&apos;s Service Layer guide (updated July 27, 2026), SAP
        Business One SDK help, the SAP Business One product page and SAP Business AI release highlights;
        and the Celigo, Boomi, n8n, Zapier and Make integration pages.
      </p>
    </article>
  ),
};
