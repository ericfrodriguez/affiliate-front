import axios from "axios";
import { useState } from "react"
import api from "../../api";
import { useNavigate} from "react-router-dom";

export const SigninForm = ({ showAlertMessage }) => {
	const [viewPassword, setViewPassword] = useState(true);

	const navigate = useNavigate();

	const handleViewPassword = () => {
		setViewPassword(!viewPassword);
	}

	const handleSubmit = async (event) => {
		try {
			event.preventDefault();

			const formData = Object.fromEntries(
				new FormData(event.target)
			);

			formData.email = '';

			const response = await axios.post(`${api}/user/authenticate`, formData);

			localStorage.setItem('token', response.data.token);
			setTimeout(() => {
				navigate('/admin');
			}, 1000);
		} catch (error) {
			console.log(error)
			showAlertMessage('Error', 'Usuario y/o contraseña incorrectos');
		}
	}

	return (

		<div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-lg text-center">
				<h1 className="text-2xl font-bold sm:text-3xl">Bienvenido</h1>

				<p className="mt-4 text-gray-500">
					Ingresar como administrador
				</p>
			</div>

			<form onSubmit={handleSubmit} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
				<div>
					<label htmlFor="email" className="sr-only">Usuario</label>

					<div className="relative">
						<input
							type="text"
							name="username"
							className="w-full rounded-lg border-[1px] border-gray-200 p-4 pe-12 text-sm shadow-md"
							placeholder="Usuario"
						/>

						<span className="absolute inset-y-0 end-0 grid place-content-center px-4 text-gray-400">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
								<path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
							</svg>

						</span>
					</div>
				</div>

				<div>
					<label htmlFor="password" className="sr-only">Contraseña</label>

					<div className="relative">
						<input
							type={viewPassword ? 'password' : 'text'}
							name="password"
							className="w-full rounded-lg border-[1px] border-gray-200 p-4 pe-12 text-sm shadow-md"
							placeholder="Contraseña"
						/>

						<span onClick={handleViewPassword} className="absolute inset-y-0 end-0 grid place-content-center px-4 text-gray-500">
							{
								viewPassword
									? (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
										<path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
										<path fillRule="evenodd" d="M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
									</svg>)
									: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
										<path fillRule="evenodd" d="M3.28 2.22a.75.75 0 00-1.06 1.06l14.5 14.5a.75.75 0 101.06-1.06l-1.745-1.745a10.029 10.029 0 003.3-4.38 1.651 1.651 0 000-1.185A10.004 10.004 0 009.999 3a9.956 9.956 0 00-4.744 1.194L3.28 2.22zM7.752 6.69l1.092 1.092a2.5 2.5 0 013.374 3.373l1.091 1.092a4 4 0 00-5.557-5.557z" clipRule="evenodd" />
										<path d="M10.748 13.93l2.523 2.523a9.987 9.987 0 01-3.27.547c-4.258 0-7.894-2.66-9.337-6.41a1.651 1.651 0 010-1.186A10.007 10.007 0 012.839 6.02L6.07 9.252a4 4 0 004.678 4.678z" />
									</svg>)
							}

						</span>
					</div>
				</div>

				<div className="flex items-center justify-center">

					<button
						type="submit"
						className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
					>
						Ingresar
					</button>
				</div>
			</form>
		</div>
	)
}

