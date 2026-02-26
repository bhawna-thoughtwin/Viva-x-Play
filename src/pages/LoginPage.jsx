import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import loginLogo from '../assets/images/loginlogo.png';
import loginPageImg from '../assets/images/loginpage.png';
import bottom1 from '../assets/images/bottom.png';
import bottom2 from '../assets/images/bottom2.png';
import bottom3 from '../assets/images/bottom3.png';
import bottom4 from '../assets/images/bottom4.png';
import toast from 'react-hot-toast';
import { FiEye, FiEyeOff } from 'react-icons/fi';

const LoginPage = () => {
  const { login } = useApp(); //  Get user and login function from AppContext
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);

  //  Login states
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Validation: Check if fields are empty
    if (!emailOrUsername.trim() || !password.trim()) {
      toast.error('Please fill in all fields');
      return;
    }

    // Get stored user from localStorage
    const storedUser = JSON.parse(localStorage.getItem('dummyUser'));

    if (!storedUser) {
      toast.error('No user found. Please register first.');
      return;
    }

    // Validate credentials
    const isValidUser =
      (emailOrUsername === storedUser.email ||
        emailOrUsername === storedUser.username) &&
      password === storedUser.password;

    if (isValidUser) {
      // Set logged in state
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('currentUser', JSON.stringify(storedUser));

      // Call context login function if available
      if (login) {
        login(storedUser);
      }

      // Remember me option
      if (remember) {
        localStorage.setItem('rememberUser', emailOrUsername);
      }

      toast.success('Login successful!');
      navigate('/');
    } else {
      toast.error('Invalid email, username, or password');
    }
  };

  return (
    <div className="flex min-h-screen bg-[#f0f0f0] overflow-hidden">

      <div className="flex-1 min-h-screen bg-[#f0f0f0] flex items-center justify-center px-4 py-8 box-border">

        <div className="w-full max-w-[541px] rounded-[16px] border border-[#e0e0e0] p-6 md:p-8 bg-white box-border flex items-center justify-center">

          <div className="w-full flex flex-col items-center gap-8 md:gap-[64px] box-border">

            <img
              src={loginLogo}
              alt="VIVA X PLAY"
              className="w-[130px] md:w-[160px] h-auto object-contain flex-shrink-0"
            />

            <div className="w-full flex flex-col gap-6 md:gap-[72px] box-border">

              {/* Tab toggle */}
              <div
                className="flex w-full h-[41px] rounded-[4px] overflow-hidden gap-1 p-1 items-center flex-shrink-0 box-border"
                style={{ border: '1px solid #1CD4FF80' }}
              >
                <button
                  className="flex-1 h-full px-[10px] py-1 rounded-[2px] cursor-pointer text-[14px] font-medium text-[#555555] bg-transparent border-none box-border"
                  onClick={() => navigate('/register')}
                >
                  Register
                </button>
                <button
                  className="flex-1 h-full px-[10px] py-1 rounded-md cursor-pointer text-[14px] font-bold text-[#FFFFFF] border-none box-border"
                  style={{ background: 'linear-gradient(180deg, #1F2937 0%, #1F2937 100%)' }}
                  onClick={() => navigate('/login')}
                >
                  Login
                </button>
              </div>

              <div className="w-full flex flex-col items-center gap-6 md:gap-[32px]">

                <h1 className="text-[22px] md:text-[32px] font-bold text-[#111111] m-0 w-full text-center uppercase leading-tight">
                  YOU'RE BACK!
                </h1>

                {/*  Updated Form */}
                <form
                  className="w-full flex flex-col gap-[16px]"
                  onSubmit={handleLogin}
                >

                  {/* Email / Username */}
                  <div className="flex flex-col gap-[6px]">
                    <label className="text-[13px] font-medium text-[#555555]">
                      Email Or Username
                    </label>
                    <input
                      type="text"
                      placeholder="Email or Username"
                      value={emailOrUsername}
                      onChange={(e) => setEmailOrUsername(e.target.value)}
                      className="w-full px-[14px] py-3 rounded-[8px] border border-[#e0e0e0] text-[14px] text-[#111111] outline-none box-border bg-[#fafafa]"
                    />
                  </div>

                  {/* Password */}
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


                  {/* Remember */}
                  <div className="flex items-center justify-between">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={remember}
                        onChange={e => setRemember(e.target.checked)}
                        className="w-4 h-4 cursor-pointer accent-[#1cd4ff]"
                      />
                      <div className="flex items-center justify-between gap-15 md:gap-60 w-full flex-wrap">
                        <span className="text-[13px] text-[#333333]">
                          Remember me
                        </span>

                        <span className="text-[13px] text-[#13ACCF] cursor-pointer hover:text-[#13ACCF]">
                          Forgot Password ?
                        </span>
                      </div>
                    </label>
                  </div>
                  {/* Login Button */}
                  <button
                    type="submit"
                    className="w-full h-[44px] bg-[#1CD4FF] border border-[#1CD4FF] rounded-[4px] text-[#333333] text-[14px] font-[590] uppercase cursor-pointer flex items-center justify-center px-[10px] py-1 box-border"
                  >
                    LOGIN
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
          alt="Login Visual"
          className="absolute top-[-110px] left-0 w-[796px] h-[1300px] object-cover object-center"
        />
      </div>

    </div>
  );
};

export default LoginPage;
