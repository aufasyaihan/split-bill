import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Button from "../UI/Button";

export interface Input {
  id: number;
  name: string;
  image: string;
  balance: number;
}

interface Props {
  onAddFriend: (newFriend: Input) => void;
}

const FormAddFriend: FC<Props> = ({ onAddFriend }) => {
  const { register, handleSubmit } = useForm<Input>();
  const onSubmitForm: SubmitHandler<Input> = (data) => {
    console.log(data);
    onAddFriend(data);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmitForm)}
      className="w-full bg-stone-200 px-4 py-2"
    >
      <div className="flex flex-col group">
        <label htmlFor="name">Name</label>
        <input className="px-2 rounded-md bg-stone-100 border-stone-400 border-2 focus:outline-none focus:ring focus:ring-stone-300" type="text" {...register("name")} />
      </div>
      <div className="flex flex-col group">
        <label htmlFor="image">Image</label>
        <input type="file" {...register("image")} />
      </div>
      <div className="flex justify-end">
        <Button>Tambah</Button>
      </div>
    </form>
  );
};

export default FormAddFriend;
