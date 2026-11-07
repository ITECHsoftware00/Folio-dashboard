# Folio business finance dashboard

The user chose business finance: cash flow, invoices and payments. Folio is a responsive, interactive demo for Studio North, with clearly labelled sample financial data. It answers: how much cash is available, and which invoices need attention?

The visual direction is Achromatic ledger, seed 742398286, with Geist typography, neutral navigation, understated ruled panels and forest-green financial series. The signature element is the operating-account card beside the cash flow chart, paired with the invoices awaiting payment. The sample account balance, monthly income, expenses and outstanding invoices are computed from integer-penny records.

Implementation is dependency-free HTML, CSS and JavaScript, served from dist. The original Vinext scaffold was replaced after dependency installation failed with network EACCES. All user-supplied text is escaped. Demo data is browser-local, not a bank integration. The snapshot date is 7 November 2026.

Views: Overview, Transactions, Invoices, Accounts, Cards, Reports, Settings. Actions: filters and search, transaction detail, invoice creation, recording invoice receipt, demo outgoing payment, CSV download, card freeze, workspace settings and explicit demo reset. Native modal dialogs provide focus management and Escape dismissal.

Validation: Node financial tests, syntax checks, desktop and mobile screenshots and browser interaction tests. The design inspector failed with a CDP timeout; browser inspection is used instead.
