import { useState } from 'react';
import { createPortal } from 'react-dom';
import toast from 'react-hot-toast';
import PageHeader from './about/Header/Header';
import copyIcon from '../assets/icons/copy.svg';
import checkCircleIcon from '../assets/icons/check-circle.svg';
import {sentEmailIcon} from  "../assets/icons";

const REFERRAL_LINK = 'https://vivaxplay.com/?ref=UserName@123';

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

const ReferAFriend = () => {
  const [copied, setCopied] = useState(false);
  const [friendEmail, setFriendEmail] = useState('');
  const [friendName, setFriendName] = useState('');
  const [sending, setSending] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(REFERRAL_LINK);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleInvite = (e) => {
    e.preventDefault();
    if (!friendEmail) { toast.error('Please enter your friend\'s email.'); return; }
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setFriendEmail('');
      setFriendName('');
      setShowModal(true);
    }, 1000);
  };

  return (
    <>
      {showModal && <SuccessModal onClose={() => setShowModal(false)} />}

      <PageHeader title="Refer a Friend" breadcrumb />

      {/* Two panels */}
      <div className="flex flex-col md:flex-row gap-5 mb-6">

        {/* Left — Refer & Earn */}
        <div
          className="flex flex-col bg-white shadow-[0_4px_14px_rgba(0,0,0,0.06)] p-6 md:p-8 flex-1"
          style={{ borderRadius: '12px', minHeight: '467px' }}
        >
          <h2 className="text-[18px] font-bold text-[#0D0C22] mb-1">Refer &amp; Earn with VIVAxPLAY</h2>
          <p className="text-[13px] text-[#6b7280] mb-5 leading-relaxed">
            Share your personal referral link and earn rewards every time your friends join and play.
          </p>

          <label className="text-[13px] font-medium text-[#555] mb-1">Your Referral Link</label>
          <div className="flex items-center gap-2 mb-5">
            <input
              type="text"
              readOnly
              value={REFERRAL_LINK}
              className="flex-1 px-[14px] py-3 rounded-[8px] border border-[#e0e0e0] text-[13px] text-[#111] bg-[#fafafa] outline-none select-all"
            />
            <button
              onClick={handleCopy}
              className="shrink-0 h-[46px] w-[46px] flex items-center justify-center rounded-[8px] border-none cursor-pointer transition-all"
              style={{ background: copied ? 'linear-gradient(90deg, #22c55e 0%, #16a34a 100%)' : 'linear-gradient(90deg, #117F99 0%, #1CD4FF 100%)' }}
              title={copied ? 'Copied!' : 'Copy'}
            >
              <img src={copyIcon} alt="Copy" className="w-[20px] h-[20px]" />
            </button>

          </div>

          <p style={{ fontWeight: 400, fontSize: '12px', lineHeight: '24px', letterSpacing: '0%', color: '#6b7280' }}>
            Copy your link and share it anywhere : WhatsApp, Telegram, Instagram, or email.
          </p>

        </div>

        {/* Right — Invite a Friend Directly */}
        <div
          className="flex flex-col bg-white shadow-[0_4px_14px_rgba(0,0,0,0.06)] p-6 md:p-8 flex-1"
          style={{ borderRadius: '12px', minHeight: '467px' }}
        >
          <h2 className="text-[18px] font-bold text-[#0D0C22] mb-1">Invite a Friend Directly</h2>
          <p className="text-[13px] text-[#6b7280] mb-5 leading-relaxed">
            Enter your friend's details below and we'll send them a personal invitation to join VIVAxPLAY on your behalf.
          </p>

          <form onSubmit={handleInvite} className="flex flex-col gap-4">
            <div className="flex flex-col gap-[6px]">
              <label className="text-[13px] font-medium text-[#555]">Friend's Name <span className="text-[#ccc] font-normal">(optional)</span></label>
              <input
                type="text"
                value={friendName}
                onChange={(e) => setFriendName(e.target.value)}
                placeholder="Enter your friend's name"
                className="w-full px-[14px] py-3 rounded-[8px] border border-[#e0e0e0] text-[14px] text-[#111] outline-none bg-[#fafafa] focus:border-[#1CD4FF] transition-colors"
              />
            </div>
           
            <div className="flex flex-col gap-[6px]">
              <label className="text-[13px] font-medium text-[#555]">Friend's Email Address</label>
              <input
                type="email"
                placeholder="Re-enter your friend's email"
                className="w-full px-[14px] py-3 rounded-[8px] border border-[#e0e0e0] text-[14px] text-[#111] outline-none bg-[#fafafa] focus:border-[#1CD4FF] transition-colors"
              />
            </div>
             <div className="flex flex-col gap-[6px]">
              <label className="text-[13px] font-medium text-[#555]">Your Referral Link <span className="text-red-400">*</span></label>
              <input
                type="text"
                readOnly
                value={REFERRAL_LINK}
                className="flex-1 px-[14px] py-3 rounded-[8px] border border-[#e0e0e0] text-[13px] text-[#111] bg-[#fafafa] outline-none select-all"
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="w-full h-[46px] rounded-[8px] border-none text-[14px] font-semibold text-white cursor-pointer disabled:opacity-60 mt-2"
              style={{ background: 'linear-gradient(90deg, #117F99 0%, #1CD4FF 100%)' }}
            >
              {sending ? 'Okay' : 'Okay'}
            </button>
          </form>


        </div>

      </div>

      {/* Perks & Terms */}
      <div className="bg-white rounded-[12px] p-6 md:p-8 shadow-[0_4px_14px_rgba(0,0,0,0.06)] mb-6 flex flex-col gap-[32px]">

        {/* Title Section */}
        <div className="flex flex-col gap-[16px]">
          <h1 className="text-[32px] leading-[38px] font-[590] text-[#333333]">
            VIVAxPLAY Refer-a-Friend Program
          </h1>

          <h2 className="text-[24px] leading-[29px] font-[590] text-[#333333]">
            Share the Fun. Earn Rewards.
          </h2>

          <p className="text-[16px] leading-[24px] font-[400] text-[#333333] max-w-[1110px]">
            At VIVAxPLAY, we believe great experiences are meant to be shared. That’s why we created our Refer-a-Friend Program - a way for you and your friends to unlock exclusive rewards just by inviting others to join the VIVAxPLAY community.
          </p>
        </div>


        {/* How It Works */}
        <div className="flex flex-col gap-[24px]">
          <h2 className="text-[32px] leading-[38px] font-[590] text-[#333333]">
            How It Works
          </h2>

          <div className="flex flex-col gap-[32px]">

            <div className="flex flex-col gap-[8px]">
              <h3 className="text-[18px] leading-[21px] font-[590] text-[#333333]">
                Invite Your Friends
              </h3>
              <p className="text-[16px] leading-[24px] font-[400] text-[#333333]">
                Share your unique referral link with friends, family, or anyone who loves games and rewards.
              </p>
            </div>

            <div className="flex flex-col gap-[8px]">
              <h3 className="text-[18px] leading-[21px] font-[590] text-[#333333]">
                They Join VIVAxPLAY
              </h3>
              <p className="text-[16px] leading-[24px] font-[400] text-[#333333]">
                When someone signs up using your link and meets the qualifying criteria (e.g., completes registration, makes their first play, or deposits for the first time), both of you benefit!
              </p>
            </div>

            <div className="flex flex-col gap-[8px]">
              <h3 className="text-[18px] leading-[21px] font-[590] text-[#333333]">
                You Both Get Rewarded
              </h3>
              <p className="text-[16px] leading-[24px] font-[400] text-[#333333]">
                Once their account is verified and eligible, rewards are automatically credited to both your accounts.
              </p>
            </div>

          </div>
        </div>


        {/* Referral Rewards */}
        <div className="flex flex-col gap-[24px]">
          <h2 className="text-[32px] leading-[38px] font-[590] text-[#333333]">
            Referral Rewards
          </h2>

          <div className="flex flex-col gap-[32px]">

            <div className="flex flex-col gap-[8px]">
              <h3 className="text-[24px] leading-[29px] font-[590] text-[#333333]">
                For You
              </h3>
              <p className="text-[16px] leading-[24px] text-[#333333]">
                When your friend signs up with VIVAxPLAY using your referral link and becomes an active member: You receive bonus coins, free spins, cashback, or VIP points. The more friends you refer, the more you can earn!
              </p>
            </div>

            <div className="flex flex-col gap-[8px]">
              <h3 className="text-[24px] leading-[29px] font-[590] text-[#333333]">
                For Your Friend
              </h3>
              <p className="text-[16px] leading-[24px] text-[#333333]">
                Your invited friend also gets a warm welcome! They receive a sign-up bonus, match bonus, or free credit so they can start playing with an extra edge.
              </p>
            </div>

          </div>
        </div>


        {/* The Perks */}
        <div className="flex flex-col gap-[24px]">

          <h2 className="text-[32px] leading-[38px] font-[590] text-[#333333]">
            The Perks of Sharing
          </h2>

          <div className="flex flex-col gap-[16px]">

            {[
              "Unlimited Referrals — There’s no limit to how many friends you can invite.",
              "Stackable Rewards — Rewards stack with each successful referral.",
              "Easy Tracking — See all your referrals and rewards in your VIVAxPLAY account dashboard.",
              "Instant Benefits — Rewards are credited immediately once eligibility is confirmed."
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-[6px]">
                <img src={checkCircleIcon} alt="" className="w-[24px] h-[24px] shrink-0" />
                <span className="text-[16px] leading-[19px] font-[590] text-[#333333]">
                  {item}
                </span>
              </div>
            ))}

          </div>

        </div>


        {/* Terms */}
        <div className="flex flex-col gap-[16px]">

          <h3 className="text-[24px] leading-[29px] font-[590] text-[#333333]">
            Terms & Conditions (Short Version)
          </h3>

          <p className="text-[16px] leading-[24px] text-[#333333]">
            Referrals must sign up through your unique link. Rewards are credited after the referred user completes the qualifying action (e.g., first deposit or play). Abuse or fraudulent referral activity will void rewards. Rewards may vary by region and promotion period.
          </p>

        </div>


        {/* Help */}
        <div className="flex flex-col gap-[16px]">

          <h3 className="text-[24px] leading-[29px] font-[590] text-[#333333]">
            Need Help?
          </h3>

          <p className="text-[16px] leading-[24px] text-[#333333]">
            If you have questions about your referral rewards or how to share your link, our support team is here to help. Visit the Help Center or contact us at support@vivaxplay.com
          </p>

        </div>

      </div>

    </>
  );
};

export default ReferAFriend;
