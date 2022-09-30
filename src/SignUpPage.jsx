import React from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { HiArrowCircleLeft } from 'react-icons/hi';
import Login from "./Login";
import { Link } from 'react-router-dom';


function SignUpPage() {
  function callLoginApi(values) {
    console.log('user email and pass is ', values.email, values.password);
  }

  const schema = Yup.object().shape({
    email: Yup.string().email(),
    password: Yup.string().min(8)
  });

  const { handleSubmit, values, handleChange, resetForm } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: callLoginApi,
    validationSchema: schema
  });


  return (<>
    <div className="mt-5"><img src="https://t4.ftcdn.net/jpg/02/00/90/53/360_F_200905394_2u1hKNTSawkcR6N1X0aX0PiSBR1tvUMn.jpg" className="w-full" alt="background img" />
      <div className="relative bottom-[50rem] w-[32rem] h-[650px] bg-[#09488fde] ml-24">
        <div className="relative top-24"> <Link to="/login/" className="relative bottom-24">
          <HiArrowCircleLeft className="text-4xl sm:text-3xl text-white" /> </Link>

          <form onSubmit={handleSubmit} className="text-center">
            <div className="px-2 py-4">
              <label htmlFor="email" className="sr-only">
                Email Address
              </label>
              <input
                value={values.email}
                id="email"
                name="email"
                onChange={handleChange}
                type="email"
                required
                placeholder="Email" className="p-3" />
            </div>
            <div className="px-2 py-4">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                value={values.password}
                id="password"
                type="password"
                onChange={handleChange}
                placeholder="Password"
                required
                name="password" className="p-3" />
            </div>
            <div className="space-x-4">
              <button
                onClick={handleSubmit}
                type="submit"
                className="m-auto py-2 px-3 hover:translate-x-4 transition duration-700 ease-in-out bg-tomato-light-1 hover:bg-logo-second text-xl"
              >
                Login
              </button>
              <button
                onClick={resetForm}
                className="m-auto py-2 px-3 hover:translate-x-4 transition duration-700 ease-in-out bg-tomato-light-1 hover:bg-logo-second text-xl"
              >
                Reset
              </button>
            </div>
            <Link to="/" className="text-sm text-green-600">More Way's <span className="text-white text-sm"> to Sign Up</span><br />
              <button className="bg-tomato-light-2 hover:bg-logo-second text-black px-2 py-3">forgot Password</button>
            </Link>
          </form>

        </div>
      </div>
    </div>
  </>)
}

export default SignUpPage;