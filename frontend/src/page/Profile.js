import React from "react";
import Favorite from "./Favorite";

const Profile = () => {
    return (
    <div>
        <div className="p-2 md:p-4">   
            <h2 className="text-lg md:text-2xl font-bold text-slate-600">Your Profile</h2>
        </div>
        <Favorite/>
    </div>
    
    )
}

export default Profile