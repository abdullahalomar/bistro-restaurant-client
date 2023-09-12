import { useContext, useEffect, useRef, useState } from 'react';
import loginImg from '../../assets/login/login.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';

const Login = () => {
    const [disabled, setDisabled] = useState(true)
    const captchaRef = useRef(null);

    const {signIn} = useContext(AuthContext);

    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
        .then(result => {
          const user = result.user;
          console.log(user);
        })
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
            <p className='text-center text-2xl font-bold mt-4'>Login</p>
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
            <div className='mx-auto mb-5'>
            <p><small>New here?</small> <Link to='/signup' className='text-orange-500'>Create a New Account</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
