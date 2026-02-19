import PageHeader from "./Header/Header";

const AMLPolicy = () => {
  return (
    <div className="w-full max-w-[1188px] bg-[#f5f7fb] rounded-[12px] overflow-hidden shadow-[0_4px_18px_rgba(15,23,42,0.06)] mx-auto">

      <PageHeader title="AML Policy" />

      <div className="bg-white px-4 sm:px-6 md:px-8 py-6 md:py-8">

        {/* 1 */}
        <h2 className="text-[20px] md:text-[24px] font-[590] text-[#111827] mt-6 mb-2 leading-[100%]">
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
          The Company complies with applicable Curaçao AML legislation, FATF Recommendations,
          and relevant EU AML Directives as adopted locally.
        </p>

        {/* 2 */}
        <h2 className="text-[20px] md:text-[24px] font-[590] text-[#111827] mt-6 mb-2 leading-[100%]">
          2. Governance and Accountability
        </h2>

        <h3 className="text-[18px] md:text-[20px] font-[590] text-[#111827] mt-5 mb-2 leading-[100%]">
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

        {/* Continue same pattern for all sections */}

        {/* Contact Section */}
        <h2 className="text-[20px] md:text-[24px] font-[590] text-[#111827] mt-6 mb-2 leading-[100%]">
          10. Contact Information
        </h2>

        <p className="text-[14px] leading-[150%] text-[#4b5563] mb-2 max-w-[900px]">
          Compliance Department: <strong>compliance@tigerbet247.com</strong>
        </p>

        <p className="text-[14px] leading-[150%] text-[#4b5563] mb-2 max-w-[900px]">
          Operator: <strong>Forward Solutions B.V., Curaçao</strong>
        </p>

        <p className="text-[14px] leading-[150%] text-[#4b5563] mb-2 max-w-[900px]">
          Website: <strong>www.tigerbet247.com</strong>
        </p>

      </div>
    </div>
  );
};

export default AMLPolicy;
