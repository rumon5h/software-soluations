import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (

        <div
            style={{ backgroundImage: `url('/images/provide-background.webp')` }}
            className="hero min-h-screen image-full bg-base-200">

            <div className="card flex-shrink-0 py-5 w-full max-w-lg shadow-2xl bg-base-100">
            <h1 className='text-3xl text-center'>Login Now</h1>

                <div className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control mt-3">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="text" placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <Link to="#" className="label-text-alt link link-hover">Forgot password?</Link>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn">Login</button>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Login;