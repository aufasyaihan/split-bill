import { ButtonHTMLAttributes, FC, ReactNode } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button: FC<Props> = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="bg-zinc-300 px-5 py-2 rounded hover:bg-zinc-400"
    >
      {children}
    </button>
  );
};

export default Button;
