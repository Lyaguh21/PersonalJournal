import { useEffect, useReducer } from "react";
import Button from "../ui/Button";
import { formReducer, INITIAL } from "./JournalForm.state";

export default function JournalForm({ onSubmit }) {
  const [formState, dispatchForm] = useReducer(formReducer, INITIAL);
  const { isValid, isFormReadyToSubmit, values } = formState; //Деструктурирую
  useEffect(() => {
    let TimerID;
    if (!isValid.date || !isValid.text || !isValid.title) {
      TimerID = setTimeout(() => {
        dispatchForm({ type: "RESET_VALID" });
      }, 2000);
    }
    return () => {
      clearTimeout(TimerID);
    };
  }, [isValid]);

  useEffect(() => {
    if (isFormReadyToSubmit) {
      onSubmit(values);
      dispatchForm({ type: "CLEAR" });
    }
  }, [isFormReadyToSubmit]);

  const addJournalItem = (e) => {
    e.preventDefault();
    dispatchForm({ type: "SUBMIT" });
  };

  const onChange = (e) => {
    dispatchForm({
      type: "SET_VALUE",
      payload: { [e.target.name]: e.target.value },
    });
  };

  return (
    <>
      <form className="" onSubmit={addJournalItem}>
        <div className="flex flex-col gap-[30px] mb-[30px]">
          <div
            className={`flex gap-3 border-white border-b-[1px] pb-[15px] border-opacity-10 ${
              !isValid.title
                ? "border-red-600 border-opacity-60"
                : "border-white border-opacity-10"
            }`}
          >
            <input
              type="title"
              onChange={onChange}
              value={values.title}
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
              className={`flex w-[222px] border-b-[1px]  pb-[15px] justify-between ${
                !isValid.date
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
                value={values.date}
                onChange={onChange}
                id="date"
                name="date"
                className="inputForm h-[18px] w-[105px]"
              />
            </div>
            <div className="flex w-[222px] h-[48px] py-[15px] border-b-[1px] border-white border-opacity-10 pb-[15px] justify-between">
              <div className="flex w-[70px] justify-between">
                <img src="\metki.svg" alt="" className="h-[18px]" />
                <h5 className="text-white text-opacity-60 text-[14px] h-[18px] leading-[18px]">
                  Метки
                </h5>
              </div>

              <input
                placeholder="Метка"
                type="text"
                value={values.tag}
                onChange={onChange}
                name="tag"
                className="inputForm h-[18px] w-[105px] placeholder-white placeholder-opacity-60"
              />
            </div>
          </div>
          <textarea
            placeholder="Текст вашей заметки"
            value={values.text}
            onChange={onChange}
            name="text"
            id=""
            className={`inputForm  border-y-[1px] p-[15px] placeholder-white placeholder-opacity-60 w-full h-[420px] resize-none ${
              !isValid.text
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
