import React from "react";
import "./User.css";

export const User = ({
    avatar,
    name,
    userName,
    phone,
    mail,
    adress,
    website,
}) => {
    return (
        <div className="userCard">
            <div className="image">
                {" "}
                <img src={avatar} alt="" />
            </div>
            <div className="info">
                <h3>
                    {" "}
                    Full-Name : <span className="details">{name}</span>
                </h3>
                <h3>
                    {" "}
                    User-Name : <span className="details">{userName}</span>
                </h3>
                <h3>
                    {" "}
                    Phone Number : <span className="details">{phone}</span>
                </h3>
                <h3>
                    {" "}
                    Email : <span className="details">{mail}</span>
                </h3>
                <h3>
                    {" "}
                    Adress :{" "}
                    <span className="details">{`Suite N° : ${adress.suite}, ${adress.street} Street, ${adress.zipcode}, ${adress.city}`}</span>
                </h3>
                <h3>
                    {" "}
                    Website : <span className="details">{website}</span>
                </h3>
            </div>
        </div>
    );
};
