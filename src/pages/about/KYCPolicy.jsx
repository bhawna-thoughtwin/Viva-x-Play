import PageHeader from "./Header/Header";

const KYCPolicy = () => {
  return (
    <div style={styles.page}>
      {/* Header bar */}
     <PageHeader title="KYC Policy" />

      {/* Content */}
      <div style={styles.content}>
        <h2 style={styles.sectionHeading}>1. Purpose</h2>
        <p style={styles.paragraph}>
          TigerBet247 operates under strict Anti-Money Laundering (AML) and Know Your Customer 
          (KYC) regulations to prevent fraud, money laundering, terrorist financing, and underage 
          gambling.
        </p>

        <h2 style={styles.sectionHeading}>2. When Verification Is Required</h2>
        <p style={styles.paragraph}>
          KYC verification may be required:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>Before first withdrawal</li>
          <li style={styles.listItem}>When deposit thresholds are exceeded</li>
          <li style={styles.listItem}>If suspicious activity is detected</li>
          <li style={styles.listItem}>If multiple accounts are suspected</li>
          <li style={styles.listItem}>At the Company's discretion for compliance purposes</li>
        </ul>

        <h2 style={styles.sectionHeading}>3. Required Documentation</h2>
        <p style={styles.paragraph}>
          Players may be asked to provide:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            Government-issued photo ID (passport, driver's license, national ID)
          </li>
          <li style={styles.listItem}>Selfie holding the ID</li>
          <li style={styles.listItem}>
            Proof of address (utility bill or bank statement dated within 3 months)
          </li>
          <li style={styles.listItem}>Source of funds documentation (if required)</li>
        </ul>

        <h2 style={styles.sectionHeading}>4. Verification Timeline</h2>
        <p style={styles.paragraph}>
          Players must submit requested documents within 72 hours of notification.
        </p>
        <p style={styles.paragraph}>
          Failure to comply may result in:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>Account suspension</li>
          <li style={styles.listItem}>Withdrawal restrictions</li>
          <li style={styles.listItem}>Temporary or permanent account closure</li>
          <li style={styles.listItem}>Confiscation of funds where legally permitted</li>
        </ul>

        <h2 style={styles.sectionHeading}>5. Ongoing Monitoring</h2>
        <p style={styles.paragraph}>
          TigerBet247 conducts ongoing transaction monitoring to detect suspicious behavior.
        </p>
        <p style={styles.paragraph}>
          The Company reserves the right to report suspicious activity to relevant authorities.
        </p>

        <h2 style={styles.sectionHeading}>6. Data Protection</h2>
        <p style={styles.paragraph}>
          All verification data is securely stored and processed in accordance with applicable 
          data protection regulations. Documents are used solely for compliance purposes.
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
};

export default KYCPolicy;