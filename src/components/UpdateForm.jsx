import axios from "axios";
import api from "../../api";
import { useSelector } from "react-redux";

export const UpdateForm = ({ closeUpdate }) => {
	const { affiliate } = useSelector(store => store.affiliateReducer);
	console.log('Affiliate id: ', affiliate.id);

	const handleSubmit = async (event) => {
		try {
			event.preventDefault();

			const formData = Object.fromEntries(
				new FormData(event.target)
			);
			formData.id = affiliate.id;

			const token = localStorage.getItem('token');
			const options = {
				headers: {
					Authorization: `Bearer ${token}`
				}
			}

			const response = await axios.put(`${api}/affiliate/${affiliate.id}`, formData, options);

			closeUpdate();
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
							defaultValue={affiliate.name}
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
							defaultValue={affiliate.surname}
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
							defaultValue={affiliate.email}
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
							defaultValue={affiliate.dni}
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
							defaultValue={affiliate.lu}
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
							defaultValue={affiliate.phoneNumber}
						/>
					</div>
				</div>

				<div className="flex items-center justify-center">

					<button
						type="submit"
						className="inline-block rounded-lg bg-sky-950 px-5 py-3 text-sm font-medium text-white"
					>
						Enviar
					</button>
				</div>
			</form>
		</>
	)
}
