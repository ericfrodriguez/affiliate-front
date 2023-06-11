import { useEffect, useState } from "react"
import { ButtonTextIcon } from "../components/ButtonTextIcon"
import { CreateForm } from "../components/CreateForm"
import { FormModal } from "../components/FormModal"
import { ItemTable } from "../components/ItemTable"
import { useModalForm } from "../hooks/useModalForm"

import api from "../../api"
import axios from "axios"
import { getHeaderToken } from "../../helpers/getHeaderAuth"
import { UpdateForm } from "../components/UpdateForm"
import { useSelector } from "react-redux"

export const AdminPanel = () => {
	const [userList, setUserList] = useState([])
	const {
		showModal: showCreate,
		showModalForm: showCreateModal,
		closeModal: closeCreate,
	} = useModalForm();

	const {
		showModal: showUpdate,
		showModalForm: showUpdateModal,
		closeModal: closeUpdate,
	} = useModalForm();

	useEffect(() => {

		axios.get(`${api}/affiliate`, getHeaderToken())
			.then(res => {
				setUserList(res.data)
			})
			.catch(err => console.log(err));
	}, [showCreate, showUpdate]);


	const PlusIcon = () => (
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
			<path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
		</svg>
	)

	return (
		<>
			<div className="flex items-center cursor-pointer p-8 h-28">
				<ButtonTextIcon onClick={showCreateModal} title='Cargar nuevo' icon={<PlusIcon />} />
			</div>
			<ItemTable showUpdateModal={showUpdateModal} data={userList}/>
			<FormModal open={showCreate} onClose={closeCreate} title='Nuevo usuario' form={<CreateForm closeCreate={closeCreate} />} />
			<FormModal open={showUpdate} onClose={closeUpdate} title='Editar usuario' form={<UpdateForm closeUpdate={closeUpdate} />} />
		</>
	)
}
