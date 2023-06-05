

export const AffiliateMessage = ({ success, user }) => {

	const styles = {
		success: 'bg-green-200 text-green-800 border-green-600',
		fail: 'bg-red-200 text-red-800 border-red-600'
	}

	const SucessCard = ({dni, name, surname}) => (
		<>
			<h3 className='font-bold text-2xl text-center mb-2'>Usuario</h3>
			<p className='font-bold text-lg'>DNI: {dni}</p>
			<p className='font-bold text-lg'>Nombre: {name}</p>
			<p className='font-bold text-lg'>Apellido: {surname}</p>
		</>
	);

	return (
		<div
			className="w-full h-auto flex justify-center"
		>
			<div className={`w-11/12 min-h-[100px] max-w-[800px] border-2 rounded-lg flex flex-col py-2 gap-1 items-center justify-center ${success && user.dni ? styles.success : styles.fail}`}>

					{
						success && user
						? <SucessCard {...user}/>
						: <h3 className='font-bold text-2xl text-center'>Usuario no encontrado</h3>
					}
			</div>
		</div>
	)
}
