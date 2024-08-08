import { useState } from "react";
import FormSplitBill from "./components/FormSplitBill";
import FriendList from "./components/FriendList";
import initialFriends from "./lib/friendlist";

function App() {
  const [formVisible, setFormVisible] = useState<number | null>(null);
  const handleFormVisible = (id: number) => {
    setFormVisible((prev) => (prev === id ? null : id));
  };
  return (
    <>
      <section className="min-h-[66vh] grid grid-cols-2 gap-16 items-start">
        <FriendList
          friends={initialFriends}
          onFormVisibleToggle={handleFormVisible}
        />
        {formVisible && <FormSplitBill />}
      </section>
    </>
  );
}

export default App;
