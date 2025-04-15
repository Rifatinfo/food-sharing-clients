import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";

const SignUp = () => {
    const {createUser} = useContext(AuthContext);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();

      const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password)
        .then(result => {
            console.log(result.user);
        })
    }

    console.log(watch("example")) // watch input value by passing the name of it
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <h1 className="text-5xl font-bold">Sign Up now!</h1>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register("email", { required: true })} name="email" type="email" placeholder="email" className="input input-bordered" />
                        </div>
                        

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input {...register("password", { required: true })} name="password" type="password" placeholder="password" className="input input-bordered" />
                            
                        </div>
                        <div className="form-control mt-6">
                            <button  type="submit" className="btn  bg-black text-white">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;