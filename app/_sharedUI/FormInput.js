export default function FormInput({
  label,
  type,
  defaultValue,
  disabled,
  name,
}) {
  return (
    <>
      <label>{label}</label>
      <input
        type={type}
        disabled={disabled}
        name={name}
        defaultValue={defaultValue}
        className="w-full rounded-sm bg-primary-200 px-5 py-3 text-primary-800 shadow-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
      />
    </>
  );
}
