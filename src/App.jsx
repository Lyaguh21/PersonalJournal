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
      { text: item.text, title: item.title, date: new Date(item.date) },
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
