import LeftPanel from "./layouts/LeftPanel";
import Body from "./layouts/Body";
import Header from "./components/business/Header";
import JournalAddButton from "./components/ui/JournalAddButton";
import JournalList from "./components/business/JournalList";
import JournalForm from "./components/business/JournalForm";
import { useState } from "react";
import { Information } from "../Data";

function App() {
  const [items, setItems] = useState(Information);

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
