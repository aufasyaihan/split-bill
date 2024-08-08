import { FC } from "react";
import { useForm } from "react-hook-form";
import Button from "../UI/Button";
import { Friends } from "../lib/friendlist";

interface Input {
  totalAmount: number;
  yourAmount: number;
  user: number;
}

interface Props {
  friends: Friends[];
  currUser: number;
}

const FormSplitBill: FC<Props> = ({ currUser, friends }) => {
  const { register, handleSubmit, watch } = useForm<Input>({
    mode: "onChange",
  });
  const onSubmitForm = (data: Input) => {
    console.log(data);
  };

  const totalAmount = watch("totalAmount", 0);
  const yourAmount = watch("yourAmount", 0);
  const otherAmount = (totalAmount || 0) - (yourAmount || 0);

  const data = friends!.find((friend) => friend.id === currUser);
  return (
    <section className="flex gap-3 items-center justify-center h-72 my-56">
      <form
        onSubmit={handleSubmit(onSubmitForm)}
        className="flex flex-col bg-stone-200 w-full px-2 py-2 rounded"
      >
        <h3 className="text-3xl font-semibold">
          Patungan bareng si {data?.name}
        </h3>
        <div className="flex flex-col group">
          <label htmlFor="totalAmount">Total Tagihan</label>
          <input
            type="number"
            {...register("totalAmount", { valueAsNumber: true })}
            className="px-2 rounded-md bg-stone-100 border-stone-400 border-2 focus:outline-none focus:ring focus:ring-stone-300"
          />
        </div>
        <div className="flex flex-col group">
          <label htmlFor="yourAmount">Tagihan Anda</label>
          <input
            type="number"
            {...register("yourAmount", { valueAsNumber: true })}
            className="px-2 rounded-md bg-stone-100 border-stone-400 border-2 focus:outline-none focus:ring focus:ring-stone-300"
          />
        </div>
        <div className="flex flex-col group">
          <label htmlFor="yourAmount">Tagihan {data?.name}</label>
          <input
            type="text"
            value={otherAmount}
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
            <option value={1}>Kamu</option>
            <option value={data?.id}>{data?.name}</option>
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
