import { UserContext } from "../context/userContext";
import { useContext } from "react";
import JournalForm from "../components/business/JournalForm";

function mapItems(items) {
  if (!items) return [];
  return items.map((i) => ({ ...i, date: new Date(i.date) }));
}

export default function Body({
  items,
  setItems,
  data,
  dispatchForm,
  formState,
}) {
  const { userId } = useContext(UserContext);

  //создание и обновление элемента

  const addItem = (item) => {
    if (!item.id) {
      setItems([
        ...mapItems(items),
        {
          ...item,
          userId: userId,
          date: new Date(item.date),
          id: items.length > 0 ? Math.max(...items.map((i) => i.id)) + 1 : 1,
        },
      ]);
    } else {
      setItems([
        ...mapItems(items).map((i) => {
          if (i.id === item.id) {
            return {
              ...item,
            };
          } else {
            return i;
          }
        }),
      ]);
    }
  };

  const deleteItem = (id) => {
    setItems([...items.filter((i) => i.id !== id)]);
  };

  return (
    <div className="p-[50px] basis-4/6">
      <JournalForm
        formState={formState}
        dispatchForm={dispatchForm}
        onSubmit={addItem}
        onDelete={deleteItem}
        data={data}
      />
    </div>
  );
}
