import { useContext, useEffect, useRef } from "react";
import Button from "../ui/Button";
import { Input } from "../ui/Input";
import { UserContext } from "../../context/userContext";

export default function JournalForm({
  formState,
  dispatchForm,
  onSubmit,
  data,
  onDelete,
}) {
  const { isValid, isFormReadyToSubmit, values } = formState; //Деструктурирую
  const titleRef = useRef();
  const dateRef = useRef();
  const textRef = useRef();

  const { userId } = useContext(UserContext);

  useEffect(() => {
    dispatchForm({
      type: "SET_VALUE",
      payload: { userId: userId },
    });
  }, [userId]);

  const focusError = (isValid) => {
    switch (true) {
      case !isValid.title:
        titleRef.current.focus();
        break;
      case !isValid.date:
        dateRef.current.focus();
        break;
      case !isValid.text:
        textRef.current.focus();
        break;
    }
  };

  useEffect(() => {
    if (!data) {
      dispatchForm({ type: "CLEAR" });
      dispatchForm({
        type: "SET_VALUE",
        payload: { userId: userId },
      });
    } else {
      dispatchForm({
        type: "SET_VALUE",
        payload: { ...data },
      });
    }
  }, [data, userId]);

  useEffect(() => {
    let TimerID;
    if (!isValid.date || !isValid.text || !isValid.title) {
      focusError(isValid);
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
      dispatchForm({
        type: "SET_VALUE",
        payload: { userId: userId },
      });
    }
  }, [isFormReadyToSubmit, values, onSubmit, userId]);

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

  const deleteJournalItem = () => {
    onDelete(data.id);
    dispatchForm({ type: "CLEAR" });
    dispatchForm({
      type: "SET_VALUE",
      payload: { userId: userId },
    });
  };

  return (
    <form className="" onSubmit={addJournalItem}>
      <div className="flex flex-col gap-[30px] mb-[30px]">
        <div
          className={`flex gap-3 border-b-[1px] pb-[15px]  ${
            !isValid.title
              ? "border-red-600 border-opacity-60"
              : "border-white border-opacity-10"
          }`}
        >
          <Input
            type="title"
            onChange={onChange}
            value={values.title}
            ref={titleRef}
            name="title"
            placeholder="Заголовок"
            appearance="long"
          />

          {data?.id ? (
            <img
              id="delete"
              src="\delete.svg"
              alt=""
              className="inputForm align-middle hover:opacity-65"
              onClick={deleteJournalItem}
            />
          ) : (
            ""
          )}
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

            <Input
              type="date"
              value={
                values.date
                  ? new Date(values.date).toISOString().slice(0, 10)
                  : ""
              }
              onChange={onChange}
              ref={dateRef}
              id="date"
              name="date"
              appearance="short"
            />
          </div>
          <div className="flex w-[222px] h-[48px] py-[15px] border-b-[1px] border-white border-opacity-10 pb-[15px] justify-between">
            <div className="flex w-[70px] justify-between">
              <img src="\metki.svg" alt="" className="h-[18px]" />
              <h5 className="text-white text-opacity-60 text-[14px] h-[18px] leading-[18px]">
                Метки
              </h5>
            </div>
            <Input
              placeholder="Метка"
              type="text"
              value={values.tag}
              onChange={onChange}
              name="tag"
              appearance="short"
            />
          </div>
        </div>
        <textarea
          placeholder="Текст вашей заметки"
          value={values.text}
          onChange={onChange}
          ref={textRef}
          name="text"
          id=""
          className={`bg-[#181818] text-white outline-none font-Inter placeholder-white placeholder-opacity-60 border-y-[1px] p-[15px] placeholder-white placeholder-opacity-60 w-full h-[420px] resize-none ${
            !isValid.text
              ? "border-red-600 border-opacity-60"
              : "border-white border-opacity-10"
          }`}
        ></textarea>
      </div>

      <Button className="">Сохранить</Button>
    </form>
  );
}
