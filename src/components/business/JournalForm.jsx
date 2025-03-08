import Button from "../ui/Button";
export default function JournalForm({ onSubmit }) {
  const addJournalItem = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    onSubmit(formProps);
  };

  return (
    <>
      <form className="" onSubmit={addJournalItem}>
        <div className="flex flex-col gap-5">
          <input type="title" name="title" />
          <input type="date" name="date" />
          <input type="text" name="tag" />
          <textarea name="text" id="" cols="30" rows="10"></textarea>
        </div>

        <Button className="">Сохранить</Button>
      </form>
    </>
  );
}
