import React from "react";
import axios from "axios";
import { useState } from "react";
import { User } from "./User";
import "./UserList.css";
import avatars from "./avatars";

export const UserList = () => {
    const [Users, setUsers] = useState([]);
    axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => setUsers(response.data))
        .catch((error) => console.log(error));
    return (
        <div className="list">
            {Users.map((user, index) => (
                <User
                    key={index}
                    avatar={avatars[index]}
                    name={user.name}
                    userName={user.username}
                    phone={user.phone}
                    mail={user.email}
                    adress={user.address}
                    website={user.website}
                />
            ))}
        </div>
    );
};
