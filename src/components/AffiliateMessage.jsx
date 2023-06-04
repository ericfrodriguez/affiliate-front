

export const AffiliateMessage = ({ success, user }) => {

	const styles = {
		success: 'bg-green-200 text-green-800 border-green-600',
		fail: 'bg-red-200 text-red-800 border-red-600'
	}

	return (
		<div
			className="w-full h-auto flex justify-center"
		>
			<div className={`w-11/12 min-h-[100px] max-w-[800px] border-2 rounded-lg flex items-center justify-center ${success && user.dni ? styles.success : styles.fail}`}>
				<p className={`font-bold text-2xl`}>
					{
						success && user.dni
						? `Usuario: DNI № ${user?.dni}`
						: 'Usuario no encontrado'
					}
				</p>
			</div>
		</div>
	)
}
