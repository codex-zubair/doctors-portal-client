import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { userAuthContext } from '../../Context/UserContext';

const Register = () => {

    const { emailSignUp } = useContext(userAuthContext);


    const [form,setForm] = useState({});
    const [error, setError] = useState(null);

    // Form values.
    const { register, handleSubmit,watch, formState: { errors } } = useForm();
    const onSubmit = data => setForm(data);

    // console.log(watch("exampleRequired")); // watch input value by passing the name of it



    // Button disabled enabled
    const password = watch("password");
    const email = watch("email");
    



    // login by email
    const emailLoginHandler = ()=> {

        emailSignUp(form.email,form.password)
        .then(data=> {
            setError('Sign Up Success!');
            toast.success('Congrats!', {icon:':)'})
        })
        .catch(error=> setError(error.message))

    }








    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form onSubmit={handleSubmit(onSubmit)} className='card p-10 my-40 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto' >
        <Toaster/>
            <h1 className='text-center text-2xl'>Please Sign Up</h1>
            <label className="label">
                <span className="label-text">Name</span>
            </label>
            {/* register your input into the hook by invoking the "register" function */}
            <input className='input input-bordered' defaultValue="" {...register("name", { required: true })} />


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
            <input className='input input-bordered' {...register("password", { required: true })} />
            {/* errors will return when field validation fails  */}

            <label className="label">
                <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
            </label>

            <div className='text-center'>
                {errors.name && <span>This field is required</span>}
                <span>{error}</span>
            </div>

             <button disabled={password === ''|| email ===''} onClick={emailLoginHandler} className='btn text-white' type="submit">Sign Up</button>
        </form>
    );
};

export default Register;