import { useEffect, useState } from "react";
import Button from "../ui/Button";
const INITIAL = {
  title: true,
  date: true,
  text: true,
};
export default function JournalForm({ onSubmit }) {
  const [formValidation, setFormValidation] = useState(INITIAL);

  useEffect(() => {
    let TimerID;
    if (!formValidation.date || !formValidation.text || !formValidation.title) {
      TimerID = setTimeout(() => {
        setFormValidation(INITIAL);
      }, 2000);
    }
    return () => {
      clearTimeout(TimerID);
    };
  });

  const addJournalItem = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    let isFormValid = true;
    if (!formProps.title.trim().length) {
      setFormValidation((state) => ({ ...state, title: false }));
      isFormValid = false;
    } else setFormValidation((state) => ({ ...state, title: true }));
    if (!formProps.date) {
      setFormValidation((state) => ({ ...state, date: false }));
      isFormValid = false;
    } else setFormValidation((state) => ({ ...state, date: true }));
    if (!formProps.text.trim().length) {
      setFormValidation((state) => ({ ...state, text: false }));
      isFormValid = false;
    } else setFormValidation((state) => ({ ...state, text: true }));

    if (isFormValid) {
      onSubmit(formProps);
    }
  };

  return (
    <>
      <form className="" onSubmit={addJournalItem}>
        <div className="flex flex-col gap-[30px] mb-[30px]">
          <div
            className={`flex gap-3 border-white border-b-[1px] pb-[15px] border-opacity-10 ${
              !formValidation.title
                ? "border-red-600 border-opacity-60"
                : "border-white border-opacity-10"
            }`}
          >
            <input
              type="title"
              name="title"
              placeholder="Заголовок"
              className="inputForm text-[32px] font-semibold h-[40px] w-full placeholder-white placeholder-opacity-60"
            />

            <img
              id="delete"
              src="\delete.svg"
              alt=""
              className="inputForm align-middle "
            />
          </div>

          <div className="flex flex-col ">
            <div
              className={`flex w-[212px] border-b-[1px]  pb-[15px] justify-between ${
                !formValidation.date
                  ? "border-red-600 border-opacity-60"
                  : "border-white border-opacity-10"
              }`}
            >
              <div className="flex w-[60px] justify-between">
                <img src="\date.svg" alt="" />
                <h5 className="text-white text-opacity-60 text-[14px] leading-[18px]">
                  Дата
                </h5>
              </div>

              <input
                type="date"
                id="date"
                name="date"
                className="inputForm h-[18px] w-[88px]"
              />
            </div>
            <div className="flex w-[212px] h-[48px] py-[15px] border-b-[1px] border-white border-opacity-10 pb-[15px] justify-between">
              <div className="flex w-[70px] justify-between">
                <img src="\metki.svg" alt="" className="h-[18px]" />
                <h5 className="text-white text-opacity-60 text-[14px] h-[18px] leading-[18px]">
                  Метки
                </h5>
              </div>

              <input
                placeholder="Метка"
                type="text"
                name="tag"
                className="inputForm h-[18px] w-[88px] placeholder-white placeholder-opacity-60"
              />
            </div>
          </div>
          <textarea
            placeholder="Текст вашей заметки"
            name="text"
            id=""
            className={`inputForm  border-y-[1px] p-[15px] placeholder-white placeholder-opacity-60 w-full h-[420px] resize-none ${
              !formValidation.text
                ? "border-red-600 border-opacity-60"
                : "border-white border-opacity-10"
            }`}
          ></textarea>
        </div>

        <Button className="">Сохранить</Button>
      </form>
    </>
  );
}
