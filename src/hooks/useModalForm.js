import { useState } from "react"

export const useModalForm = () => {
	const [showModal, setShowModal] = useState(false);

	const showModalForm = () => {
		setShowModal(true);
	}

	const closeModal = () => {
		setShowModal(false);
	}

	return {
		showModal,
		showModalForm,
		closeModal,
	}
}
