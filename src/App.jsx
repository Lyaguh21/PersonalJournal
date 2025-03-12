import LeftPanel from "./layouts/LeftPanel";
import Body from "./layouts/Body";
import Header from "./components/business/Header";
import JournalAddButton from "./components/ui/JournalAddButton";
import JournalList from "./components/business/JournalList";
import JournalForm from "./components/business/JournalForm";
import { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  // Доставание из LocalStorage информации и запись их в стейт
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("data"));
    if (data) {
      setItems(
        data.map((item) => ({
          ...item,
          date: new Date(item.date),
        }))
      );
    }
  }, []);

  // Запись новых элементов в localStorage
  useEffect(() => {
    if (items.length) {
      localStorage.setItem("data", JSON.stringify(items));
    }
  }, [items]);

  function addItem(item) {
    setItems((oldItems) => [
      ...oldItems,
      {
        text: item.text,
        title: item.title,
        date: new Date(item.date),
        id:
          oldItems.length > 0 ? Math.max(...oldItems.map((i) => i.id)) + 1 : 1,
      },
    ]);
  }
  return (
    <section className="font-Inter flex">
      <LeftPanel>
        <Header />
        <JournalAddButton />
        <JournalList items={items} />
      </LeftPanel>
      <Body>
        <JournalForm onSubmit={addItem} />
      </Body>
    </section>
  );
}

export default App;
