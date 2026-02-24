import PageHeader from "./Header/Header";

const AMLPolicy = () => {
  return (
    <div className="w-full max-w-[1188px] bg-[#f5f7fb] rounded-[12px] overflow-hidden shadow-[0_4px_18px_rgba(15,23,42,0.06)] mx-auto">

      <PageHeader title="AML Policy" />

      <div
        style={{ fontFamily: "SF Pro, -apple-system, BlinkMacSystemFont, sans-serif" }}
        className="bg-white mx-[20px] mb-[20px] px-4 sm:px-6 md:px-8 py-6 md:py-8 rounded-[8px] shadow-[0_4px_8px_0_rgba(0,0,0,0.1),0_3px_10px_0_rgba(0,0,0,0.08)]"
      >

        {/* 1 */}
        <h2 className="text-[20px] md:text-[24px] font-bold leading-[100%] tracking-[0em] text-[#111827] mt-0 mb-2">
          1. Purpose and Scope
        </h2>

        <p className="text-[14px] leading-[150%] text-[#4b5563] mb-2 max-w-[900px]">
          This AML/CFT Policy establishes the internal framework of Forward Solutions B.V.
          ("the Company") to prevent its gaming platform, TigerBet247, from being
          used for money laundering, terrorist financing, or other financial crimes.
        </p>

        <p className="text-[14px] leading-[150%] text-[#4b5563] mb-2 max-w-[900px]">
          This Policy applies to:
        </p>

        <ul className="list-disc pl-6 text-[14px] leading-[150%] text-[#4b5563] mb-2 max-w-[900px] space-y-[6px]">
          <li>All players and users of TigerBet247</li>
          <li>All employees, contractors, and agents</li>
          <li>All partners providing payment, KYC, data-processing, or compliance services</li>
        </ul>

        <p className="text-[14px] leading-[150%] text-[#4b5563] mb-2 max-w-[900px]">
          The Company complies with applicable Curaçao AML legislation,
          FATF Recommendations, and relevant EU AML Directives as adopted locally.
        </p>

        {/* 2 */}
        <h2 className="text-[20px] md:text-[24px] font-bold leading-[100%] tracking-[0em] text-[#111827] mt-6 mb-2">
          2. Governance and Accountability
        </h2>

        <h3 className="text-[20px] md:text-[20px] font-bold leading-[100%] tracking-[0em] text-[#111827] mt-5 mb-2">
          2.1 Money Laundering Reporting Officer (MLRO)
        </h3>

        <p className="text-[14px] leading-[150%] text-[#4b5563] mb-2 max-w-[900px]">
          A qualified MLRO is appointed to design, maintain, and oversee the AML program.
          Responsibilities include:
        </p>

        <ul className="list-disc pl-6 text-[14px] leading-[150%] text-[#4b5563] mb-2 max-w-[900px] space-y-[6px]">
          <li>Implementing and updating this Policy</li>
          <li>Reviewing alerts and internal suspicious activity reports</li>
          <li>Communicating with the Financial Intelligence Unit (FIU Curaçao)</li>
          <li>Ensuring staff training and proper recordkeeping</li>
          <li>Reporting annually to senior management</li>
        </ul>

        <h3 className="text-[20px] md:text-[20px] font-bold leading-[100%] tracking-[0em] text-[#111827] mt-5 mb-2">
          2.2 Management Oversight
        </h3>

        <p className="text-[14px] leading-[150%] text-[#4b5563] mb-2 max-w-[900px]">
          Senior management provides oversight and adequate resources for AML controls,
          ensures the independence of the MLRO, and reviews AML performance
          and audit results at least once per year.
        </p>

        {/* 3 */}
        <h2 className="text-[20px] md:text-[24px] font-bold leading-[100%] tracking-[0em] text-[#111827] mt-6 mb-2">
          3. Risk-Based Approach
        </h2>

        <p className="text-[14px] leading-[150%] text-[#4b5563] mb-2 max-w-[900px]">
          TigerBet247 applies a risk-based framework, categorizing customers and
          transactions as low, medium, or high risk based on:
        </p>

        <ul className="list-disc pl-6 text-[14px] leading-[150%] text-[#4b5563] mb-2 max-w-[900px] space-y-[6px]">
          <li>Country of residence or IP location</li>
          <li>Payment methods (including crypto and fiat channels)</li>
          <li>Transaction volume and behavioral patterns</li>
          <li>Gameplay indicators and account activity</li>
        </ul>

        <p className="text-[14px] leading-[150%] text-[#4b5563] mb-2 max-w-[900px]">
          Enhanced controls and manual reviews apply to high-risk customers and transactions.
        </p>

        {/* 4 */}
        <h2 className="text-[20px] md:text-[24px] font-bold leading-[100%] tracking-[0em] text-[#111827] mt-6 mb-2">
          4. Control Measures
        </h2>

        <h3 className="text-[20px] md:text-[20px] font-bold leading-[100%] tracking-[0em] text-[#111827] mt-5 mb-2">
          4.1 Customer Due Diligence (CDD)
        </h3>

        <p className="text-[14px] leading-[150%] text-[#4b5563] mb-2 max-w-[900px]">
          <strong>Objective:</strong> Verify the identity of each customer and ensure funds are legitimate before significant transactions occur.
        </p>

        <ul className="list-disc pl-6 text-[14px] leading-[150%] text-[#4b5563] mb-2 max-w-[900px] space-y-[6px]">
          <li>Collection of information: Full name, date of birth, residential address, email, and payment method</li>
          <li>Identity verification: Government-issued photo ID and proof of address (not older than three months)</li>
          <li>Payment method verification: Confirmation of ownership of the card, wallet, or account used</li>
          <li>Sanction screening against FATF, EU, UN, and OFAC lists</li>
        </ul>

        <h3 className="text-[20px] md:text-[20px] font-bold leading-[100%] tracking-[0em] text-[#111827] mt-5 mb-2">
          4.2 Enhanced Due Diligence (EDD)
        </h3>

        <p className="text-[14px] leading-[150%] text-[#4b5563] mb-2 max-w-[900px]">
          Additional scrutiny applies to high-risk customers including PEPs,
          sanctioned jurisdictions, unusual crypto transactions,
          or activity inconsistent with profile.
        </p>

        <h3 className="text-[20px] md:text-[20px] font-bold leading-[100%] tracking-[0em] text-[#111827] mt-5 mb-2">
          4.3 Transaction Monitoring
        </h3>

        <ul className="list-disc pl-6 text-[14px] leading-[150%] text-[#4b5563] mb-2 max-w-[900px] space-y-[6px]">
          <li>Automated monitoring of deposits, wagers, and withdrawals</li>
          <li>Detection of rapid deposits followed by withdrawals</li>
          <li>Multiple payment source detection</li>
          <li>Linked accounts via IP or device</li>
          <li>Crypto-to-fiat conversions without gaming intent</li>
        </ul>

        <h3 className="text-[20px] md:text-[20px] font-bold leading-[100%] tracking-[0em] text-[#111827] mt-5 mb-2">
          4.4 Suspicious Activity Reporting
        </h3>

        <ul className="list-disc pl-6 text-[14px] leading-[150%] text-[#4b5563] mb-2 max-w-[900px] space-y-[6px]">
          <li>Employees must submit SARs to the MLRO immediately</li>
          <li>MLRO assesses evidence and escalates if required</li>
          <li>Confirmed cases reported to FIU Curaçao without delay</li>
          <li>Strict anti-tipping-off policy</li>
          <li>Records retained for at least five years</li>
        </ul>

        {/* 5 */}
        <h2 className="text-[20px] md:text-[24px] font-bold leading-[100%] tracking-[0em] text-[#111827] mt-6 mb-2">
          5. Prohibited Jurisdictions and Customers
        </h2>

        <p className="text-[14px] leading-[150%] text-[#4b5563] mb-2 max-w-[900px]">
          TigerBet247 does not provide services to customers from restricted
          or high-risk jurisdictions as determined by regulatory guidance.
        </p>

        {/* 6 */}
        <h2 className="text-[20px] md:text-[24px] font-bold leading-[100%] tracking-[0em] text-[#111827] mt-6 mb-2">
          6. Recordkeeping
        </h2>

        <p className="text-[14px] leading-[150%] text-[#4b5563] mb-2 max-w-[900px]">
          All KYC documentation, EDD records, transaction data, and SARs are securely stored
          for a minimum of five years after the end of the customer relationship.
        </p>

        {/* 7 */}
        <h2 className="text-[20px] md:text-[24px] font-bold leading-[100%] tracking-[0em] text-[#111827] mt-6 mb-2">
          7. Training and Awareness
        </h2>

        <p className="text-[14px] leading-[150%] text-[#4b5563] mb-2 max-w-[900px]">
          All employees receive AML/CFT training upon hiring and annually thereafter.
        </p>

        {/* 8 */}
        <h2 className="text-[20px] md:text-[24px] font-bold leading-[100%] tracking-[0em] text-[#111827] mt-6 mb-2">
          8. Independent Audit
        </h2>

        <p className="text-[14px] leading-[150%] text-[#4b5563] mb-2 max-w-[900px]">
          An independent audit of AML controls is conducted annually.
        </p>

        {/* 9 */}
        <h2 className="text-[20px] md:text-[24px] font-bold leading-[100%] tracking-[0em] text-[#111827] mt-6 mb-2">
          9. Policy Review and Updates
        </h2>

        <p className="text-[14px] leading-[150%] text-[#4b5563] mb-2 max-w-[900px]">
          This Policy is reviewed at least annually or immediately following
          material regulatory changes.
        </p>

        {/* 10 */}
        <h2 className="text-[20px] md:text-[24px] font-bold leading-[100%] tracking-[0em] text-[#111827] mt-6 mb-2">
          10. Contact Information
        </h2>

        <p className="text-[14px] text-[#4b5563] mb-2 max-w-[900px]">
          Compliance Department: <strong>compliance@tigerbet247.com</strong>
        </p>

        <p className="text-[14px] text-[#4b5563] mb-2 max-w-[900px]">
          Operator: <strong>Forward Solutions B.V., Curaçao</strong>
        </p>

        <p className="text-[14px] text-[#4b5563] mb-2 max-w-[900px]">
          Website: <strong>www.tigerbet247.com</strong>
        </p>

      </div>
    </div>
  );
};

export default AMLPolicy;
