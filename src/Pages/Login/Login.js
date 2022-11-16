import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { userAuthContext } from '../../Context/UserContext';

const Login = () => {


    const { LoginWithGoogle, LoginByEmail } = useContext(userAuthContext);



    const [error, setError] = useState(null);

    // Form values.
    const { register, handleSubmit, watch, formState: { errors } } = useForm();





    const onSubmit = data => {
        LoginByEmail(data.email, data.password)
            .then(data => {
                setError('Login Success!');
                toast.success('Login Successful!', { icon: ':)' })

            })
            .catch(error => {
                setError(error.message);


            })

    };

    // console.log(watch("exampleRequired")); // watch input value by passing the name of it



    // Button disabled enabled
    const password = watch("password");
    const email = watch("email");





    // Login by google
    const LoginWithGoogleHandler = () => {
        LoginWithGoogle()
            .then(data => toast.success("Login Successful"))
            .catch(error => setError(error))
    }



    return (
        <form onSubmit={handleSubmit(onSubmit)} className='card p-10 my-40 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto' >
            <Toaster />
            <h1 className='text-center text-2xl'>Login</h1>

            <label className="label">
                <span className="label-text">Email</span>
            </label>
            {/* include validation with required or other standard HTML validation rules */}
            <input className='input input-bordered' {...register("email", { required: true })} />
            {/* errors will return when field validation fails  */}


            <label className="label">
                <span className="label-text">Password</span>
            </label>
            {/* include validation with required or other standard HTML validation rules */}
            <input className='input input-bordered' {...register("password", {
                minLength: 6
            })} />
            {/* errors will return when field validation fails  */}

            <label className="label">
                <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
            </label>

            <div className='text-center'>
                {errors.name && <span>This field is required</span>}

                <span>{error}</span>
                <br />

                {errors.password && <span> Min 6 length</span>}




            </div>

         
            <button    disabled={password === '' || email === ''}  className='btn text-white' type="submit">Login</button>
            <button onClick={LoginWithGoogleHandler} className='btn btn-outline mt-2' type="submit">Login With Google</button>
        </form>
    );
};

export default Login;