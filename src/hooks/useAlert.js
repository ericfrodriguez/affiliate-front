import { useState } from "react"

export const useAlert = () => {
	const [showAlert, setShowAlert] = useState(false);
	const [alertMessage, setAlertMessage] = useState('');
	const [alertTitle, setAlertTitle] = useState('');

	const showAlertMessage = (title, message) => {
		setAlertTitle(title);
		setAlertMessage(message);
		setShowAlert(true);
	}

	const closeAlert = () => {
		setShowAlert(false);
	}

	return {
		showAlert,
		alertMessage,
		showAlertMessage,
		closeAlert,
		alertTitle
	}
}
