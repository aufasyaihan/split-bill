import { useState } from "react";
import FormSplitBill from "./components/FormSplitBill";
import FriendList from "./components/FriendList";
import initialFriends from "./lib/friendlist";

function App() {
  const [userId, setUserId] = useState<number | null>(null);
  const handleFormVisible = (id: number) => {
    setUserId((prev) => (prev === id ? null : id));
  };
  console.log(userId);

  return (
    <>
      <section className="min-h-[66vh] grid grid-cols-2 gap-16 items-start">
        <FriendList
          friends={initialFriends}
          onFormVisibleToggle={handleFormVisible}
        />
        {userId && <FormSplitBill currUser={userId} />}
      </section>
    </>
  );
}

export default App;
