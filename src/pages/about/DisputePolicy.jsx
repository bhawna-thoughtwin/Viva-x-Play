import PageHeader from "./Header/Header";

const DisputePolicy = () => {
  return (
    <div className="w-full max-w-[1188px] bg-[#f5f7fb] rounded-[12px] overflow-hidden shadow-[0_4px_18px_rgba(15,23,42,0.06)] mx-auto">
      <PageHeader title="Dispute Policy" />

      <div
        style={{ fontFamily: "SF Pro, -apple-system, BlinkMacSystemFont, sans-serif" }}
        className="bg-white mx-[20px] mb-[20px] px-4 sm:px-6 md:px-8 py-6 md:py-8 rounded-[8px] shadow-[0_4px_8px_0_rgba(0,0,0,0.1),0_3px_10px_0_rgba(0,0,0,0.08)]"
      >

        <h2 className="text-[20px] md:text-[24px] font-bold leading-[100%] tracking-[0em] text-[#111827] mt-0 mb-2 whitespace-nowrap">
          1. Commitment to Fair Resolution
        </h2>

        <p className="text-[14px] leading-[150%] text-[#4b5563] mb-2 max-w-[900px]">
          TigerBet247 is committed to resolving all player complaints and disputes in a fair,
          transparent, and timely manner.
        </p>

        <h2 className="text-[20px] md:text-[24px] font-bold leading-[100%] tracking-[0em] text-[#111827] mt-6 mb-2">
          2. How to Submit a Complaint
        </h2>
        <p className="text-[14px] leading-[150%] text-[#4b5563] mb-2 max-w-[900px]">
          Players must first contact Customer Support via their registered email address.
          The complaint must include:
        </p>
        <ul className="list-disc pl-6 text-[14px] leading-[150%] text-[#4b5563] mb-2 max-w-[900px] space-y-[6px]">
          <li>The player's full name</li>
          <li>Username</li>
          <li>Registered email address</li>
          <li>A detailed description of the issue</li>
          <li>Any supporting evidence (if applicable)</li>
        </ul>
        <p className="text-[14px] leading-[150%] text-[#4b5563] mb-2 max-w-[900px]">
          Complaints should be submitted within 3 days of the issue occurring.
        </p>

        <h2 className="text-[20px] md:text-[24px] font-bold leading-[100%] tracking-[0em] text-[#111827] mt-6 mb-2">
          3. Internal Review Process
        </h2>
        <ul className="list-disc pl-6 text-[14px] leading-[150%] text-[#4b5563] mb-2 max-w-[900px] space-y-[6px]">
          <li>Complaints are acknowledged within 24 hours.</li>
          <li>An investigation is conducted by the relevant department.</li>
          <li>A formal response is provided within 7 business days.</li>
          <li>If additional time is required, the player will be notified.</li>
        </ul>

        <h2 className="text-[20px] md:text-[24px] font-bold leading-[100%] tracking-[0em] text-[#111827] mt-6 mb-2">
          4. Escalation
        </h2>
        <ul className="list-disc pl-6 text-[14px] leading-[150%] text-[#4b5563] mb-2 max-w-[900px] space-y-[6px]">
          <li>If the issue is not resolved satisfactorily, the matter may be escalated to senior management.</li>
          <li>A final internal decision will be issued after review.</li>
          <li>If the dispute remains unresolved, the player may contact the Curaçao regulatory authority under which TigerBet247 is licensed.</li>
        </ul>

        <h2 className="text-[20px] md:text-[24px] font-bold leading-[100%] tracking-[0em] text-[#111827] mt-6 mb-2">
          5. Fraudulent or Abusive
          <span className="hidden md:inline"> Complaints</span>
        </h2>
        <p className="text-[14px] leading-[150%] text-[#4b5563] mb-2 max-w-[900px]">
          TigerBet247 reserves the right to reject complaints that are:
        </p>
        <ul className="list-disc pl-6 text-[14px] leading-[150%] text-[#4b5563] mb-2 max-w-[900px] space-y-[6px]">
          <li>Fraudulent or submitted in bad faith</li>
          <li>Abusive or offensive in nature</li>
          <li>Repetitive without new supporting evidence</li>
        </ul>

        <h2 className="text-[20px] md:text-[24px] font-bold leading-[100%] tracking-[0em] text-[#111827] mt-6 mb-2">
          6. Governing Law
        </h2>
        <p className="text-[14px] leading-[150%] text-[#4b5563] mb-2 max-w-[900px]">
          All disputes are governed by the laws of Curaçao.
        </p>

      </div>
    </div>
  );
};

export default DisputePolicy;
