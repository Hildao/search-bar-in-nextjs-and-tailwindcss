export default function TextField({
  type = 'text',
  placeholder,
  value,
  onChange = () => {},
}) {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className=' border rounded border-gray-500 py-3 px-6 w-2/4 placeholder-blue-300 text-blue-300'
      />
    </>
  );
}
