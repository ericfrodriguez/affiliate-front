import axios from "axios";
import api from "../../api";

export const CreateForm = ({ closeCreate }) => {

	const handleSubmit = async (event) => {
		try {
			event.preventDefault();

			const formData = Object.fromEntries(
				new FormData(event.target)
			);

			const token = localStorage.getItem('token');
			const options = {
				headers: {
					Authorization: `Bearer ${token}`
				}
			}

			const response = await axios.post(`${api}/affiliate`, formData, options);

			console.log(response);
			closeCreate();
		} catch (error) {
			console.log(error.message)
			// showAlertMessage('Error', 'Usuario y/o contraseña incorrectos');
		}
	}

	return (
		<>
			<form onSubmit={handleSubmit} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
				<div>
					<label htmlFor="name" className="sr-only">Nombre</label>

					<div className="relative">
						<input
							type="text"
							name="name"
							className="w-full rounded-lg border-[1px] border-gray-200 p-4 pe-12 text-sm shadow-sm"
							placeholder="Nombre"
						/>
					</div>
				</div>
				<div>
					<label htmlFor="surname" className="sr-only">Apellido</label>

					<div className="relative">
						<input
							type="text"
							name="surname"
							className="w-full rounded-lg border-[1px] border-gray-200 p-4 pe-12 text-sm shadow-sm"
							placeholder="Apellido"
						/>
					</div>
				</div>
				<div>
					<label htmlFor="email" className="sr-only">Email</label>

					<div className="relative">
						<input
							type="text"
							name="email"
							className="w-full rounded-lg border-[1px] border-gray-200 p-4 pe-12 text-sm shadow-sm"
							placeholder="Email"
						/>
					</div>
				</div>
				<div>
					<label htmlFor="dni" className="sr-only">DNI</label>

					<div className="relative">
						<input
							type="text"
							name="dni"
							className="w-full rounded-lg border-[1px] border-gray-200 p-4 pe-12 text-sm shadow-sm"
							placeholder="DNI"
						/>
					</div>
				</div>
				<div>
					<label htmlFor="lu" className="sr-only">LU</label>

					<div className="relative">
						<input
							type="text"
							name="lu"
							className="w-full rounded-lg border-[1px] border-gray-200 p-4 pe-12 text-sm shadow-sm"
							placeholder="LU"
						/>
					</div>
				</div>
				<div>
					<label htmlFor="phoneNumber" className="sr-only">Tel</label>

					<div className="relative">
						<input
							type="text"
							name="phoneNumber"
							className="w-full rounded-lg border-[1px] border-gray-200 p-4 pe-12 text-sm shadow-sm"
							placeholder="Tel."
						/>
					</div>
				</div>

				<div className="flex items-center justify-center">

					<button
						type="submit"
						className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
					>
						Enviar
					</button>
				</div>
			</form>
		</>
	)
}
