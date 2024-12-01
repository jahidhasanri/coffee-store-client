import React, { useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { AuthContext } from '../Authprovider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const {loginUser}=useContext(AuthContext)
    const navigate = useNavigate();
    const handelLogin = (e)=>{
        e.preventDefault()
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;
        loginUser(email,password)
        .then((result)=>{
            console.log(result);
            navigate('/')

            const singinuser = result.user.metadata.lastSignInTime
            console.log(singinuser);
            const loginInfo={email,singinuser}

            fetch(`http://localhost:5000/man`,{
              method:'PATCH',
              headers:{
                  "content-type":"application/json"
              },
              body:JSON.stringify(loginInfo)
            })
            .then((res)=>res.json())
            .then((data) => {
              console.log('Login info updated successfully:', data);
              alert('Login info updated successfully!');
            })
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    return (
        <div>
            <Header></Header>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handelLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
            <Footer></Footer>
        </div>
    );
};

export default Login;