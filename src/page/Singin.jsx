import React, { useContext } from 'react';
import { AuthContext } from '../Authprovider/AuthProvider';
import { data } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Singin = () => {
    const {createUser}=useContext(AuthContext)
    const handelSingin=(e)=>{
        e.preventDefault()
        const form=e.target;
        const name=form.name.value;
        const email=form.email.value;
        const password=form.password.value;
        const userss={name,email};
        createUser(email,password)
        .then((res)=>console.log(res.user))
        fetch('http://localhost:5000/man',{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(userss)
        })
        
        .then((data)=>{
            console.log(data);
            if(data.insertedId){
                alert('sing in successfully')
                form.reset();
            }
        })
        .catch((error)=>{
            console.log(error.message);
        })
    }
    return (
        <div>
            <Header></Header>
            <div className="hero bg-base-200 min-h-screen w-11/12 mx-auto">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sing In</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handelSingin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="name" className="input input-bordered" required />
              </div>
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
                <button className="btn btn-primary">Sing in</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer></Footer>
        </div>
    );
};

export default Singin;