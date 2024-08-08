import { FC } from "react";
import { useForm } from "react-hook-form";
import Button from "../UI/Button";

interface Input {
  totalAmount: number;
  yourAmount: number;
  user: string;
}

const FormSplitBill: FC = () => {
  const { register, handleSubmit } = useForm<Input>();
  const onSubmitForm = (data: Input) => {
    console.log(data);
  };
  return (
    <section className="flex gap-3 items-center justify-center h-72 my-56">
      <form
        onSubmit={handleSubmit(onSubmitForm)}
        className="flex flex-col bg-stone-200 w-full px-2 py-2 rounded"
      >
        <h3 className="text-3xl font-semibold">Patungan bareng si X</h3>
        <div className="flex flex-col group">
          <label htmlFor="totalAmount">Total Tagihan</label>
          <input
            type="text"
            {...register("totalAmount")}
            className="px-2 rounded-md bg-stone-100 border-stone-400 border-2 focus:outline-none focus:ring focus:ring-stone-300"
          />
        </div>
        <div className="flex flex-col group">
          <label htmlFor="yourAmount">Tagihan Anda</label>
          <input
            type="text"
            {...register("yourAmount")}
            className="px-2 rounded-md bg-stone-100 border-stone-400 border-2 focus:outline-none focus:ring focus:ring-stone-300"
          />
        </div>
        <div className="flex flex-col group">
          <label htmlFor="yourAmount">Tagihan X</label>
          <input
            type="text"
            className="px-2 rounded-md bg-stone-300 border-stone-400 border-2 focus:outline-none focus:ring focus:ring-stone-300"
            disabled
          />
        </div>
        <div className="flex flex-col group">
          <label htmlFor="user">Pilih Teman</label>
          <select
            {...register("user")}
            className="px-2 rounded-md bg-stone-100 border-stone-400 border-2 focus:outline-none focus:ring focus:ring-stone-300"
          >
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
          </select>
        </div>
        <div className="flex justify-end">
          <Button>Hitung</Button>
        </div>
      </form>
    </section>
  );
};

export default FormSplitBill;
