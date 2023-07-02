import { useState } from "react"
import { AffiliateForm } from "../components/AffiliateForm"
import { AffiliateMessage } from "../components/AffiliateMessage"
import { ButtonIcon } from "../components/ButtonIcon"
import { CarouselBenefits } from "../components/CarouselBenefits"


export const CheckBenefits = () => {

	const LockIcon = () => (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
			<path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clipRule="evenodd" />
		</svg>
	)

	const [showMessage, setShowMessage] = useState(false);
	const [success, setSuccess] = useState(false)
	const [user, setUser] = useState({});

	const handleResponse = (data) => {
		setShowMessage(true);
		if (data instanceof Error) {
			setSuccess(false)
			return;
		}

		setSuccess(true)
		setUser(data);
	}

	return (
		<div className="bg-sky-300 min-h-screen">

			<div className="flex items-center justify-end cursor-pointer p-8 h-28">
				<ButtonIcon to='/auth/signin' icon={<LockIcon />} />
			</div>
			<AffiliateForm handleResponse={handleResponse} />
			{showMessage && <AffiliateMessage user={user} success={success} />}
			<section className="flex flex-col items-center mt-12 pb-12">
				<h2 className="text-2xl text-sky-950 font-bold sm:text-3xl">Beneficios</h2>
				<div className="w-full h-[300px] max-w-[1600px] mx-auto py-4">
					<CarouselBenefits />
				</div>
			</section>
		</div>
	)
}
