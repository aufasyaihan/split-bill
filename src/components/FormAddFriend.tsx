import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Button from "../UI/Button";

interface Input {
  name: string;
  image: string;
}

const FormAddFriend: FC = () => {
  const { register, handleSubmit } = useForm<Input>();
  const onSubmitForm: SubmitHandler<Input> = (data) => {
    console.log(data);
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
