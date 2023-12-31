import React, { InputHTMLAttributes, forwardRef } from "react";
import classNames from "classnames";

export const Input = forwardRef<
    HTMLInputElement,
    InputHTMLAttributes<HTMLInputElement>
>(({ className, ...rest }, ref) => {
    return (
        <input
            {...rest}
            ref={ref}
            className={classNames(
                "w-full px-5 py-2 bg-transparent border-2 outline-none border-zinc-600 rounded-xl placeholder:text-zinc-500 focus:border-white",
                className
            )}
        />
    );
});
