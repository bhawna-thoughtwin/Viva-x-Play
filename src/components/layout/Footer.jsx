import { useState } from 'react';
import loginLogo   from '../../assets/images/loginlogo.png';
import footerBg    from '../../assets/images/footer.png';
import facebookImg from '../../assets/images/facebook 1.png';
import instagramImg from '../../assets/images/instagram 1.png';
import telegramImg  from '../../assets/images/telegram 1.png';
import twitterImg   from '../../assets/images/twitter 1.png';

/* ── Mobile accordion sections ── */
const footerSections = [
  { title: 'SPORTS',      links: ['Football', 'Tennis', 'Basketball', 'Baseball', 'Boxing'] },
  { title: 'LIVE SPORTS', links: ['Football Live', 'Tennis Live', 'Basketball Live', 'Baseball Live'] },
  { title: 'CASINO',      links: ['Live Casino', 'Slots', 'Roulette', 'Blackjack', 'Roulette'] },
  { title: 'LIVE CASINO', links: ['Live Roulette', 'Live Blackjack', 'Live Baccarat'] },
  { title: 'SUPPORT',     links: ['Provably Fair', 'Partner Program', 'Responsible Gambling', 'Help Center', 'Live Support'] },
  { title: 'ABOUT US',    links: ['Policies', 'Licenses', 'Terms and Conditions'] },
];

/* ── Desktop columns ── */
const desktopSections = [
  { title: 'SPORTS',   links: ['Football', 'Tennis', 'Basketball', 'Baseball', 'Boxing'] },
  { title: 'CASINO',   links: ['Live Casino', 'Slots', 'Roulette', 'Blackjack', 'Roulette'] },
  { title: 'SUPPORT',  links: ['Provably Fair', 'Partner Program', 'Responsible Gambling', 'Help Center', 'Live Support'] },
  { title: 'ABOUT US', links: ['Policies', 'Licenses', 'Terms and Conditions'] },
];

/* ── Social Icons ── */
const socialIcons = [
  { src: facebookImg,  alt: 'Facebook'  },
  { src: instagramImg, alt: 'Instagram' },
  { src: twitterImg,   alt: 'Twitter'   },
  { src: telegramImg,  alt: 'Telegram'  },
];

/* ── Chevrons ── */
const ChevronDown = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M6 9l6 6 6-6" stroke="#777" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const ChevronUp = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M18 15l-6-6-6 6" stroke="#777" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* ── Mobile accordion row ── */
const AccordionSection = ({ title, links }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#1e1e1e]">
      <button
        className="w-full flex items-center justify-between px-5 py-4 bg-transparent border-none cursor-pointer"
        onClick={() => setOpen(p => !p)}
      >
        <span className="text-[13px] font-bold text-white tracking-[0.5px]">{title}</span>
        {open ? <ChevronUp /> : <ChevronDown />}
      </button>
      {open && (
        <div className="flex flex-col px-5 pb-4 gap-2">
          {links.map((link) => (
            <button key={link} className="bg-transparent border-none text-left text-[12px] text-[#777] cursor-pointer p-0 leading-relaxed">
              {link}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

/* ── Desktop column ── */
const FooterColumn = ({ title, links }) => (
  <div className="flex flex-col gap-1.5">
    <h4 className="text-[13px] font-bold text-white m-0 mb-2 tracking-[0.5px]">{title}</h4>
    {links.map((link) => (
      <button key={link} className="bg-transparent border-none p-0 text-left text-[12px] text-[#777] cursor-pointer leading-relaxed hover:text-[#aaa] transition-colors">
        {link}
      </button>
    ))}
  </div>
);

/* ══════════════════════════════════════════════ */
const Footer = () => {
  return (
    <footer className="bg-[#080808] mt-[32px] box-border">

      <div className="relative rounded-xl overflow-hidden bg-[#0d0d0d] mx-3 md:mx-5 mb-3 md:mb-5">

        {/* Roulette bg — desktop only */}
        <img
          src={footerBg} alt=""
          className="absolute pointer-events-none hidden md:block"
          style={{
            top: '134px', left: '-97px',
            width: '317px', height: '316px',
            objectFit: 'contain', opacity: 0.55,
            mixBlendMode: 'luminosity',
            filter: 'brightness(0.4) sepia(0.4) hue-rotate(140deg) saturate(1.8)',
            zIndex: 0,
          }}
        />

        {/* ════ MOBILE ════ */}
        <div className="block md:hidden">

          {/* Logo */}
          <div className="flex justify-center py-6 border-b border-[#1e1e1e]">
            <img src={loginLogo} alt="VIVA X PLAY" className="w-[140px] h-auto object-contain" />
          </div>

          {/* Accordion */}
          <div>
            {footerSections.map((s) => (
              <AccordionSection key={s.title} title={s.title} links={s.links} />
            ))}
          </div>

          {/* Legal */}
          <p className="text-center text-[10px] text-[#555] leading-[1.7] m-0 px-5 pt-5 pb-3">
            VIVAXPLAY is operated by ASTERI LTD, registration number X-XXX-XXXXX, with registered
            address; Toronto, Canada. ASTERI LTD is licensed and regulated under the Gaming Act by
            the Curaçao Gaming Authority. Contact us at{' '}
            <a href="mailto:support@vivaxplay.com" className="text-[#1cd4ff] no-underline">
              support@vivaxplay.com
            </a>
          </p>

          {/* Socials */}
          <div className="flex justify-center gap-3 py-4">
            {socialIcons.map((icon) => (
              <span key={icon.alt} className="cursor-pointer">
                <img src={icon.src} alt={icon.alt} className="w-9 h-9 object-contain" />
              </span>
            ))}
          </div>

          {/* Copyright */}
          <div className="border-t border-[#2a2a3a] py-3 text-center">
            <span className="text-[10px] text-[#666] tracking-[0.3px]">
              ALL RIGHTS RESERVED | VIVAXPLAY@2026 @ Copyright
            </span>
          </div>

        </div>

        {/* ════ DESKTOP ════ */}
        <div className="hidden md:block">

          {/* Top row: logo + 4 columns */}
          <div className="relative z-[1] flex items-start pt-[48px] pl-[152px] pr-[40px] pb-[24px] gap-[130px]">
            <div className="shrink-0">
              <img src={loginLogo} alt="VIVA X PLAY" className="w-[160px] h-auto object-contain block" />
            </div>
            <div className="flex-1 flex justify-between">
              {desktopSections.map((s) => (
                <FooterColumn key={s.title} title={s.title} links={s.links} />
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-[#1e1e1e] mx-[40px]" />

          {/* Bottom: legal + socials */}
          <div className="relative z-[1] flex flex-col items-center px-[40px] py-[40px] gap-[44px]">
            <p className="text-center text-[11px] text-[#555] leading-[1.7] m-0 max-w-[700px]">
              VIVA x PLAY is operated by ASTERI LTD, registration number X-XXX-XXXXX, with registered address; Toronto,
              Canada. ASTERI LTD is licensed and regulated under the Gaming Act by the Curaçao Gaming Authority. Contact us at{' '}
              <a href="mailto:support@vivaxplay.com" className="text-[#1cd4ff] no-underline">support@vivaxplay.com</a>
            </p>
            <div className="flex gap-3">
              {socialIcons.map((icon) => (
                <span key={icon.alt} className="cursor-pointer">
                  <img src={icon.src} alt={icon.alt} className="w-9 h-9 object-contain" />
                </span>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="relative z-[1] border-t border-[#2a2a3a] px-10 py-3 text-center">
            <span className="text-[11px] text-[#666] tracking-[0.3px]">
              ALL RIGHTS RESERVED | VIVA x PLAY @ 2026 | Copyright
            </span>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
