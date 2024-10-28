import { InputHTMLAttributes } from "react";

interface IProps extends InputHTMLAttributes<HTMLSpanElement> {
    color: string;
}

const CircleColor = ({ color,...rest }: IProps) => {
  return <span className={`block w-6 h-6 rounded-full cursor-pointer`} style={{backgroundColor:color}} {...rest} />;
};

export default CircleColor;