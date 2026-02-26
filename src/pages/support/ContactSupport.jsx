import { useState } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../about/Header/Header';
import contactUsImg from '../../assets/images/contactus.png';
import sentMailIcon from '../../assets/icons/sent-mail 1.svg';
import toast from 'react-hot-toast';

const SuccessModal = ({ onClose }) => createPortal(
  <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-4">
    <div
      className="bg-white flex flex-col items-center text-center w-full"
      style={{
        maxWidth: '525px',
        minHeight: '397px',
        borderRadius: '24px',
        padding: '42px',
        gap: '10px',
        display: 'flex',
      }}
    >
      {/* Icon */}
      <div className="mb-2">
        <img src={sentMailIcon} alt="Sent Mail" width={93} height={93} />
      </div>

      {/* Title */}
      <h2 className="text-[22px] font-bold text-[#0D0C22] mt-2">We've Got Your Message!</h2>

      {/* Description */}
      <p className="text-[14px] text-[#6b7280] leading-relaxed max-w-[360px]">
        Thank you for contacting VIVAxPLAY. Our support team has received your request and will get back to you shortly. Please check your email for our response.
      </p>

      {/* Okay button */}
      <button
        onClick={onClose}
        className="mt-4 w-[140px] h-[44px] rounded-[8px] border-none text-[14px] font-semibold text-white cursor-pointer"
        style={{ background: 'linear-gradient(90deg, #117F99 0%, #1CD4FF 100%)' }}
      >
        Okay
      </button>
    </div>
  </div>,
  document.body
);

const ContactSupport = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ firstName: '', lastName: '', username: '', email: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.firstName || !form.email || !form.message) {
      toast.error('Please fill in all required fields.');
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setForm({ firstName: '', lastName: '', username: '', email: '', message: '' });
      setSubmitting(false);
      setShowModal(true);
    }, 1000);
  };

  return (
    <>
      {showModal && <SuccessModal onClose={() => setShowModal(false)} />}
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-[13px] text-[#6b7280] mb-4 mt-4">
        <button
          onClick={() => navigate('/')}
          className="bg-transparent border-none cursor-pointer p-0 hover:text-[#1CD4FF] transition-colors font-medium"
        >
          Home
        </button>
        <span className="text-[#ccc]">›</span>
        <button
          onClick={() => navigate(-1)}
          className="bg-transparent border-none cursor-pointer p-0 hover:text-[#1CD4FF] transition-colors font-medium"
        >
          Support
        </button>
        <span className="text-[#ccc]">›</span>
        <span className="text-[#0D0C22] font-semibold">Contact Support</span>
      </nav>

      <PageHeader title="Contact Support" />

      {/* Main content */}
      <div className="flex flex-col md:flex-row gap-6">

        {/* Left — image + info */}
        <div
          className="flex flex-col shrink-0 rounded-[12px] overflow-hidden shadow-[0_4px_14px_rgba(0,0,0,0.06)] bg-white w-full md:w-[622px]"
          style={{ minHeight: '738px' }}
        >
          {/* Image section */}
          <div className="relative" style={{ minHeight: '440px' }}>
            <img
              src={contactUsImg}
              alt="Contact Us"
              style={{
                position: 'absolute',
                width: '353.38px',
                height: '346px',
                top: '47.12px',
                left: '120.23px',
                opacity: 1,
                transform: 'rotate(0deg)',
              }}
            />
          </div>

          {/* Text content below image */}
          <div className="p-6 md:p-8">
            <p style={{ fontWeight: 510, fontSize: '18px', lineHeight: '26px', letterSpacing: '0', color: '#4b5563', marginBottom: '12px' }}>
              Our support team at <strong className="text-[#0D0C22]">VIVA X PLAY</strong> is available
              24/7 to assist you with any questions or issues you may have. You can reach us anytime at{' '}
              <a href="mailto:support@vivaxplay.com" className="text-[#1CD4FF] hover:underline">
                support@vivaxplay.com
              </a>.
            </p>
            <p style={{ fontWeight: 510, fontSize: '18px', lineHeight: '26px', letterSpacing: '0', color: '#4b5563', marginBottom: '12px' }}>
              Alternatively, you can contact us through our online form by providing your name,
              email address, and a brief description of your inquiry. One of our team members
              will get back to you promptly.
            </p>
            <p style={{ fontWeight: 510, fontSize: '18px', lineHeight: '26px', letterSpacing: '0', color: '#4b5563' }}>
              For quick answers to common questions, please visit our{' '}
              <button
                onClick={() => navigate('/support/faq')}
                className="text-[#1CD4FF] hover:underline bg-transparent border-none cursor-pointer p-0 text-[14px]"
              >
                Frequently Asked Questions (FAQ)
              </button>{' '}
              page.
            </p>
          </div>
        </div>

        {/* Right — form */}
        <div className="flex-1 bg-white rounded-xl p-6 md:p-8 shadow-[0_4px_14px_rgba(0,0,0,0.06)]">
          <h2 className="text-[22px] font-bold text-[#0D0C22] mb-1">Get in Touch</h2>
          <p className="text-[13px] text-[#6b7280] mb-6">
            Fill out the form below and our support team will get back to you as soon as possible.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            {/* First & Last Name row */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex flex-col gap-[6px] flex-1">
                <label className="text-[13px] font-medium text-[#555555]">
                  First Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder="Enter your first name"
                  className="w-full px-[14px] py-3 rounded-[8px] border border-[#e0e0e0] text-[14px] text-[#111] outline-none bg-[#fafafa] focus:border-[#1CD4FF] transition-colors"
                />
              </div>
              <div className="flex flex-col gap-[6px] flex-1">
                <label className="text-[13px] font-medium text-[#555555]">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  placeholder="Enter your last name"
                  className="w-full px-[14px] py-3 rounded-[8px] border border-[#e0e0e0] text-[14px] text-[#111] outline-none bg-[#fafafa] focus:border-[#1CD4FF] transition-colors"
                />
              </div>
            </div>

            {/* Username */}
            <div className="flex flex-col gap-[6px]">
              <label className="text-[13px] font-medium text-[#555555]">Username</label>
              <input
                type="text"
                name="username"
                value={form.username}
                onChange={handleChange}
                placeholder="Enter username"
                className="w-full px-[14px] py-3 rounded-[8px] border border-[#e0e0e0] text-[14px] text-[#111] outline-none bg-[#fafafa] focus:border-[#1CD4FF] transition-colors"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-[6px]">
              <label className="text-[13px] font-medium text-[#555555]">
                Email <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter Email"
                className="w-full px-[14px] py-3 rounded-[8px] border border-[#e0e0e0] text-[14px] text-[#111] outline-none bg-[#fafafa] focus:border-[#1CD4FF] transition-colors"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-[6px]">
              <label className="text-[13px] font-medium text-[#555555]">
                Textarea Query <span className="text-red-400">*</span>
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Describe your issue or question..."
                rows={5}
                className="w-full px-[14px] py-3 rounded-[8px] border border-[#e0e0e0] text-[14px] text-[#111] outline-none bg-[#fafafa] resize-none focus:border-[#1CD4FF] transition-colors"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={submitting}
              className="w-full h-[44px] rounded-[8px] border-none text-[14px] font-semibold text-white cursor-pointer transition-opacity disabled:opacity-60"
              style={{ background: 'linear-gradient(90deg, #117F99 0%, #1CD4FF 100%)' }}
            >
              {submitting ? 'Sending...' : 'Submit'}
            </button>

          </form>
        </div>

      </div>
    </>
  );
};

export default ContactSupport;
