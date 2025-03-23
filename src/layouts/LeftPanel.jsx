import Header from "../components/business/Header";
import JournalAddButton from "../components/ui/JournalAddButton";
import JournalList from "../components/business/JournalList";
import { UserContext } from "../context/userContext";
import { useContext } from "react";

function mapItems(items) {
  if (!items) return [];
  return items.map((i) => ({ ...i, date: new Date(i.date) }));
}
export default function LeftPanel({
  items,
  setItems,
  setSelectedItem,
  dispatchForm,
}) {
  const { userId } = useContext(UserContext);
  function clearList() {
    localStorage.clear();
    setItems([]);
    dispatchForm({ type: "CLEAR" });
    dispatchForm({
      type: "SET_VALUE",
      payload: { userId: userId },
    });
  }
  return (
    <div className="leftPanel basis-2/6 h-screen overflow-y-scroll px-5 py-[30px] flex-col flex gap-[30px] ">
      <Header clear={clearList} />
      <JournalAddButton clearForm={() => setSelectedItem(null)} />
      <JournalList items={mapItems(items)} setItem={setSelectedItem} />
    </div>
  );
}
