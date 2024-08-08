import FormSplitBill from "./components/FormSplitBill";
import FriendList from "./components/FriendList";
import initialFriends from "./lib/friendlist";

function App() {
  return (
    <>
      <section className="min-h-[66vh] grid grid-cols-2 gap-16 items-start">
        <FriendList friends={initialFriends} />
        <FormSplitBill />
      </section>
    </>
  );
}

export default App;
