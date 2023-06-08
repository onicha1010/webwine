import React from "react";
import { IoIosWine } from "react-icons/io";

const FilterProduct = ({category,onClick,isActive}) => {
    return (
        <div onClick={onClick}>
            <div className={`text-3xl p-7 rounded-full cursor-pointer ${isActive ? "bg-red-600 text-white" : "bg-yellow-500"}`}>
                <IoIosWine />
            </div>
            <p className="text-center font-medium my-1 capitalize">{category}</p>
        </div>
    );
};

export default FilterProduct;