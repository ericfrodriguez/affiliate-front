import { ButtonIcon } from "../components/ButtonIcon"
import { CreateForm } from "../components/CreateForm"
import { FormModal } from "../components/FormModal"
import { useModalForm } from "../hooks/useModalForm"

export const AdminPanel = () => {
	const {
		showModal: showCreate,
		showModalForm: showCreateModal,
		closeModal: closeCreate,
	} = useModalForm();

	const PlusIcon = () => (
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
			<path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
		</svg>
	)

	return (
		<>
			<ButtonIcon onClick={showCreateModal} title='Cargar nuevo' icon={<PlusIcon />} />
			<FormModal open={showCreate} onClose={closeCreate} title='Nuevo usuario' form={<CreateForm closeCreate={closeCreate}/>}/>
		</>
	)
}
