import React from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Login = () => {
    const handleSubmit = (event)=>{
        event.preventDefault();
        
        const user = {
            email: event.target.email.value,
            password: event.target.password.value
        }
        console.log(user);
        toast.success('Successfully submitted the information.')
    }
    return (

        <div
            style={{ backgroundImage: `url('/images/provide-background.webp')` }}
            className="hero min-h-screen image-full bg-base-200">

            <form 
            onSubmit={handleSubmit}
            className="card flex-shrink-0 py-5 w-full max-w-lg shadow-2xl bg-base-100">
                <h1 className='text-3xl text-center'>Login Now</h1>

                <div className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input required name='email' type="email" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control mt-3">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input required name='password' type="password" placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <Link to="#" className="label-text-alt link link-hover">Forgot password?</Link>
                        </label>
                        <label className="label justify-start">
                            Don't have an Account ? <Link to="/signup" className="label-text-alt text-blue-800 text-[16px] ml-2  link link-hover"> Sign Up</Link>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button type='submit' className="btn">Login</button>
                    </div>
                </div>
            </form>
        </div>


    );
};

export default Login;