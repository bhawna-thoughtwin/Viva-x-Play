import PageHeader from "./Header/Header";

const ResponsibleGaming = () => {
  return (
    <div style={styles.page}>
      {/* Header bar */}
       <PageHeader title="Responsible Gaming Policy" />

      {/* Content */}
      <div style={styles.content}>
        <h2 style={styles.sectionHeading}>1. Policy Statement</h2>
        <p style={styles.paragraph}>
          Forward Solutions B.V., operator of TigerBet247, is committed to providing a secure, 
          transparent, and responsible gaming environment. While online gaming is a source of 
          entertainment for most users, we acknowledge that a small number of individuals may 
          experience gambling-related issues.
        </p>
        <p style={styles.paragraph}>
          This policy outlines our approach to preventing problem gambling, protecting players, 
          and maintaining compliance with the responsible gaming requirements of the Curaçao 
          eGaming regulatory framework, as well as internationally recognized standards including 
          UKGC, MGA, and other best-practice regulators.
        </p>

        <h2 style={styles.sectionHeading}>2. Regulatory Compliance</h2>
        <p style={styles.paragraph}>
          All operations of TigerBet247 are conducted in accordance with the Curaçao eGaming 
          License Regulations and applicable international responsible gaming standards.
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>Responsible gaming procedures are reviewed annually.</li>
          <li style={styles.listItem}>Staff training, documentation, and enforcement actions are recorded.</li>
          <li style={styles.listItem}>Records are available to the regulator upon request.</li>
          <li style={styles.listItem}>Updates to this policy are submitted to the regulator where required.</li>
        </ul>

        <h2 style={styles.sectionHeading}>3. Age and Identity Verification</h2>
        <p style={styles.paragraph}>
          TigerBet247 strictly enforces Know Your Customer (KYC) and age verification procedures 
          for all users prior to any deposit or withdrawal.
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>Underage gambling is strictly prohibited.</li>
          <li style={styles.listItem}>
            Minimum age is 18 or the legal age in the player's jurisdiction, whichever is higher.
          </li>
          <li style={styles.listItem}>
            Accounts identified as belonging to minors will be suspended immediately.
          </li>
          <li style={styles.listItem}>
            Balances may be forfeited and authorities notified when legally required.
          </li>
        </ul>
        <p style={styles.paragraph}>
          These procedures are essential for preventing access by minors and protecting player 
          integrity.
        </p>

        <h2 style={styles.sectionHeading}>4. Keeping Gaming Fun</h2>
        <p style={styles.paragraph}>
          Gaming should always remain enjoyable. To help maintain a balanced and healthy approach, 
          we encourage players to:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>Set a budget before playing and respect it.</li>
          <li style={styles.listItem}>Avoid chasing losses.</li>
          <li style={styles.listItem}>Only play with money you can afford to lose.</li>
          <li style={styles.listItem}>Take regular breaks to avoid excessive sessions.</li>
          <li style={styles.listItem}>Avoid gaming when tired, stressed, or under the influence.</li>
          <li style={styles.listItem}>
            View gaming as entertainment, not income or a financial strategy.
          </li>
        </ul>
        <p style={styles.paragraph}>
          If gaming stops feeling enjoyable, we recommend using the tools detailed in this policy.
        </p>

        <h2 style={styles.sectionHeading}>5. Player Protection Tools</h2>
        <p style={styles.paragraph}>
          TigerBet247 provides a comprehensive set of tools to support safe and controlled gaming:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <strong>Deposit Limits:</strong> Daily, weekly, or monthly caps on deposits.
          </li>
          <li style={styles.listItem}>
            <strong>Loss Limits:</strong> Restrictions on net losses over a selected period.
          </li>
          <li style={styles.listItem}>
            <strong>Wagering Limits:</strong> Limits on total stakes or maximum bet sizes.
          </li>
          <li style={styles.listItem}>
            <strong>Session Limits:</strong> Automatic time reminders or logouts after extended play.
          </li>
          <li style={styles.listItem}>
            <strong>Time Outs:</strong> Short cooling-off periods where access is temporarily blocked.
          </li>
          <li style={styles.listItem}>
            <strong>Self-Exclusion:</strong> Temporary exclusions from 1 week to 6 months, or 
            permanent exclusions. Permanent exclusions are final and cannot be reversed.
          </li>
          <li style={styles.listItem}>
            <strong>Account History:</strong> Full visibility into deposits, withdrawals, and wagers.
          </li>
        </ul>
        <p style={styles.paragraph}>
          All responsible gaming settings are binding, enforced in real time, and cannot be 
          overridden or manually reversed by our team until their duration expires.
        </p>
        <p style={styles.paragraph}>
          TigerBet247 may also impose mandatory limits where concerning behavior is detected.
        </p>

        <h2 style={styles.sectionHeading}>6. Self-Exclusion Procedures</h2>
        <p style={styles.paragraph}>
          Players may self-exclude through their Account settings or by contacting Customer Support.
        </p>
        <p style={styles.paragraph}>
          During self-exclusion:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>Account access is blocked.</li>
          <li style={styles.listItem}>No deposits or wagers can be made.</li>
          <li style={styles.listItem}>Pending wagers settle normally.</li>
          <li style={styles.listItem}>Players are removed from all promotional communications.</li>
          <li style={styles.listItem}>Permanent exclusions are final.</li>
        </ul>
        <p style={styles.paragraph}>
          Players must not attempt to bypass exclusion by creating new Accounts.
        </p>

        <h2 style={styles.sectionHeading}>7. Monitoring and Intervention</h2>
        <p style={styles.paragraph}>
          Player activity is monitored using automated risk detection systems and human oversight.
        </p>
        <p style={styles.paragraph}>
          Indicators of concern include:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>Excessive or rapid deposits.</li>
          <li style={styles.listItem}>Prolonged continuous play.</li>
          <li style={styles.listItem}>Erratic or compulsive betting patterns.</li>
          <li style={styles.listItem}>Multiple failed deposit attempts.</li>
          <li style={styles.listItem}>Signs of financial or emotional distress.</li>
        </ul>
        <p style={styles.paragraph}>
          If concerning indicators appear, TigerBet247 may:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>Contact the player with guidance and support.</li>
          <li style={styles.listItem}>Recommend setting limits or taking time out.</li>
          <li style={styles.listItem}>Apply mandatory cooling-off periods.</li>
          <li style={styles.listItem}>Impose account restrictions or suspensions.</li>
          <li style={styles.listItem}>Enforce permanent exclusion if necessary.</li>
        </ul>
        <p style={styles.paragraph}>
          All interactions are logged for regulatory review.
        </p>

        <h2 style={styles.sectionHeading}>8. Staff Training</h2>
        <p style={styles.paragraph}>
          Employees involved in customer interaction, payments, or compliance receive annual 
          responsible gaming training.
        </p>
        <p style={styles.paragraph}>
          Training covers:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>Identifying problem gambling indicators.</li>
          <li style={styles.listItem}>Processing limit and exclusion requests correctly.</li>
          <li style={styles.listItem}>Interacting sensitively with at-risk players.</li>
          <li style={styles.listItem}>Escalation and reporting procedures.</li>
        </ul>
        <p style={styles.paragraph}>
          Completion of training is logged and available for inspection by regulators.
        </p>

        <h2 style={styles.sectionHeading}>9. Marketing and Promotions</h2>
        <p style={styles.paragraph}>
          All marketing for TigerBet247 adheres to responsible advertising standards.
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>No promotions target minors or vulnerable individuals.</li>
          <li style={styles.listItem}>Self-excluded players do not receive promotional materials.</li>
          <li style={styles.listItem}>
            Advertising never suggests gambling as a financial solution or path to success.
          </li>
          <li style={styles.listItem}>All promotions include clear and transparent terms.</li>
        </ul>
        <p style={styles.paragraph}>
          We are committed to ensuring that all promotional activity is ethical and compliant.
        </p>

        <h2 style={styles.sectionHeading}>10. Fair Gaming and RTP Disclosure</h2>
        <p style={styles.paragraph}>
          TigerBet247 ensures that all games offered meet strict fairness and randomness standards.
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            All games are tested and certified by approved third-party laboratories.
          </li>
          <li style={styles.listItem}>Random Number Generators (RNGs) are audited periodically.</li>
          <li style={styles.listItem}>
            Return to Player (RTP) values are clearly displayed on each game.
          </li>
          <li style={styles.listItem}>
            No external or internal factors can influence game outcomes.
          </li>
        </ul>
        <p style={styles.paragraph}>
          These measures ensure that every game is fair and compliant.
        </p>

        <h2 style={styles.sectionHeading}>11. Data Protection</h2>
        <p style={styles.paragraph}>
          All responsible gaming data, including limit settings, exclusions, and behavioral 
          monitoring information, is securely stored and processed in accordance with Curaçao 
          data protection requirements and relevant international privacy laws, including GDPR 
          where applicable.
        </p>
        <p style={styles.paragraph}>
          Information is only shared with third parties where legally required or for regulatory 
          compliance purposes.
        </p>

        <h2 style={styles.sectionHeading}>12. Support Resources</h2>
        <p style={styles.paragraph}>
          We encourage players experiencing difficulty to seek help from independent organizations 
          specializing in problem gambling support:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <strong>Gambling Therapy</strong> – <a href="https://www.gamblingtherapy.org" style={styles.link} target="_blank" rel="noopener noreferrer">www.gamblingtherapy.org</a>
          </li>
          <li style={styles.listItem}>
            <strong>GamCare</strong> – <a href="https://www.gamcare.org.uk" style={styles.link} target="_blank" rel="noopener noreferrer">www.gamcare.org.uk</a>
          </li>
          <li style={styles.listItem}>
            <strong>Gamblers Anonymous</strong> – <a href="https://www.gamblersanonymous.org" style={styles.link} target="_blank" rel="noopener noreferrer">www.gamblersanonymous.org</a>
          </li>
        </ul>
        <p style={styles.paragraph}>
          Links to these resources are available throughout the platform.
        </p>

        <h2 style={styles.sectionHeading}>13. Review and Continuous Improvement</h2>
        <p style={styles.paragraph}>
          This policy is reviewed annually by the Compliance Officer of Forward Solutions B.V. 
          and updated as required to reflect regulatory developments, operational improvements, 
          and best practice standards.
        </p>
        <p style={styles.paragraph}>
          TigerBet247 remains committed to placing player wellbeing at the center of our operations.
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
    listStyleType: 'disc',
  },
  listItem: {
    marginBottom: '6px',
    display: 'list-item',
    listStyleType: 'disc',
  },
  link: {
    color: '#025877',
    textDecoration: 'none',
  },
};

export default ResponsibleGaming;