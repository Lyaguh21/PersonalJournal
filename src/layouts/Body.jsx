import { UserContext } from "../context/userContext";
import { useContext } from "react";
import JournalForm from "../components/business/JournalForm";

function mapItems(items) {
  if (!items) return [];
  return items.map((i) => ({ ...i, date: new Date(i.date) }));
}

export default function Body({ items, setItems }) {
  const { userId } = useContext(UserContext);

  const addItem = (item) => {
    setItems([
      ...mapItems(items),
      {
        ...item,
        userId: userId,
        date: new Date(item.date),
        id: items.length > 0 ? Math.max(...items.map((i) => i.id)) + 1 : 1,
      },
    ]);
  };
  return (
    <div className="p-[50px] basis-4/6">
      <JournalForm onSubmit={addItem} />
    </div>
  );
}
