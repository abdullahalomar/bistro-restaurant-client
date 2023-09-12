import { useEffect, useRef, useState } from 'react';
import loginImg from '../../assets/login/login.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';

const Login = () => {
    const [disabled, setDisabled] = useState(true)
    const captchaRef = useRef(null);

    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    }

    const handleValidateCaptcha = e => {
        const user_captcha_value = captchaRef.current.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false);
        }
    }
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <img src={loginImg} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name='email'
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name='password'
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>

              <div className="form-control">
                <label className="label">
                <LoadCanvasTemplate />
                </label>
                <input
                  ref={captchaRef}  
                  type="text"
                  name='captcha'
                  placeholder="Type here "
                  className="input input-bordered"
                />
                <button onClick={handleValidateCaptcha} className="btn btn-outline btn-xs mt-4">Validate</button>
              </div>

              <div className="form-control mt-6">
                <input disabled={disabled} className="btn btn-primary" type="submit" value="Login" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
