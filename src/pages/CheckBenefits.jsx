import { useState } from "react"
import { AffiliateForm } from "../components/AffiliateForm"
import { AffiliateMessage } from "../components/AffiliateMessage"


export const CheckBenefits = () => {

	const [showMessage, setShowMessage] = useState(false);
	const [success, setSuccess] = useState(false)
	const [user, setUser] = useState({});

	const handleResponse = (data) => {
		setShowMessage(true);
		if(data instanceof Error) {
			setSuccess(false)
			return;
		}

		setSuccess(true)
		setUser(data);
	}

	return (
		<>
			<AffiliateForm handleResponse={handleResponse} />
			{showMessage && <AffiliateMessage user={user} success={success}/> }
		</>
	)
}
