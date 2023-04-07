import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    
    return (
        <div
            style={{ backgroundImage: `url('/images/provide-background.webp')` }}
            className="hero min-h-screen image-full bg-base-200">

            <form className="card flex-shrink-0 py-5 w-full max-w-lg shadow-2xl bg-base-100">
                <h1 className='text-3xl text-center'>Create New Account</h1>

                <div className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input name='name' type="text" placeholder="Enter your name" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name='email' type="email" placeholder="Enter your email" className="input input-bordered" />
                    </div>
                    <div className="form-control mt-3">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name='password' type="password" placeholder="Enter your password" className="input input-bordered" />

                        <label className="label">
                            <span className="label-text">Confirm password</span>
                        </label>
                        <input name='confirmPassword' type="password" placeholder="Confirm password" className="input input-bordered" />

                        <label className="label justify-start">
                            Already have an Account ? <Link to="/login" className="label-text-alt text-blue-800 text-[16px] ml-2  link link-hover"> Log In</Link>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn">Signup</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Signup;