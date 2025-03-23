import LeftPanel from "./layouts/LeftPanel";
import Body from "./layouts/Body";
import { UserContextProvider } from "./context/userContext";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { useState } from "react";

function App() {
  const [items, setItems] = useLocalStorage("data");
  const [selectedItem, setSelectedItem] = useState({});
  return (
    <UserContextProvider>
      <section className="font-Inter flex">
        <LeftPanel
          items={items}
          setItems={setItems}
          setSelectedItem={setSelectedItem}
        />
        <Body items={items} setItems={setItems} data={selectedItem} />
      </section>
    </UserContextProvider>
  );
}

export default App;
