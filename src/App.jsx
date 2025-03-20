import LeftPanel from "./layouts/LeftPanel";
import Body from "./layouts/Body";
import { UserContextProvider } from "./context/userContext";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  const [items, setItems] = useLocalStorage("data");
  return (
    <UserContextProvider>
      <section className="font-Inter flex">
        <LeftPanel items={items} setItems={setItems} />
        <Body items={items} setItems={setItems} />
      </section>
    </UserContextProvider>
  );
}

export default App;
