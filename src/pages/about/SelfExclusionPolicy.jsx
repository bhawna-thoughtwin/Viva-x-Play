import PageHeader from "./Header/Header";

const SelfExclusionPolicy = () => {
  return (
    <div className="w-full max-w-[1188px] bg-[#f5f7fb] rounded-[12px] overflow-hidden shadow-[0_4px_18px_rgba(15,23,42,0.06)] mx-auto">
      <PageHeader title="Self-Exclusion Policy" breadcrumb />

      <div
        className="bg-white mx-[20px] mb-[20px] px-4 sm:px-6 md:px-8 py-6 md:py-8 rounded-[8px] shadow-[0_4px_8px_0_rgba(0,0,0,0.1),0_3px_10px_0_rgba(0,0,0,0.08)]"
      >

        <h2 className="text-[20px] md:text-[24px] font-bold leading-[100%] tracking-[0em] text-[#111827] mt-0 mb-2">
          1. Our Commitment
        </h2>
        <p className="text-[14px] leading-[150%] text-[#4b5563] mb-2 max-w-[900px]">
          TigerBet247 is committed to supporting players who wish to control or stop their
          gambling activities.
        </p>
        <p className="text-[14px] leading-[150%] text-[#4b5563] mb-2 max-w-[900px]">
          Self-exclusion is a responsible gaming tool designed to prevent access to the platform
          for a defined period.
        </p>

        <h2 className="text-[20px] md:text-[24px] font-bold leading-[100%] tracking-[0em] text-[#111827] mt-6 mb-2">
          2. Available Options
        </h2>
        <p className="text-[14px] leading-[150%] text-[#4b5563] mb-2 max-w-[900px]">
          Players may choose:
        </p>
        <ul className="list-disc pl-6 text-[14px] leading-[150%] text-[#4b5563] mb-2 max-w-[900px] space-y-[6px]">
          <li>24-hour cooling-off period</li>
          <li>7-day exclusion</li>
          <li>30-day exclusion</li>
          <li>6-month exclusion</li>
          <li>Permanent exclusion</li>
        </ul>
        <p className="text-[14px] leading-[150%] text-[#4b5563] mb-2 max-w-[900px]">
          <strong>Permanent exclusion is final and cannot be reversed.</strong>
        </p>

        <h2 className="text-[20px] md:text-[24px] font-bold leading-[100%] tracking-[0em] text-[#111827] mt-6 mb-2">
          3. How to Self-Exclude
        </h2>
        <p className="text-[14px] leading-[150%] text-[#4b5563] mb-2 max-w-[900px]">
          Players can:
        </p>
        <ul className="list-disc pl-6 text-[14px] leading-[150%] text-[#4b5563] mb-2 max-w-[900px] space-y-[6px]">
          <li>Activate self-exclusion through Account settings</li>
          <li>Contact Customer Support to request exclusion</li>
        </ul>
        <p className="text-[14px] leading-[150%] text-[#4b5563] mb-2 max-w-[900px]">
          Requests are processed immediately.
        </p>

        <h2 className="text-[20px] md:text-[24px] font-bold leading-[100%] tracking-[0em] text-[#111827] mt-6 mb-2">
          4. During Self-Exclusion
        </h2>
        <ul className="list-disc pl-6 text-[14px] leading-[150%] text-[#4b5563] mb-2 max-w-[900px] space-y-[6px]">
          <li>Account access is blocked.</li>
          <li>Deposits and wagers are disabled.</li>
          <li>Pending bets settle normally.</li>
          <li>Promotional communications are stopped.</li>
          <li>Bonuses are forfeited.</li>
        </ul>

        <h2 className="text-[20px] md:text-[24px] font-bold leading-[100%] tracking-[0em] text-[#111827] mt-6 mb-2">
          5. Reactivation
        </h2>
        <ul className="list-disc pl-6 text-[14px] leading-[150%] text-[#4b5563] mb-2 max-w-[900px] space-y-[6px]">
          <li>
            Temporary exclusions expire automatically after the selected period.
          </li>
          <li>Permanent exclusions cannot be reversed.</li>
          <li>
            Players may be required to complete a responsible gaming assessment before
            reactivation (where applicable).
          </li>
        </ul>

        <h2 className="text-[20px] md:text-[24px] font-bold leading-[100%] tracking-[0em] text-[#111827] mt-6 mb-2">
          6. Breach of Self-Exclusion
        </h2>
        <p className="text-[14px] leading-[150%] text-[#4b5563] mb-2 max-w-[900px]">
          If a player attempts to create a new account during exclusion:
        </p>
        <ul className="list-disc pl-6 text-[14px] leading-[150%] text-[#4b5563] mb-2 max-w-[900px] space-y-[6px]">
          <li>The account will be closed.</li>
          <li>Funds may be forfeited.</li>
          <li>The exclusion period may be extended.</li>
        </ul>

        <h2 className="text-[20px] md:text-[24px] font-bold leading-[100%] tracking-[0em] text-[#111827] mt-6 mb-2">
          7. Additional Support
        </h2>
        <p className="text-[14px] leading-[150%] text-[#4b5563] mb-2 max-w-[900px]">
          Players are encouraged to seek help from professional support organizations if
          gambling becomes problematic.
        </p>

      </div>
    </div>
  );
};

export default SelfExclusionPolicy;
