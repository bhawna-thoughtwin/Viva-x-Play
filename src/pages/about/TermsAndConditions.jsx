import PageHeader from "./Header/Header";

const TermsAndConditions = () => {
  return (
    <div style={styles.page}>
      {/* Header bar */}
       <PageHeader title="Terms & Conditions" />

      {/* Content */}
      <div style={styles.content}>
        <h2 style={styles.sectionHeading}>1. Introduction</h2>
        <p style={styles.paragraph}>
          These Terms and Conditions and the documents referred to below (the "Terms") apply to 
          the use of the current website (the "Website") and its related or connected services 
          (collectively, the "Service").
        </p>
        <p style={styles.paragraph}>
          By using this Website and/or accessing the Service, whether as a guest or a registered 
          user with an account (the "Account"), you agree to be bound by these Terms, together 
          with any amendments published from time to time. If you do not accept these Terms, you 
          must refrain from accessing the Service and using the Website.
        </p>
        <p style={styles.paragraph}>
          The Service is owned and operated by Forward Solutions B.V., a limited liability company 
          registered in Curaçao with company registration number 156891, with its registered 
          address at Korporaalweg 10, Willemstad, Curaçao. The Company is licensed and regulated 
          in Curaçao for the provision of online games of chance under license number 
          OGL/2024/1226/0898.
        </p>

        <h2 style={styles.sectionHeading}>2. General Terms</h2>
        <p style={styles.paragraph}>
          We reserve the right to revise and amend these Terms at any time. Amendments become 
          binding and effective immediately upon publication on the Website. Continued use of 
          TigerBet247 following such publication constitutes your acceptance of the revised Terms.
        </p>
        <p style={styles.paragraph}>
          Any bets not settled prior to amended Terms taking effect will remain subject to the 
          pre-existing Terms.
        </p>

        <h2 style={styles.sectionHeading}>3. Your Obligations</h2>
        <p style={styles.paragraph}>
          By accessing TigerBet247, you confirm that:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            You are at least 18 years old or the legal gambling age in your jurisdiction.
          </li>
          <li style={styles.listItem}>
            You have the legal capacity to enter into a binding agreement.
          </li>
          <li style={styles.listItem}>
            You reside in a jurisdiction where online gambling is legal.
          </li>
          <li style={styles.listItem}>
            You do not use VPNs, proxies, or tools to mask your real location.
          </li>
          <li style={styles.listItem}>
            You are the authorized user of your chosen payment method.
          </li>
          <li style={styles.listItem}>
            You will not reverse payments or initiate chargebacks in bad faith.
          </li>
          <li style={styles.listItem}>
            You understand that gambling involves risk and you may lose deposited funds.
          </li>
          <li style={styles.listItem}>
            You act solely on your own behalf and not for commercial purposes.
          </li>
          <li style={styles.listItem}>
            You will not manipulate markets, games, or the integrity of the Service.
          </li>
          <li style={styles.listItem}>
            You are not registered as an Affiliate in our Affiliate Program (unless disclosed 
            and approved).
          </li>
        </ul>

        <h2 style={styles.sectionHeading}>4. Restricted Use</h2>
        <p style={styles.paragraph}>
          You must not use the Service:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            If under 18 or below your jurisdiction's legal gambling age.
          </li>
          <li style={styles.listItem}>
            If residing in a restricted or prohibited jurisdiction.
          </li>
          <li style={styles.listItem}>
            To collect other users' information (spam, scraping, unauthorized linking).
          </li>
          <li style={styles.listItem}>To disrupt or influence other users.</li>
          <li style={styles.listItem}>
            To cheat, collude, manipulate games, or exploit system vulnerabilities.
          </li>
          <li style={styles.listItem}>For unlawful or fraudulent activities.</li>
        </ul>
        <p style={styles.paragraph}>
          Accounts may not be sold, transferred, or shared. Funds cannot be transferred between 
          Accounts.
        </p>
        <p style={styles.paragraph}>
          Employees of the Company and related entities may not use the Service for real money 
          without written approval.
        </p>
        <p style={styles.paragraph}>
          We reserve the right to suspend or terminate Accounts for unauthorized use and pursue 
          legal action where necessary.
        </p>

        <h2 style={styles.sectionHeading}>5. Registration</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>We may refuse registration at our sole discretion.</li>
          <li style={styles.listItem}>
            You must complete registration personally and provide accurate details.
          </li>
          <li style={styles.listItem}>
            Identity verification (KYC) may be required before betting or withdrawals.
          </li>
          <li style={styles.listItem}>
            You must maintain a valid and secure Registered Email Address.
          </li>
          <li style={styles.listItem}>
            Only one Account per person is permitted. Multiple Accounts will be closed.
          </li>
          <li style={styles.listItem}>
            You are responsible for safeguarding your password and Account activity.
          </li>
          <li style={styles.listItem}>
            Providing false information may result in suspension, forfeiture of funds, and 
            potential legal action.
          </li>
        </ul>

        <h2 style={styles.sectionHeading}>6. Your Account</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>Accounts may support multiple currencies.</li>
          <li style={styles.listItem}>We do not provide credit.</li>
          <li style={styles.listItem}>
            We may suspend or close Accounts for compliance reasons.
          </li>
          <li style={styles.listItem}>Mistakenly credited funds remain our property.</li>
          <li style={styles.listItem}>Overdrawn Accounts create a debt owed to us.</li>
          <li style={styles.listItem}>
            TigerBet247 promotes responsible gambling. You may self-exclude through the 
            Responsible Gambling section. Self-exclusion is irreversible during the selected 
            period.
          </li>
          <li style={styles.listItem}>
            Accounts cannot be transferred, pledged, or assigned to third parties.
          </li>
        </ul>

        <h2 style={styles.sectionHeading}>7. Deposits</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            Deposits must originate from payment methods registered in your name.
          </li>
          <li style={styles.listItem}>Currency conversions may apply.</li>
          <li style={styles.listItem}>We use third-party payment processors.</li>
          <li style={styles.listItem}>
            Chargebacks are strictly prohibited and may result in Account termination and 
            forfeiture of winnings.
          </li>
          <li style={styles.listItem}>
            Player Accounts are not bank accounts and do not earn interest.
          </li>
          <li style={styles.listItem}>Funds from illegal sources must not be deposited.</li>
          <li style={styles.listItem}>
            Internet gambling legality is your responsibility to verify.
          </li>
        </ul>

        <h2 style={styles.sectionHeading}>8. Withdrawals</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            Withdrawals may only be made from cleared balances.
          </li>
          <li style={styles.listItem}>
            Additional verification may be required before processing withdrawals.
          </li>
          <li style={styles.listItem}>
            Withdrawals are generally returned to the original payment method.
          </li>
          <li style={styles.listItem}>
            Crypto deposits may be subject to a one-time wagering requirement.
          </li>
          <li style={styles.listItem}>
            We may refuse withdrawals if Restricted Use clauses are breached.
          </li>
        </ul>

        <h2 style={styles.sectionHeading}>9. Errors</h2>
        <p style={styles.paragraph}>
          In case of system errors, incorrect odds, pricing mistakes, or technical malfunctions:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>Affected bets may be voided.</li>
          <li style={styles.listItem}>We may recover overpayments.</li>
          <li style={styles.listItem}>We may adjust Account balances accordingly.</li>
        </ul>
        <p style={styles.paragraph}>
          You must notify us immediately upon discovering any error.
        </p>

        <h2 style={styles.sectionHeading}>10. Rules of Play</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>Results are considered final after 72 hours.</li>
          <li style={styles.listItem}>
            Voided or overturned results may result in refunds.
          </li>
          <li style={styles.listItem}>
            Minimum and maximum bet limits may change at our discretion.
          </li>
          <li style={styles.listItem}>
            Customers are responsible for reviewing their transaction history.
          </li>
          <li style={styles.listItem}>
            Specific Sports Betting Rules are available on a separate page.
          </li>
        </ul>

        <h2 style={styles.sectionHeading}>11. Communications</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            Communications must be made through Customer Support using your Registered Email.
          </li>
          <li style={styles.listItem}>
            We may communicate via Website announcements or email.
          </li>
          <li style={styles.listItem}>
            Promotional emails may be sent, and you may opt out at any time.
          </li>
        </ul>

        <h2 style={styles.sectionHeading}>12. Force Majeure</h2>
        <p style={styles.paragraph}>
          We are not liable for failure or delay caused by events beyond our control, including 
          natural disasters, government actions, technical failures, or third-party service 
          interruptions.
        </p>

        <h2 style={styles.sectionHeading}>13. Liability</h2>
        <p style={styles.paragraph}>
          To the fullest extent permitted by law:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            We are not liable for indirect or consequential losses.
          </li>
          <li style={styles.listItem}>
            Our total liability shall not exceed the lower of:
            <ul style={styles.nestedList}>
              <li style={styles.listItem}>The value of the relevant wager, or</li>
              <li style={styles.listItem}>€500 in aggregate.</li>
            </ul>
          </li>
          <li style={styles.listItem}>
            The Service is for consumer use only; we are not liable for business losses.
          </li>
        </ul>

        <h2 style={styles.sectionHeading}>14. Underage Gambling</h2>
        <p style={styles.paragraph}>
          If we suspect underage gambling:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>The Account will be suspended.</li>
          <li style={styles.listItem}>Winnings may be forfeited.</li>
          <li style={styles.listItem}>
            Deposits and winnings obtained while underage may be reclaimed.
          </li>
        </ul>

        <h2 style={styles.sectionHeading}>15. Fraud</h2>
        <p style={styles.paragraph}>
          Fraud, system abuse, or criminal acts will result in:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>Immediate Account termination</li>
          <li style={styles.listItem}>Confiscation of funds</li>
          <li style={styles.listItem}>Possible legal action</li>
        </ul>

        <h2 style={styles.sectionHeading}>16. Intellectual Property</h2>
        <p style={styles.paragraph}>
          All content, trademarks, logos, software, and systems are owned by Forward Solutions B.V.
        </p>
        <p style={styles.paragraph}>
          Unauthorized reproduction, scraping, copying, or commercial use is strictly prohibited.
        </p>

        <h2 style={styles.sectionHeading}>17. License</h2>
        <p style={styles.paragraph}>
          We grant you a limited, non-exclusive, non-transferable license to use the Service for 
          personal, non-commercial purposes only.
        </p>

        <h2 style={styles.sectionHeading}>18. Conduct</h2>
        <p style={styles.paragraph}>
          Prohibited behavior includes:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>Fraud, illegal activity, impersonation</li>
          <li style={styles.listItem}>Harassment, abusive or offensive content</li>
          <li style={styles.listItem}>Hacking, scraping, reverse engineering</li>
          <li style={styles.listItem}>Distributing viruses or harmful code</li>
          <li style={styles.listItem}>Creating Accounts through automated means</li>
        </ul>
        <p style={styles.paragraph}>
          We reserve the right to investigate and take action, including termination.
        </p>

        <h2 style={styles.sectionHeading}>19. KYC Policy of TigerBet247</h2>
        <p style={styles.paragraph}>
          TigerBet247 reserves the right to request KYC documentation at any time, including:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>Government-issued photo ID</li>
          <li style={styles.listItem}>Selfie holding ID</li>
          <li style={styles.listItem}>Utility bill or bank statement</li>
        </ul>
        <p style={styles.paragraph}>
          Failure to complete verification within 72 hours may result in restricted access or 
          confiscation of funds in accordance with applicable regulations.
        </p>

        <h2 style={styles.sectionHeading}>20. Complaints</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            Complaints must be submitted via Customer Support.
          </li>
          <li style={styles.listItem}>
            Disputes must be raised within three days of settlement.
          </li>
          <li style={styles.listItem}>
            If unresolved, complaints may be escalated to management.
          </li>
          <li style={styles.listItem}>
            Customers may lodge a complaint with the Curaçao licensing authority if necessary.
          </li>
        </ul>

        <h2 style={styles.sectionHeading}>21. Third-Party Links</h2>
        <p style={styles.paragraph}>
          TigerBet247 is not responsible for the content or practices of third-party websites 
          linked from our platform.
        </p>

        <h2 style={styles.sectionHeading}>22–25. Legal Provisions</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <strong>Assignment:</strong> We may assign rights without your consent.
          </li>
          <li style={styles.listItem}>
            <strong>Severability:</strong> Invalid provisions do not affect remaining Terms.
          </li>
          <li style={styles.listItem}>
            <strong>Governing Law:</strong> These Terms are governed by the laws of Curaçao.
          </li>
          <li style={styles.listItem}>
            <strong>Entire Agreement:</strong> These Terms constitute the full agreement between 
            you and the Company.
          </li>
        </ul>
        <p style={styles.paragraph}>
          English language version prevails in case of discrepancies.
        </p>
      </div>
    </div>
  );
};

const baseFont =
  '-apple-system, BlinkMacSystemFont, "SF Pro", "SF Pro Display", "Helvetica Neue", Arial, sans-serif';

const styles = {
  page: {
    width: '100%',
    maxWidth: '1188px',
    backgroundColor: '#f5f7fb',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 18px rgba(15, 23, 42, 0.06)',
  },
  header: {
    padding: '18px 24px',
    background: 'linear-gradient(0deg, #025877, #025877)',
  },
  headerTitle: {
    margin: 0,
    fontFamily: baseFont,
    fontWeight: 590,
    fontStyle: 'normal',
    fontSize: '30px',
    lineHeight: '100%',
    letterSpacing: '0',
    color: '#ffffff',
  },
  content: {
    padding: '24px 32px 32px',
    backgroundColor: '#ffffff',
  },
  sectionHeading: {
    fontFamily: baseFont,
    fontWeight: 590,
    fontStyle: 'normal',
    fontSize: '24px',
    lineHeight: '100%',
    letterSpacing: '0',
    color: '#111827',
    margin: '24px 0 8px',
  },
  subHeading: {
    fontFamily: baseFont,
    fontWeight: 590,
    fontStyle: 'normal',
    fontSize: '20px',
    lineHeight: '100%',
    letterSpacing: '0',
    color: '#111827',
    margin: '20px 0 6px',
  },
  paragraph: {
    fontFamily: baseFont,
    fontSize: '14px',
    lineHeight: '150%',
    color: '#4b5563',
    margin: '0 0 8px',
    maxWidth: '900px',
  },
  list: {
    fontFamily: baseFont,
    fontSize: '14px',
    lineHeight: '150%',
    color: '#4b5563',
    margin: '0 0 8px',
    paddingLeft: '24px',
    maxWidth: '900px',
  },
  nestedList: {
    fontFamily: baseFont,
    fontSize: '14px',
    lineHeight: '150%',
    color: '#4b5563',
    margin: '4px 0 0 0',
    paddingLeft: '24px',
    listStyleType: 'circle',
  },
  listItem: {
    marginBottom: '6px',
  },
};

export default TermsAndConditions;