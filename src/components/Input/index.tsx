import { IEventField } from "@/data/field";
import React from "react";

const Input = (props: IEventField) => {
    const { id, title, validationMessage } = props;
    return (
        <div className="flex flex-col gap-4">
            <label htmlFor={id}>
                {title}{" "}
                <span className="text-slate-400">({validationMessage})</span>
            </label>
            <input
                className="w-full h-14 rounded-md border border-solid border-slate-200 bg-slate-50 p-8"
                type="text"
                name=""
                id={id}
            />
        </div>
    );
};

export default Input;
