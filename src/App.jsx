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
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />
        <Body items={items} setItems={setItems} />
      </section>
    </UserContextProvider>
  );
}

export default App;
