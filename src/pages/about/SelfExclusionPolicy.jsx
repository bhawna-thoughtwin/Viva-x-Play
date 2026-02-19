import PageHeader from "./Header/Header";

const SelfExclusionPolicy = () => {
  return (
    <div style={styles.page}>
      {/* Header bar */}
      <PageHeader title="Self-Exclusion Policy" />

      {/* Content */}
      <div style={styles.content}>
        <h2 style={styles.sectionHeading}>1. Our Commitment</h2>
        <p style={styles.paragraph}>
          TigerBet247 is committed to supporting players who wish to control or stop their 
          gambling activities.
        </p>
        <p style={styles.paragraph}>
          Self-exclusion is a responsible gaming tool designed to prevent access to the platform 
          for a defined period.
        </p>

        <h2 style={styles.sectionHeading}>2. Available Options</h2>
        <p style={styles.paragraph}>
          Players may choose:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>24-hour cooling-off period</li>
          <li style={styles.listItem}>7-day exclusion</li>
          <li style={styles.listItem}>30-day exclusion</li>
          <li style={styles.listItem}>6-month exclusion</li>
          <li style={styles.listItem}>Permanent exclusion</li>
        </ul>
        <p style={styles.paragraph}>
          <strong>Permanent exclusion is final and cannot be reversed.</strong>
        </p>

        <h2 style={styles.sectionHeading}>3. How to Self-Exclude</h2>
        <p style={styles.paragraph}>
          Players can:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>Activate self-exclusion through Account settings</li>
          <li style={styles.listItem}>Contact Customer Support to request exclusion</li>
        </ul>
        <p style={styles.paragraph}>
          Requests are processed immediately.
        </p>

        <h2 style={styles.sectionHeading}>4. During Self-Exclusion</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>Account access is blocked.</li>
          <li style={styles.listItem}>Deposits and wagers are disabled.</li>
          <li style={styles.listItem}>Pending bets settle normally.</li>
          <li style={styles.listItem}>Promotional communications are stopped.</li>
          <li style={styles.listItem}>Bonuses are forfeited.</li>
        </ul>

        <h2 style={styles.sectionHeading}>5. Reactivation</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            Temporary exclusions expire automatically after the selected period.
          </li>
          <li style={styles.listItem}>Permanent exclusions cannot be reversed.</li>
          <li style={styles.listItem}>
            Players may be required to complete a responsible gaming assessment before 
            reactivation (where applicable).
          </li>
        </ul>

        <h2 style={styles.sectionHeading}>6. Breach of Self-Exclusion</h2>
        <p style={styles.paragraph}>
          If a player attempts to create a new account during exclusion:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>The account will be closed.</li>
          <li style={styles.listItem}>Funds may be forfeited.</li>
          <li style={styles.listItem}>The exclusion period may be extended.</li>
        </ul>

        <h2 style={styles.sectionHeading}>7. Additional Support</h2>
        <p style={styles.paragraph}>
          Players are encouraged to seek help from professional support organizations if 
          gambling becomes problematic.
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

export default SelfExclusionPolicy;