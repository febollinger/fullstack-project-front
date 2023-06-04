import { InputHTMLAttributes, forwardRef, ForwardedRef } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    label?: string;
    className ?: string;
} 

export const InputForm = forwardRef(({label, className,...rest}: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
    return (
        <>
            <label className={className}>{label}</label>
            <input ref={ref}  {...rest} />

        </>
    )
})
