
export const ButtonTextIcon = ({ title, icon, onClick}) => {
	return (
		<a
			className="inline-flex items-center gap-2 rounded border border-indigo-600 bg-indigo-600 px-8 py-3 text-white hover:bg-transparent ease-in-out duration-200 hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
			onClick={onClick}
		>
			<span className="text-sm font-medium"> {title} </span>

			{icon}
		</a>
	)
}
