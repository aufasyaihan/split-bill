import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Button: FC<Props> = ({ children }) => {
  return (
    <button
      className="bg-zinc-300 px-5 py-2 rounded hover:bg-zinc-400"
    >
      {children}
    </button>
  );
};

export default Button;
