import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { userAuthContext } from '../../Context/UserContext';

const Register = () => {

    const { emailSignUp, updateProfileName } = useContext(userAuthContext);

    // login system
    const navigate = useNavigate();


    // const [form,setForm] = useState({});
    const [error, setError] = useState(null);

    // Form values.
    const { register, handleSubmit, watch, formState: { errors } } = useForm();




    //    register form
    const onSubmit = data => {
        const name = data.name;
        const email = data.email;
        // !Email sign up system
        emailSignUp(email, name)
            .then(result => {



                // !Updating user name

                // !Updating User name
                updateProfileName(name)
                    .then(res => toast("success"))
                    .catch(error => console.log(error));


                //! Storing Data into our data base
                const user = {
                    name,
                    email: result.user.email
                }

                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify(user)

                })
                    .then(res => res.json())
                    .then(data => {

                        if (data.acknowledged) {


                            setError('Sign Up Success!');
                            toast.success('Congrats!', { icon: ':)' })
                            setTimeout(() => {
                                navigate('/')
                            }, 1500);


                        }

                    })
                    .catch(error => console.log(error))

            })
            .catch(error => {
                setError(error.message)
                console.log(error)


            })

    };

    // console.log(watch("exampleRequired")); // watch input value by passing the name of it



    // Button disabled enabled
    const password = watch("password");
    const email = watch("email");












    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form onSubmit={handleSubmit(onSubmit)} className='card p-10 my-40 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto' >
            <Toaster />
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

            <button disabled={password === '' || email === ''} className='btn text-white' type="submit">Sign Up</button>
        </form>
    );
};

export default Register;