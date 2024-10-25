import { ButtonHTMLAttributes, ReactNode } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

const Button = ({ children, className, ...rest }: IProps) => {
  return (
    <button className={`${className} w-full rounded-md text-white p-2`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
