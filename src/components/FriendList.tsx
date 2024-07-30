import { FC } from "react";
import { Friends } from "../lib/friendlist";
import Button from "../UI/Button";

const FriendList: FC<{ friends: Friends[] }> = (props) => {
  return (
    <section className="flex flex-col gap-3 items-center justify-center h-screen">
      <ul className="flex flex-col gap-3 bg-stone-200 w-full px-2 py-2 rounded">
        {props.friends.map((friend) => {
          const formattedBalance = new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            maximumFractionDigits: 0,
          }).format(Math.abs(friend.balance));
          return (
            <li
              key={friend.id}
              className="flex gap-5 items-center px-2 py-2 hover:bg-stone-300 rounded"
            >
              <img
                src={friend.image}
                alt={friend.name}
                className="w-12 h-12 rounded-full"
              />
              <div className="flex items-center justify-between w-full">
                <div>
                  <h2>{friend.name}</h2>
                  {friend.balance > 0 && (
                    <p className="text-red-500">
                      Anda berhutang {formattedBalance} ke {friend.name}
                    </p>
                  )}
                  {friend.balance < 0 && (
                    <p className="text-green-500">
                      {friend.name} berhutang {formattedBalance}
                    </p>
                  )}
                  {friend.balance === 0 && (
                    <p className="text-gray-500">Tidak ada hutang piutang</p>
                  )}
                </div>
                <Button>Pilih</Button>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="flex justify-end w-full">
        <Button>Tambah Teman</Button>
      </div>
    </section>
  );
};

export default FriendList;