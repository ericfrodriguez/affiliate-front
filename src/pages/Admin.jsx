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
import { ButtonIcon } from "../components/ButtonIcon"

export const AdminPanel = () => {
	const [userList, setUserList] = useState(null)
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

	const LogoutIcon = () => (
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
			<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
		</svg>
	)

	const handleLogout = () => {
		localStorage.removeItem('token');
	}

	return (
		<div className="bg-sky-200 h-screen">
			<div className="flex items-center justify-between cursor-pointer p-8 h-28">
				<ButtonTextIcon onClick={showCreateModal} title='Cargar nuevo' icon={<PlusIcon />} />
				<ButtonIcon onClick={handleLogout} to='/' icon={<LogoutIcon />} />
			</div>
			{
				userList
					? <ItemTable showUpdateModal={showUpdateModal} data={userList} />
					: (
						<div className="w-full flex justify-center">
							<p className="text-2xl">Cargando...</p>
						</div>
					)
			}
			<FormModal open={showCreate} onClose={closeCreate} title='Nuevo usuario' form={<CreateForm closeCreate={closeCreate} />} />
			<FormModal open={showUpdate} onClose={closeUpdate} title='Editar usuario' form={<UpdateForm closeUpdate={closeUpdate} />} />
		</div>
	)
}
