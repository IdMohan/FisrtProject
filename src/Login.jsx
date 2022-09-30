import React from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {HiArrowCircleLeft} from 'react-icons/hi';
import SignUpPage from './SignUpPage';
 
function Login() {
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

	return (
		<>
		<div className=""><img src="https://t4.ftcdn.net/jpg/02/00/90/53/360_F_200905394_2u1hKNTSawkcR6N1X0aX0PiSBR1tvUMn.jpg" className="w-full" alt="background img" /> 
			<div className="bg-[#09488fde] h-[650px] w-[32rem] m-auto px-8 flex flex-col justify-center relative bottom-[50rem] ml-24">
			<Link to="/" className="relative bottom-24">
          <HiArrowCircleLeft className="text-4xl sm:text-3xl text-white" />
        </Link>
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
							placeholder="Email" className="p-3"/>
					</div>
					<div className="px-2 py-4">
						<label htmlFor="password" className="sr-only">
							Password
						</label>
						<input
							value={values.password}
							id="password"
							type="text"
							onChange={handleChange}
							placeholder="Password"
							required
							name="password" className="p-3"/>
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
					<Link to="/signuppage/" className="text-sm text-tomato-default">Create a <span className="text-white text-sm">New Account</span><br/>
					<button className="bg-tomato-light-2 hover:bg-logo-second text-black px-2 py-3">Sign Up</button>
					</Link>
				</form>
			</div>
		</div>
		</>
	);
}

export default Login;
