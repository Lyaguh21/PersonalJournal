export default function CardButton({ children, className, ...props }) {
  const cl =
    "text-white bg-opacity-5 bg-white p-5 rounded-[3px] w-full h-[98px] flex  hover:bg-opacity-10" +
    (className ? " " + className : "");
  return (
    <button {...props} className={cl}>
      {children}
    </button>
  );
}
