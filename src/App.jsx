import LeftPanel from "./layouts/LeftPanel";
import Body from "./layouts/Body";
import Header from "./components/business/Header";
import JournalAddButton from "./components/ui/JournalAddButton";
import JournalList from "./components/business/JournalList";
import JournalForm from "./components/business/JournalForm";

import { useLocalStorage } from "./hooks/useLocalStorage";
import { UserContextProvider } from "./context/userContext";

function mapItems(items) {
  if (!items) return [];
  return items.map((i) => ({ ...i, date: new Date(i.date) }));
}

function App() {
  const [items, setItems] = useLocalStorage("data");

  const addItem = (item) => {
    setItems([
      ...mapItems(items),
      {
        ...item,
        date: new Date(item.date),
        id: items.length > 0 ? Math.max(...items.map((i) => i.id)) + 1 : 1,
      },
    ]);
  };

  function clearList() {
    localStorage.clear();
    setItems([]);
  }
  return (
    <UserContextProvider>
      <section className="font-Inter flex">
        <LeftPanel>
          <Header clear={clearList} />
          <JournalAddButton />
          <JournalList items={mapItems(items)} />
        </LeftPanel>

        <Body>
          <JournalForm onSubmit={addItem} />
        </Body>
      </section>
    </UserContextProvider>
  );
}

export default App;
