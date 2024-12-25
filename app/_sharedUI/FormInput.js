export default function FormInput({ label, type, defaultValue, disabled }) {
	return (
		<>
			<label>{label}</label>
			<input
				type={type}
				disabled={disabled}
				defaultValue={defaultValue}
				className='px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400'
			/>
		</>
	);
}
