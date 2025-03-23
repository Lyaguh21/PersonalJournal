import CardButton from "./CardButton";

export default function JournalAddButton({ clearForm }) {
  return (
    <CardButton className="py-[10px] h-auto justify-center" onClick={clearForm}>
      <div className="flex gap-2">
        <img src="/add.svg" alt="" />
        <h2>Новое воспоминание</h2>
      </div>
    </CardButton>
  );
}
