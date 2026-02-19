import PageHeader from "./Header/Header";

const PrivacyPolicy = () => {
  return (
    <div style={styles.page}>
      {/* Header bar */}
       <PageHeader title="Privacy Policy" />

      {/* Content */}
      <div style={styles.content}>
        <h1 style={styles.pageTitle}>Privacy Policy</h1>
        <p style={styles.paragraph}>
          At TigerBet247, operated by Forward Solutions B.V., we are committed to protecting
          your privacy and ensuring the security of your personal information. This Privacy
          Policy explains how we collect, use, disclose, and safeguard the information you
          provide when using our website and services.
        </p>
        <p style={styles.paragraph}>
          By accessing or using TigerBet247, you agree to the practices described in this
          Privacy Policy.
        </p>

        <h2 style={styles.sectionHeading}>Information We Collect</h2>

        <ol style={styles.numberedList}>

          {/* 1 */}
          <li style={styles.numberedItem}>
            <h3 style={styles.subHeading}>Personal Information</h3>
            <p style={styles.paragraph}>
              We may request information that can be used to identify or contact you. This may
              include, but is not limited to:
            </p>
            <ul style={styles.list}>
              <li style={styles.listItem}>Email address</li>
              <li style={styles.listItem}>First and last name</li>
              <li style={styles.listItem}>Phone number</li>
              <li style={styles.listItem}>Residential address, city, province/state, ZIP or postal code</li>
              <li style={styles.listItem}>Date of birth</li>
              <li style={styles.listItem}>Payment information and transaction details required to process deposits and withdrawals</li>
              <li style={styles.listItem}>Identification documents required for verification</li>
              <li style={styles.listItem}>Account security information such as login credentials</li>
            </ul>
            <p style={styles.paragraph}>
              If you make payments through wire transfer or other high-risk methods, we may request
              additional documentation. These may include:
            </p>
            <ul style={styles.list}>
              <li style={styles.listItem}>Passport or national ID</li>
              <li style={styles.listItem}>Utility bill</li>
              <li style={styles.listItem}>Bank card or bank statement</li>
              <li style={styles.listItem}>Documentation linking you to a residential address</li>
            </ul>
          </li>

          {/* 2 */}
          <li style={styles.numberedItem}>
            <h3 style={styles.subHeading}>Usage Information</h3>
            <p style={styles.paragraph}>
              We may collect information about your interaction with the website, including:
            </p>
            <ul style={styles.list}>
              <li style={styles.listItem}>IP address</li>
              <li style={styles.listItem}>Browser type and version</li>
              <li style={styles.listItem}>Device information</li>
              <li style={styles.listItem}>Referring and exit pages</li>
              <li style={styles.listItem}>Operating system</li>
              <li style={styles.listItem}>Website navigation behavior and activity</li>
            </ul>
          </li>

          {/* 3 */}
          <li style={styles.numberedItem}>
            <h3 style={styles.subHeading}>Cookies and Tracking Technologies</h3>
            <p style={styles.paragraph}>
              We use cookies and similar tracking technologies to enhance your browsing experience,
              remember your preferences, and gather analytical data. For more details, please refer
              to our Cookie Policy.
            </p>
          </li>

        </ol>

        <h2 style={styles.sectionHeading}>How We Use Your Information</h2>
        <p style={styles.paragraph}>
          We may use your information for the following purposes:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>To operate, maintain, and improve our services</li>
          <li style={styles.listItem}>To create and manage your account</li>
          <li style={styles.listItem}>
            To process deposits, withdrawals, and other financial transactions
          </li>
          <li style={styles.listItem}>To provide customer support and respond to inquiries</li>
          <li style={styles.listItem}>
            To comply with legal, regulatory, and anti-money laundering obligations
          </li>
          <li style={styles.listItem}>
            To personalize your experience and deliver relevant content
          </li>
          <li style={styles.listItem}>
            To communicate with you regarding your account, updates, security alerts, and
            promotional information
          </li>
          <li style={styles.listItem}>
            To detect, prevent, and investigate fraud, abuse, or illegal activities
          </li>
          <li style={styles.listItem}>
            To produce internal analytics or aggregated data for business and compliance purposes
          </li>
        </ul>

        <h2 style={styles.sectionHeading}>Information Sharing and Disclosure</h2>
        <p style={styles.paragraph}>
          We may share your personal information in the following circumstances:
        </p>

        <h3 style={styles.subHeading}>1. Service Providers</h3>
        <p style={styles.paragraph}>
          We may share information with trusted third parties who assist in operating the
          website, payment processing, verification services, analytics, or customer support.
          These providers are required to maintain confidentiality and are prohibited from using
          your information for any other purpose.
        </p>

        <h3 style={styles.subHeading}>2. Legal Requirements</h3>
        <p style={styles.paragraph}>
          We may disclose your information if required by law, regulation, court order, law
          enforcement request, or licensing authority requirement, including Curaçao regulatory
          compliance obligations.
        </p>

        <h3 style={styles.subHeading}>3. Protection of Rights</h3>
        <p style={styles.paragraph}>
          We may disclose your information when necessary to protect and defend the rights,
          property, or safety of TigerBet247, our users, or the public.
        </p>

        <p style={styles.paragraph}>
          <strong>We do not sell, trade, or rent your personal information to third parties.</strong>
        </p>

        <h2 style={styles.sectionHeading}>Data Security</h2>
        <p style={styles.paragraph}>
          We use administrative, technical, and physical safeguards designed to protect your
          information against loss, misuse, and unauthorized access. These measures include
          encryption, secure servers, access controls, monitoring systems, and secure data
          storage practices.
        </p>
        <p style={styles.paragraph}>
          However, no method of online transmission or electronic storage is completely secure.
          Therefore, we cannot guarantee absolute security.
        </p>

        <h2 style={styles.sectionHeading}>Third-Party Links</h2>
        <p style={styles.paragraph}>
          TigerBet247 may contain links to external websites. We are not responsible for the
          content, security, privacy practices, or policies of third-party sites. We recommend
          reviewing their privacy policies before providing any personal information.
        </p>

        <h2 style={styles.sectionHeading}>Children&apos;s Privacy</h2>
        <p style={styles.paragraph}>
          TigerBet247 is strictly intended for individuals aged 18 and above (or the legal
          gambling age in your jurisdiction). We do not knowingly collect personal information
          from anyone under 18. If we become aware that a minor has provided personal data, we
          will delete such information and suspend the associated account.
        </p>

        <h2 style={styles.sectionHeading}>GDPR Compliance</h2>
        <p style={styles.paragraph}>
          For users located within the European Economic Area (EEA), you have certain rights
          under the General Data Protection Regulation (GDPR), including:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>The right to access your personal data</li>
          <li style={styles.listItem}>The right to correct inaccurate information</li>
          <li style={styles.listItem}>The right to request deletion of your data</li>
          <li style={styles.listItem}>The right to restrict or object to processing</li>
          <li style={styles.listItem}>The right to data portability</li>
        </ul>
        <p style={styles.paragraph}>
          To exercise any of these rights, please contact us using the details below. We will
          respond within 30 days as required by law.
        </p>

        <h2 style={styles.sectionHeading}>Updates to This Privacy Policy</h2>
        <p style={styles.paragraph}>
          We may update or revise this Privacy Policy periodically. Any changes will be posted
          on this page along with an updated &quot;Last Updated&quot; date. Continued use of
          TigerBet247 after changes are made signifies your acceptance of the revised Policy.
        </p>

        <h2 style={styles.sectionHeading}>Contact Us</h2>
        <p style={styles.paragraph}>
          If you have any questions, requests, or concerns about this Privacy Policy or how your
          data is handled, please contact us at: <strong>support@tigerbet247.com</strong>
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
  pageTitle: {
    fontFamily: baseFont,
    fontWeight: 700,
    fontSize: '32px',
    lineHeight: '120%',
    color: '#111827',
    margin: '0 0 16px',
    letterSpacing: '-0.3px',
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
  numberedList: {
    fontFamily: baseFont,
    fontSize: '14px',
    color: '#111827',
    margin: '8px 0 16px',
    paddingLeft: '20px',
    listStyleType: 'decimal',
    maxWidth: '900px',
  },
  numberedItem: {
    display: 'list-item',
    listStyleType: 'decimal',
    fontWeight: 600,
    fontSize: '16px',
    marginBottom: '12px',
  },
  list: {
    fontFamily: baseFont,
    fontSize: '14px',
    lineHeight: '150%',
    color: '#4b5563',
    margin: '8px 0 8px',
    paddingLeft: '24px',
    maxWidth: '900px',
    listStyleType: 'disc',
  },
  listItem: {
    margin: '4px 0',
    display: 'list-item',
    listStyleType: 'disc',
  },
};

export default PrivacyPolicy;

