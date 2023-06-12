import { Link } from "react-router-dom"

export const ButtonIcon = ({icon, to}) => {
	return (
		<>
			<Link
				className="inline-block rounded-full border border-blue-600 p-3 text-blue-600 hover:bg-blue-600 hover:text-white focus:outline-none focus:ring active:bg-blue-500"
				to={to}
			>
				{
					icon
				}
			</Link>
		</>
	)
}
