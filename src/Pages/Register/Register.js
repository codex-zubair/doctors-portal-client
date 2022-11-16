import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Register = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    // console.log(watch("exampleRequired")); // watch input value by passing the name of it


    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form onSubmit={handleSubmit(onSubmit)} className='card p-10 my-40 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto' >
            <h1 className='text-center text-2xl'>Please Sign Up</h1>
            <label className="label">
                <span className="label-text">Name</span>
            </label>
            {/* register your input into the hook by invoking the "register" function */}
            <input className='input input-bordered' defaultValue="" {...register("name",{ required: true })} />


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
            {errors.example && <span>This field is required</span>}
           </div>

            <input className='btn' type="submit" />
        </form>
    );
};

export default Register;