import PageHeader from "./Header/Header";

const CookiePolicy = () => {
  return (
    <div style={styles.page}>
      <PageHeader title="Cookie Policy" />

      <div style={styles.content}>
        <h2 style={styles.sectionHeading}>1. Introduction</h2>
        <p style={styles.paragraph}>
          This Cookie Policy explains how TigerBet247, operated by Forward Solutions B.V., uses
          cookies and similar technologies when you access our website. By continuing to use our
          website, you agree to the use of cookies as described in this policy.
        </p>

        <h2 style={styles.sectionHeading}>2. What Are Cookies?</h2>
        <p style={styles.paragraph}>
          Cookies are small text files placed on your device when you visit a website. They help
          improve functionality, security, performance, and user experience. Cookies may be:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}><strong>Session cookies</strong> — deleted when you close your browser</li>
          <li style={styles.listItem}><strong>Persistent cookies</strong> — stored for a defined period</li>
          <li style={styles.listItem}><strong>First-party cookies</strong> — set directly by TigerBet247</li>
          <li style={styles.listItem}><strong>Third-party cookies</strong> — set by our service providers</li>
        </ul>

        <h2 style={styles.sectionHeading}>3. Types of Cookies We Use</h2>

        <h3 style={styles.subHeading}>Essential Cookies</h3>
        <p style={styles.paragraph}>Required for core functionality, including:</p>
        <ul style={styles.list}>
          <li style={styles.listItem}>Account login and authentication</li>
          <li style={styles.listItem}>Secure transactions and fraud prevention</li>
          <li style={styles.listItem}>Session management</li>
        </ul>
        <p style={styles.paragraph}>These cannot be disabled.</p>

        <h3 style={styles.subHeading}>Performance &amp; Analytics Cookies</h3>
        <p style={styles.paragraph}>Used to:</p>
        <ul style={styles.list}>
          <li style={styles.listItem}>Analyze website usage and traffic patterns</li>
          <li style={styles.listItem}>Improve performance and page load speeds</li>
          <li style={styles.listItem}>Detect and diagnose technical errors</li>
        </ul>
        <p style={styles.paragraph}>Data collected is aggregated and anonymous where possible.</p>

        <h3 style={styles.subHeading}>Functional Cookies</h3>
        <p style={styles.paragraph}>Enable features such as:</p>
        <ul style={styles.list}>
          <li style={styles.listItem}>Language and region preferences</li>
          <li style={styles.listItem}>Saved account settings</li>
          <li style={styles.listItem}>A more personalized browsing experience</li>
        </ul>

        <h3 style={styles.subHeading}>Marketing Cookies</h3>
        <p style={styles.paragraph}>Used to:</p>
        <ul style={styles.list}>
          <li style={styles.listItem}>Measure campaign performance and ad effectiveness</li>
          <li style={styles.listItem}>Prevent promotions from being shown to self-excluded users</li>
          <li style={styles.listItem}>Ensure responsible and compliant advertising practices</li>
        </ul>

        <h2 style={styles.sectionHeading}>4. Managing Cookies</h2>
        <p style={styles.paragraph}>
          You can manage or disable cookies through your browser settings. Options include:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>Blocking all cookies via browser privacy settings</li>
          <li style={styles.listItem}>Deleting cookies already stored on your device</li>
          <li style={styles.listItem}>Accepting or rejecting specific cookie categories</li>
        </ul>
        <p style={styles.paragraph}>
          Please note that disabling certain cookies may impact website functionality.
        </p>

        <h2 style={styles.sectionHeading}>5. Data Protection</h2>
        <p style={styles.paragraph}>
          All cookie-related data is processed in accordance with Curaçao data protection
          requirements and applicable international privacy regulations, including GDPR where
          relevant.
        </p>

        <h2 style={styles.sectionHeading}>6. Updates</h2>
        <p style={styles.paragraph}>
          This Cookie Policy may be updated periodically. Continued use of the website
          constitutes acceptance of the revised policy.
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
  subHeading: {
    fontFamily: baseFont,
    fontWeight: 400,
    fontStyle: 'normal',
    fontSize: '16px',
    lineHeight: '100%',
    letterSpacing: '0',
    color: '#374151',
    margin: '16px 0 6px',
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

export default CookiePolicy;
