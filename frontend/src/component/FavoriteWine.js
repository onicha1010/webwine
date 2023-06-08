import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { deleteFavItem } from "../redux/productSlide";

const FavoriteWine = ({ id, name, image, category, price }) => {
const dispatch = useDispatch()

    return (
    <div className="bg-slate-200 p-2 flex gap-4 rounded border border-slate-300">
        <div className="p-3 bg-white rounded overflow-hidden">
            <img src={image} className="h-full w-full object-cover " />
        </div>
        <div className="flex flex-col gap-1 w-full">
            <div className="flex justify-between">
                <h3 className="font-semibold text-slate-600 capitalize text-lg md:text-xl">{name}</h3>
                <div className=" cursor-pointer text-slate-700 hover:text-red-500 " onClick={()=>dispatch(deleteFavItem(id))}>
                    <AiFillDelete />
                </div>
            </div>
            <p className=" text-slate-500  font-medium ">{category}</p>
            <p className=" font-bold text-base">
                <span className="text-red-500 ">$</span>
                <span>{price}</span>
            </p>        
        </div>
    </div>
  );
};

export default FavoriteWine;