import { useState } from "react";
import FormSplitBill from "./components/FormSplitBill";
import FriendList from "./components/FriendList";
import initialFriends, { Friends } from "./lib/friendlist";
import { Input } from "./components/FormAddFriend";

function App() {
  const [userId, setUserId] = useState<number | null>(null);
  const [friends, setFriends] = useState<Friends[]>(initialFriends);
  const handleFormVisible = (id: number) => {
    setUserId((prev) => (prev === id ? null : id));
  };
  const handleAddFriend = (newFriend: Input) => {
    const friend: Friends = {
      id: +new Date() + Math.random(),
      name: newFriend.name,
      image: "https://i.pravatar.cc/48?u=" + Math.random(),
      balance: 0,
    };
    setFriends((prevFriend) => [...prevFriend, friend]);
  };
  console.log(userId);

  return (
    <>
      <section className="min-h-[66vh] grid grid-cols-2 gap-16 items-start">
        <FriendList
          friends={friends}
          onAddFriend={handleAddFriend}
          onFormVisibleToggle={handleFormVisible}
        />
        {userId && <FormSplitBill currUser={userId} friends={friends} />}
      </section>
    </>
  );
}

export default App;
