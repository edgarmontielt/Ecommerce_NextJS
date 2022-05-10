import React from "react";

export default function InputForm({ type, name, placeholder }) {
    return (
        <div className=" border-b-[1px] border-slate-400 mb-10">
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                className=" outline-none w-full px-2 py-2 bg-transparent text-sm text-gray-600 font-medium"
            />
        </div>
    );
}
