import axios from "axios"

export const AffiliateForm = () => {

	const handleSubmit = async (event) => {

		try {
			event.preventDefault();

			const { dni } = Object.fromEntries(
				new FormData(event.target)
			);

			const response = await axios.get(`https://localhost:7287/api/affiliate/${dni}`);

			console.log(response);
		} catch (error) {
			console.log(error)
		}

	}

	return (
		<div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-lg text-center">
				<h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>

				<p className="mt-4 text-gray-500">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla
					eaque error neque ipsa culpa autem, at itaque nostrum!
				</p>
			</div>

			<form onSubmit={handleSubmit} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
				<div>
					<label htmlFor="email" className="sr-only">DNI</label>

					<div className="relative">
						<input
							type="number"
							name="dni"
							className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
							placeholder="Ingresar DNI"
						/>

						<span className="absolute inset-y-0 end-0 grid place-content-center px-4">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-4 w-4 text-gray-400"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
								/>
							</svg>
						</span>
					</div>
				</div>

				<div className="flex items-center justify-center">

					<button
						type="submit"
						className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
					>
						Ver beneficios
					</button>
				</div>
			</form>
		</div>
	)
}
