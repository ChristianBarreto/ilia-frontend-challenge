export default function Input({
  value,
  setValue,
  label,
  name = "input",
  id = "input1",
  placeholder = "Type a text..."
}: {
  label?: string,
  name: string,
  id?: string,
  value: string,
  setValue: (value: string) => void,
  placeholder?: string,
}) {
  return (
    <div className="sm:col-span-3">
      <label className="block text-sm/6 font-medium text-gray-900">{label}</label>
      <div className="mt-2">
        <input
          type="text"
          name={name}
          id={id}
          placeholder={placeholder}
          className="p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-0 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm/6"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </div>
  )
}