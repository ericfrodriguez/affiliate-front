import axios from "axios"
import { getHeaderToken } from "../../helpers/getHeaderAuth"
import api from "../../api"
import { useDispatch } from "react-redux"
import { getAffiliateById } from "../store/affiliate/actions"

export const ItemTable = ({ data, showUpdateModal}) => {
	const dispatch = useDispatch();

const handleEdit = async (dni) => {
	await dispatch(getAffiliateById(dni));
	showUpdateModal();
}

const handleDelete = async (dni) => {
	try {
		const response = await axios.delete(`${api}/affiliate/${dni}`, getHeaderToken());

		console.log(response);
	} catch (error) {
		console.log(error)
	}
}

	const ItemRow = ({ name, surname, dni, lu, phoneNumber, email }) => (
		<tr>
			<td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
				{`${name} ${surname}`}
			</td>
			<td className="whitespace-nowrap px-4 py-2 text-gray-700">{dni}</td>
			<td className="whitespace-nowrap px-4 py-2 text-gray-700">{lu}</td>
			<td className="whitespace-nowrap px-4 py-2 text-gray-700">{email}</td>
			<td className="whitespace-nowrap px-4 py-2 text-gray-700">{phoneNumber}</td>
			<td className="whitespace-nowrap px-1 py-2">
				<a
					href="#"
					className="inline-block rounded bg-sky-950 px-4 py-2 text-xs font-medium text-white hover:bg-sky-950"
					onClick={() => handleEdit(dni)}
				>
					Editar
				</a>
			</td>
			<td className="whitespace-nowrap px-1 py-2">
				<a
					href="#"
					className="inline-block rounded border-[1px] border-red-700 text-red-800 bg-white px-4 py-2 text-xs font-medium hover:bg-red-700 hover:text-white"
					onClick={() => handleDelete(dni)}
				>
					Eliminar
				</a>
			</td>
		</tr>
	)

	return (

		<div className="overflow-x-auto">
			<table className="min-w-[90%] mx-auto divide-y-2 divide-gray-200 bg-white text-sm">
				<thead className="ltr:text-left rtl:text-right">
					<tr>
						<th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
							Nombre y apellido
						</th>
						<th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
							DNI
						</th>
						<th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
							LU
						</th>
						<th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
							Email
						</th>
						<th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
							Tel
						</th>
						<th className="px-4 py-2"></th>
					</tr>
				</thead>

				<tbody className="divide-y divide-gray-200">

					{
						data?.map(user => (<ItemRow key={user.dni} {...user} />))
					}

				</tbody>
			</table>
		</div>
	)
}
