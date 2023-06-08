import React from "react";
import { useSelector } from "react-redux";
import FavoriteWine from "../component/FavoriteWine";
import emptyfevImage1 from "../assest/empty1.gif"


const Favorite = () => {

    const FavWine = useSelector((state) => state.product.favItem);

    return (
    <>
    {
        <div className="p-2 md:p-4">
            <h2 className="text-lg md:text-2xl font-bold text-slate-600">Your Favorite Wine</h2>
        
            {FavWine[0] ?
            <div className="my-4 flex gap-3">
                {/* display fev item */}
                <div className="w-full max-w-3xl ">
                {FavWine.map((el) => {
                    return (
                        <FavoriteWine
                            key={el._id}
                            id={el._id}
                            name={el.name}
                            image={el.image}
                            category={el.category}
                            qty={el.qty}
                            total={el.total}
                            price={el.price}
                        />
                    );
                })}
                </div>
            </div>
            : 
            <>
                <div className="flex w-full justify-center items-center flex-col">
                    <img src={emptyfevImage1} className="w-full max-w-sm"/>
                    <p className="text-slate-500 text-3xl font-bold">You don't have any favorites yet</p>
                </div>
            </>
            }
        </div>
    }
    </>   
  )
}

export default Favorite;
