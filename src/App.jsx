import LeftPanel from "./layouts/LeftPanel";
import Body from "./layouts/Body";
import Header from "./components/business/Header";
import JournalAddButton from "./components/ui/JournalAddButton";
import JournalList from "./components/business/JournalList";
import JournalForm from "./components/business/JournalForm";
import { UserContextProvider } from "./context/userContext";
import { useLocalStorage } from "./hooks/useLocalStorage";

function mapItems(items) {
  if (!items) return [];
  return items.map((i) => ({ ...i, date: new Date(i.date) }));
}
function App() {
  const [items, setItems] = useLocalStorage("data");

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
        <Body />
      </section>
    </UserContextProvider>
  );
}

export default App;
