import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import loginLogo from '../assets/images/loginlogo.png';
import loginPageImg from '../assets/images/loginpage.png';
import bottom1 from '../assets/images/bottom.png';
import bottom2 from '../assets/images/bottom2.png';
import bottom3 from '../assets/images/bottom3.png';
import bottom4 from '../assets/images/bottom4.png';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#f0f0f0] overflow-hidden">

      {/* ── Left panel — centers the card ── */}
      <div className="flex-1 min-h-screen bg-[#f0f0f0] flex items-center justify-center px-4 py-8 box-border">

        {/* ── Outer card ── */}
        <div className="w-full max-w-[541px] rounded-[16px] border border-[#e0e0e0] p-6 md:p-8 bg-white box-border flex items-center justify-center">

          {/* ── Inner content ── */}
          <div className="w-full flex flex-col items-center gap-8 md:gap-[64px] box-border">

            {/* Logo */}
            <img src={loginLogo} alt="VIVA X PLAY" className="w-[130px] md:w-[160px] h-auto object-contain flex-shrink-0" />

            {/* ── Tab + Heading + Form block ── */}
            <div className="w-full flex flex-col gap-6 md:gap-[72px] box-border">

              {/* Tab toggle */}
              <div
                className="flex w-full h-[41px] rounded-[4px] overflow-hidden gap-1 p-1 items-center flex-shrink-0 box-border"
                style={{ border: '1px solid #1CD4FF80' }}
              >
                <button
                  className="flex-1 h-full px-[10px] py-1 rounded-[2px] cursor-pointer text-[14px] font-bold text-[#1a1a1a] border-none box-border"
                  style={{ background: 'linear-gradient(180deg, #E3FC7B 0%, #C2D95A 100%)' }}
                  onClick={() => navigate('/register')}
                >
                  Register
                </button>
                <button
                  className="flex-1 h-full px-[10px] py-1 rounded-[2px] cursor-pointer text-[14px] font-medium text-[#555555] bg-transparent border-none box-border"
                  onClick={() => navigate('/login')}
                >
                  Login
                </button>
              </div>

              {/* Heading + Form + Socials */}
              <div className="w-full flex flex-col items-center gap-6 md:gap-[32px]">

                {/* Heading */}
                <h1 className="text-[22px] md:text-[32px] font-bold text-[#111111] m-0 w-full text-center uppercase leading-tight">
                  CREATE YOUR ACCOUNT
                </h1>

                {/* Form */}
                <form className="w-full flex flex-col gap-[16px]" onSubmit={e => e.preventDefault()}>

                  {/* Username field */}
                  <div className="flex flex-col gap-[6px]">
                    <label className="text-[13px] font-medium text-[#555555]">Username</label>
                    <input
                      type="text"
                      placeholder="Username"
                      className="w-full px-[14px] py-3 rounded-[8px] border border-[#e0e0e0] text-[14px] text-[#111111] outline-none box-border bg-[#fafafa]"
                    />
                  </div>

                  {/* Email field */}
                  <div className="flex flex-col gap-[6px]">
                    <label className="text-[13px] font-medium text-[#555555]">Email</label>
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full px-[14px] py-3 rounded-[8px] border border-[#e0e0e0] text-[14px] text-[#111111] outline-none box-border bg-[#fafafa]"
                    />
                  </div>

                  {/* Password field */}
                  <div className="flex flex-col gap-[6px]">
                    <label className="text-[13px] font-medium text-[#555555]">Password</label>
                    <div className="relative flex items-center">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password"
                        className="w-full pl-[14px] pr-[40px] py-3 rounded-[8px] border border-[#e0e0e0] text-[14px] text-[#111111] outline-none box-border bg-[#fafafa]"
                      />
                      <button
                        type="button"
                        className="absolute right-[14px] bg-transparent border-none cursor-pointer p-0 flex items-center justify-center leading-none"
                        onClick={() => setShowPassword(p => !p)}
                      >
                        {showPassword ? (
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
                            <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
                            <line x1="1" y1="1" x2="23" y2="23"/>
                          </svg>
                        ) : (
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                            <circle cx="12" cy="12" r="3"/>
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Remember + Forgot */}
                  <div className="flex items-center justify-between">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={remember}
                        onChange={e => setRemember(e.target.checked)}
                        className="w-4 h-4 cursor-pointer accent-[#1cd4ff]"
                      />
                      <span className="text-[13px] text-[#333333]">Remember me</span>
                    </label>
                    <button
                      type="button"
                      className="bg-transparent border-none cursor-pointer text-[13px] md:text-[14px] font-[590] text-[#333333] underline p-0 leading-[25px]"
                    >
                      Forgot Password?
                    </button>
                  </div>

                  {/* Create Account button */}
                  <button
                    type="submit"
                    className="w-full h-[44px] bg-[#1CD4FF] border border-[#1CD4FF] rounded-[4px] text-[#333333] text-[14px] font-[590] uppercase cursor-pointer flex items-center justify-center px-[10px] py-1 box-border"
                  >
                    CREATE ACCOUNT
                  </button>

                  {/* Divider */}
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-px bg-[#e0e0e0]" />
                    <span className="text-[12px] text-[#999999] whitespace-nowrap">Or continue with</span>
                    <div className="flex-1 h-px bg-[#e0e0e0]" />
                  </div>

                  {/* Social login icons */}
                  <div className="flex justify-center items-center gap-[12px] md:gap-[16px] w-full">
                    {[bottom1, bottom2, bottom3, bottom4].map((src, i) => (
                      <button
                        key={i}
                        type="button"
                        className="flex-1 md:flex-none md:w-[70px] h-[44px] bg-transparent border border-[#e0e0e0] rounded-[8px] cursor-pointer flex items-center justify-center box-border"
                      >
                        <img src={src} alt="social" className="w-6 h-6 object-contain" />
                      </button>
                    ))}
                  </div>

                </form>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* ── Right panel — image (hidden on mobile) ── */}
      <div className="hidden md:block w-[796px] relative overflow-hidden min-h-screen flex-shrink-0">
        <img
          src={loginPageImg}
          alt="Register Visual"
          className="absolute top-[-110px] left-0 w-[796px] h-[1300px] object-cover object-center"
        />
      </div>

    </div>
  );
};

export default RegisterPage;
