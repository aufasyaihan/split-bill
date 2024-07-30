import FriendList from "./components/FriendList";
import initialFriends from "./lib/friendlist";

function App() {
  return (
    <>
      <section className="grid grid-cols-2 h-screen gap-5 mx-40">
        <FriendList friends={initialFriends} />
        <div className="bg-stone-200">halooooo</div>
      </section>
    </>
  );
}

export default App;
