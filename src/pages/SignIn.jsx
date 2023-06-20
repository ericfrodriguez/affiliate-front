import { DialogModal } from "../components/DialogModal";
import { SigninForm } from "../components/SigninForm"
import { useAlert } from "../hooks/useAlert"


export const SignIn = () => {
	const { alertTitle, alertMessage, closeAlert, showAlert, showAlertMessage } = useAlert();

	return (
		<div className="bg-sky-300 h-screen">
			<SigninForm showAlertMessage={showAlertMessage} />
			<DialogModal title={alertTitle} message={alertMessage} open={showAlert} onClose={closeAlert} />
		</div>
	)
}
