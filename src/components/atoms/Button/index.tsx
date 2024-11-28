import { ReactNode } from "react";

export default function Button({
  id,
  children,
  handleClick,
  disabled = false,
}: {
  id?: string,
  children: ReactNode,
  handleClick?: () => void,
  disabled?: boolean,
}) {
  return (
    <button
      className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-gray-400"
      onClick={handleClick}
      disabled={disabled}
      data-cy={id}
    >
      {children}
    </button>
  )
}