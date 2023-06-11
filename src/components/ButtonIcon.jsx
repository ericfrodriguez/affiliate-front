import { Link } from "react-router-dom"

export const ButtonIcon = ({icon, to}) => {
	return (
		<>
			<Link
				className="inline-block rounded-full border border-indigo-600 p-3 text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
				to={to}
			>
				{
					icon
				}
			</Link>
		</>
	)
}
