import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type ButtonProps = {
    text: string;
} & DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>;

const Button = ({ text, ...props }: ButtonProps) => {
    return (
        <button
            className="rounded-full px-4 py-2 bg-[#F2F2F2] z-20 hover:bg-[#F2F2F2]/90 cursor-pointer"
            {...props}>
            <p className="text-[#333333] text-[1.1rem]">{text}</p>
        </button>
    );
};

export default Button;
