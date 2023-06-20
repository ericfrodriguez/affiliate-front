import { Link } from "react-router-dom"

export const ButtonIcon = ({icon, to, onClick}) => {
	return (
		<>
			<Link
				className="inline-block rounded-full border border-sky-950 p-3 text-sky-950 hover:bg-sky-950 hover:text-white focus:outline-none focus:ring active:bg-sky-950"
				to={to}
				onClick={onClick}
			>
				{
					icon
				}
			</Link>
		</>
	)
}
