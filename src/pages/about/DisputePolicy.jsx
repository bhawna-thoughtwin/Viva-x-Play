import PageHeader from "./Header/Header";

const DisputePolicy = () => {
  return (
    <div style={styles.page}>
      <PageHeader title="Dispute Policy" />

      <div style={styles.content}>
        <h2 style={styles.sectionHeading}>1. Commitment to Fair Resolution</h2>
        <p style={styles.paragraph}>
          TigerBet247 is committed to resolving all player complaints and disputes in a fair,
          transparent, and timely manner.
        </p>

        <h2 style={styles.sectionHeading}>2. How to Submit a Complaint</h2>
        <p style={styles.paragraph}>
          Players must first contact Customer Support via their registered email address.
          The complaint must include:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>The player's full name</li>
          <li style={styles.listItem}>Username</li>
          <li style={styles.listItem}>Registered email address</li>
          <li style={styles.listItem}>A detailed description of the issue</li>
          <li style={styles.listItem}>Any supporting evidence (if applicable)</li>
        </ul>
        <p style={styles.paragraph}>
          Complaints should be submitted within 3 days of the issue occurring.
        </p>

        <h2 style={styles.sectionHeading}>3. Internal Review Process</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>Complaints are acknowledged within 24 hours.</li>
          <li style={styles.listItem}>An investigation is conducted by the relevant department.</li>
          <li style={styles.listItem}>A formal response is provided within 7 business days.</li>
          <li style={styles.listItem}>If additional time is required, the player will be notified.</li>
        </ul>

        <h2 style={styles.sectionHeading}>4. Escalation</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            If the issue is not resolved satisfactorily, the matter may be escalated to senior management.
          </li>
          <li style={styles.listItem}>A final internal decision will be issued after review.</li>
          <li style={styles.listItem}>
            If the dispute remains unresolved, the player may contact the Curaçao regulatory
            authority under which TigerBet247 is licensed.
          </li>
        </ul>

        <h2 style={styles.sectionHeading}>5. Fraudulent or Abusive Complaints</h2>
        <p style={styles.paragraph}>
          TigerBet247 reserves the right to reject complaints that are:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>Fraudulent or submitted in bad faith</li>
          <li style={styles.listItem}>Abusive or offensive in nature</li>
          <li style={styles.listItem}>Repetitive without new supporting evidence</li>
        </ul>

        <h2 style={styles.sectionHeading}>6. Governing Law</h2>
        <p style={styles.paragraph}>
          All disputes are governed by the laws of Curaçao.
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

export default DisputePolicy;
