import PageHeader from "./Header/Header";

const KYCPolicy = () => {
  return (
    <div className="w-full max-w-[1188px] bg-[#f5f7fb] rounded-[12px] overflow-hidden shadow-[0_4px_18px_rgba(15,23,42,0.06)] mx-auto">
      <PageHeader title="KYC Policy" />

      <div
        style={{ fontFamily: "SF Pro, -apple-system, BlinkMacSystemFont, sans-serif" }}
        className="bg-white mx-[20px] mb-[20px] px-4 sm:px-6 md:px-8 py-6 md:py-8 rounded-[8px] shadow-[0_4px_8px_0_rgba(0,0,0,0.1),0_3px_10px_0_rgba(0,0,0,0.08)]"
      >

        <h2 className="text-[20px] md:text-[24px] font-bold leading-[100%] tracking-[0em] text-[#111827] mt-0 mb-2">
          1. Purpose
        </h2>
        <p className="text-[14px] leading-[150%] text-[#4b5563] mb-2 max-w-[900px]">
          TigerBet247 operates under strict Anti-Money Laundering (AML) and Know Your Customer
          (KYC) regulations to prevent fraud, money laundering, terrorist financing, and underage
          gambling.
        </p>

        <h2 className="text-[20px] md:text-[24px] font-bold leading-[100%] tracking-[0em] text-[#111827] mt-6 mb-2">
          2. When Verification Is Required
        </h2>
       <p className="text-[14px] leading-[150%] text-[#4b5563] mb-2 max-w-[900px] whitespace-nowrap md:whitespace-normal">
  KYC verification may be required:
</p>
        <ul className="list-disc pl-6 text-[14px] leading-[150%] text-[#4b5563] mb-2 max-w-[900px] space-y-[6px]">
          <li>Before first withdrawal</li>
          <li>When deposit thresholds are exceeded</li>
          <li>If suspicious activity is detected</li>
          <li>If multiple accounts are suspected</li>
          <li>At the Company's discretion for compliance purposes</li>
        </ul>

        <h2 className="text-[20px] md:text-[24px] font-bold leading-[100%] tracking-[0em] text-[#111827] mt-6 mb-2">
          3. Required Documentation
        </h2>
        <p className="text-[14px] leading-[150%] text-[#4b5563] mb-2 max-w-[900px]">
          Players may be asked to provide:
        </p>
        <ul className="list-disc pl-6 text-[14px] leading-[150%] text-[#4b5563] mb-2 max-w-[900px] space-y-[6px]">
          <li>Government-issued photo ID (passport, driver's license, national ID)</li>
          <li>Selfie holding the ID</li>
          <li>Proof of address (utility bill or bank statement dated within 3 months)</li>
          <li>Source of funds documentation (if required)</li>
        </ul>

        <h2 className="text-[20px] md:text-[24px] font-bold leading-[100%] tracking-[0em] text-[#111827] mt-6 mb-2">
          4. Verification Timeline
        </h2>
        <p className="text-[14px] leading-[150%] text-[#4b5563] mb-2 max-w-[900px]">
          Players must submit requested documents within 72 hours of notification.
        </p>
        <p className="text-[14px] leading-[150%] text-[#4b5563] mb-2 max-w-[900px]">
          Failure to comply may result in:
        </p>
        <ul className="list-disc pl-6 text-[14px] leading-[150%] text-[#4b5563] mb-2 max-w-[900px] space-y-[6px]">
          <li>Account suspension</li>
          <li>Withdrawal restrictions</li>
          <li>Temporary or permanent account closure</li>
          <li>Confiscation of funds where legally permitted</li>
        </ul>

        <h2 className="text-[20px] md:text-[24px] font-bold leading-[100%] tracking-[0em] text-[#111827] mt-6 mb-2">
          5. Ongoing Monitoring
        </h2>
        <p className="text-[14px] leading-[150%] text-[#4b5563] mb-2 max-w-[900px]">
          TigerBet247 conducts ongoing transaction monitoring to detect suspicious behavior.
        </p>
        <p className="text-[14px] leading-[150%] text-[#4b5563] mb-2 max-w-[900px]">
          The Company reserves the right to report suspicious activity to relevant authorities.
        </p>

        <h2 className="text-[20px] md:text-[24px] font-bold leading-[100%] tracking-[0em] text-[#111827] mt-6 mb-2">
          6. Data Protection
        </h2>
        <p className="text-[14px] leading-[150%] text-[#4b5563] mb-2 max-w-[900px]">
          All verification data is securely stored and processed in accordance with applicable
          data protection regulations. Documents are used solely for compliance purposes.
        </p>

      </div>
    </div>
  );
};

export default KYCPolicy;
