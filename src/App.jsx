import LeftPanel from "./layouts/LeftPanel";
import Body from "./layouts/Body";
import { UserContextProvider } from "./context/userContext";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { useState } from "react";
import { formReducer, INITIAL } from "./components/business/JournalForm.state";
import { useReducer } from "react";

function App() {
  const [items, setItems] = useLocalStorage("data");
  const [selectedItem, setSelectedItem] = useState(null);
  const [formState, dispatchForm] = useReducer(formReducer, INITIAL);

  return (
    <UserContextProvider>
      <section className="font-Inter flex">
        <LeftPanel
          items={items}
          setItems={setItems}
          setSelectedItem={setSelectedItem}
          dispatchForm={dispatchForm}
        />
        <Body
          formState={formState}
          dispatchForm={dispatchForm}
          items={items}
          setItems={setItems}
          data={selectedItem}
        />
      </section>
    </UserContextProvider>
  );
}

export default App;
