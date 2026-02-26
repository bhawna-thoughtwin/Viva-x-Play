import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import loginLogo from '../assets/images/loginlogo.png';
import loginPageImg from '../assets/images/loginpage.png';
import bottom1 from '../assets/images/bottom.png';
import bottom2 from '../assets/images/bottom2.png';
import bottom3 from '../assets/images/bottom3.png';
import bottom4 from '../assets/images/bottom4.png';
import toast from 'react-hot-toast';
import { FiEye, FiEyeOff } from 'react-icons/fi';


const RegisterPage = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [agreeMarketing, setAgreeMarketing] = useState(false);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dob, setDob] = useState('');
  const [country, setCountry] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();

    if (!username || !email || !password || !dob || !country) {
      toast.error("Please fill all fields");
      return;
    }

    const userData = {
      username,
      email,
      password,
      dob,
      country,
    };

    // Save to localStorage
    localStorage.setItem("dummyUser", JSON.stringify(userData));

    toast.success("Registration successful! Please log in.");
    navigate("/login");
  };

  return (
    <div className="flex min-h-screen bg-[#f0f0f0] overflow-hidden">

      <div className="flex-1 min-h-screen bg-[#f0f0f0] flex items-center justify-center px-4 py-8 box-border">

        <div className="w-full max-w-[541px] rounded-[16px] border border-[#e0e0e0] p-6 md:p-8 bg-white box-border flex items-center justify-center">

          <div className="w-full flex flex-col items-center gap-8 md:gap-[64px] box-border">

            <img src={loginLogo} alt="VIVA X PLAY" className="w-[130px] md:w-[160px] h-auto object-contain flex-shrink-0" />

            <div className="w-full flex flex-col gap-6 md:gap-[72px] box-border">

              {/* Tab toggle */}
              <div
                className="flex w-full h-[41px] rounded-[4px] overflow-hidden gap-1 p-1 items-center flex-shrink-0 box-border"
                style={{ border: '1px solid #1CD4FF80' }}
              >
                <button
                className="flex-1 h-full px-[10px] py-1 rounded-md cursor-pointer text-[14px] font-bold text-[#FFFFFF] border-none box-border"
                  style={{ background: 'linear-gradient(180deg,  #1F2937 0%, #1F2937 100%)' }}
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

              <div className="w-full flex flex-col items-center gap-6 md:gap-[32px]">

                <h1 className="text-[22px] md:text-[32px] font-bold text-[#111111] m-0 w-full text-center uppercase leading-tight">
                  CREATE YOUR ACCOUNT
                </h1>

                {/* Updated Form */}
                <form
                  className="w-full flex flex-col gap-[16px]"
                  onSubmit={handleRegister}
                >

                  {/* Username */}
                  <div className="flex flex-col gap-[6px]">
                    <label className="text-[13px] font-medium text-[#555555]">Username</label>
                    <input
                      type="text"
                      placeholder="Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="w-full px-[14px] py-3 rounded-[8px] border border-[#e0e0e0] text-[14px] text-[#111111] outline-none box-border bg-[#fafafa]"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-[6px]">
                    <label className="text-[13px] font-medium text-[#555555]">Email</label>
                    <input
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-[14px] py-3 rounded-[8px] border border-[#e0e0e0] text-[14px] text-[#111111] outline-none box-border bg-[#fafafa]"
                    />
                  </div>

                  {/* Password */}
                  <div className="flex flex-col gap-[6px]">
                    <label className="text-[13px] font-medium text-[#555555]">
                      Password
                    </label>

                    <div className="relative flex items-center">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full pl-[14px] pr-[40px] py-3 rounded-[8px] border border-[#e0e0e0] text-[14px] text-[#111111] outline-none box-border bg-[#fafafa]"
                      />

                      <button
                        type="button"
                        className="absolute right-[14px] bg-transparent border-none cursor-pointer p-0 flex items-center justify-center leading-none"
                        onClick={() => setShowPassword(prev => !prev)}
                      >
                        {showPassword
                          ? <FiEyeOff size={18} color="#999" />
                          : <FiEye size={18} color="#999" />
                        }
                      </button>
                    </div>
                  </div>

                  {/* Date of Birth */}
                  <div className="flex flex-col gap-[6px]">
                    <label className="text-[13px] font-medium text-[#555555]">Date of Birth</label>
                    <div className="relative flex items-center">
                      <input
                        type="date"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                        className="w-full px-[14px] py-3 rounded-[8px] border border-[#e0e0e0] text-[14px] text-[#111111] outline-none box-border bg-[#fafafa] appearance-none"
                        style={{ colorScheme: 'light' }}
                      />
                    </div>
                  </div>

                  {/* Country */}
                  <div className="flex flex-col gap-[6px]">
                    <label className="text-[13px] font-medium text-[#555555]">Country</label>
                    <div className="relative flex items-center">
                      <select
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        className="w-full px-[14px] py-3 rounded-[8px] border border-[#e0e0e0] text-[14px] outline-none box-border bg-[#fafafa] appearance-none cursor-pointer"
                        style={{ color: country ? '#111111' : '#999999' }}
                      >
                        <option value="" disabled>Select Country</option>
                        <option value="US">United States</option>
                        <option value="GB">United Kingdom</option>
                        <option value="CA">Canada</option>
                        <option value="AU">Australia</option>
                        <option value="IN">India</option>
                        <option value="DE">Germany</option>
                        <option value="FR">France</option>
                        <option value="BR">Brazil</option>
                        <option value="MX">Mexico</option>
                        <option value="JP">Japan</option>
                        <option value="ZA">South Africa</option>
                        <option value="NG">Nigeria</option>
                        <option value="PH">Philippines</option>
                        <option value="PK">Pakistan</option>
                        <option value="BD">Bangladesh</option>
                        <option value="OTHER">Other</option>
                      </select>
                      <span className="pointer-events-none absolute right-[14px]">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path d="M6 9l6 6 6-6" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </div>
                  </div>

                  {/* Checkboxes */}
                  <div className="flex flex-col gap-[10px]">
                    <label className="flex items-start gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={agreeTerms}
                        onChange={e => setAgreeTerms(e.target.checked)}
                        className="w-4 h-4 mt-[2px] cursor-pointer accent-[#1cd4ff] shrink-0"
                      />
                      <span className="text-[13px] text-[#333333] leading-snug">
                        I confirm that I am 18+ and agree to the{' '}
                        <span className="underline cursor-pointer text-[#111111] font-medium">Terms &amp; Conditions</span>.
                      </span>
                    </label>
                    <label className="flex items-start gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={agreeMarketing}
                        onChange={e => setAgreeMarketing(e.target.checked)}
                        className="w-4 h-4 mt-[2px] cursor-pointer accent-[#1cd4ff] shrink-0"
                      />
                      <span className="text-[13px] text-[#333333] leading-snug">
                        I agree to receive marketing emails and promotional updates.
                      </span>
                    </label>
                  </div>

                  {/* Register Button */}
                  <button
                    type="submit"
                    className="w-full h-[44px] bg-[#1CD4FF] border border-[#1CD4FF] rounded-[4px] text-[#333333] text-[14px] font-[590] uppercase cursor-pointer flex items-center justify-center px-[10px] py-1 box-border"
                  >
                    Create an account
                  </button>
                </form>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Right Image */}
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
