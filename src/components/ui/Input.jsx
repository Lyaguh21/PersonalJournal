import { forwardRef } from "react";

import cn from "classnames";

export const Input = forwardRef(function Input(
  { className, type, placeholder, appearance, ...props },
  ref
) {
  return (
    <input
      {...props}
      type={type}
      ref={ref}
      placeholder={placeholder}
      className={cn(
        className,
        "bg-[#181818] text-white outline-none font-Inter placeholder-white placeholder-opacity-60",
        {
          [" text-[32px] font-semibold h-[40px] w-full"]: appearance === "long",
          [" h-[18px] w-[105px] "]: appearance === "short",
        }
      )}
    />
  );
});
