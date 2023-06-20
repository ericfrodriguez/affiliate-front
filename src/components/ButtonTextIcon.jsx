
export const ButtonTextIcon = ({ title, icon, onClick}) => {
	return (
		<a
			className="inline-flex items-center gap-2 rounded border border-sky-950 bg-sky-950 px-8 py-3 text-white hover:bg-transparent ease-in-out duration-200 hover:text-sky-950 focus:outline-none focus:ring active:text-sky-900"
			onClick={onClick}
		>
			<span className="text-sm font-medium"> {title} </span>

			{icon}
		</a>
	)
}
