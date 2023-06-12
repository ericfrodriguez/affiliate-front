import axios from "axios"
import api from "../../api";

export const AffiliateForm = ({ handleResponse }) => {

	const handleSubmit = async (event) => {
		try {
			event.preventDefault();

			const { dni } = Object.fromEntries(
				new FormData(event.target)
			);

			const response = await axios.get(`${api}/affiliate/${dni}`);

			handleResponse(response.data);
		} catch (error) {
			handleResponse(error)
		}
	}

	return (
		<div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-lg text-center">
				<h1 className="text-2xl font-bold sm:text-3xl">Buscar usuario por DNI</h1>

				<p className="mt-4 text-gray-800">
					Ingresar DNI para verificar la disponibilidad de beneficios.
				</p>
			</div>

			<form onSubmit={handleSubmit} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
				<div>
					<label htmlFor="email" className="sr-only">DNI</label>

					<div className="relative">
						<input
							type="text"
							name="dni"
							className="w-full rounded-lg border-[1px] border-gray-100 p-4 pe-12 text-sm shadow-md"
							placeholder="Ingresar DNI"
						/>

						<span className="absolute text-gray-300 inset-y-0 end-0 grid place-content-center px-4">
							123
						</span>
					</div>
				</div>

				<div className="flex items-center justify-center">

					<button
						type="submit"
						className="inline-block rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white"
					>
						Buscar
					</button>
				</div>
			</form>
		</div>
	)
}
