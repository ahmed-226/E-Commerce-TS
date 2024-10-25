import { InputHTMLAttributes } from "react"

type IProps = InputHTMLAttributes<HTMLInputElement>

const Input = ({...rest}:IProps) => {
  return (
      <input className="p-2 border border-gray-300 rounded-md" {...rest}  />
  )
} 

export default Input