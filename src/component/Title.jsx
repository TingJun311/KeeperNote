import React, { useEffect, useState } from "react";
import DateTime from "./DateTime";
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";

const LOCAL_STORAGE_KEY_NAME = "userName.notes";

export default function Title() {
    const [isName, setIsName] = useState({
        userName: "",
    });
    const [gotName, setGotName] = useState(false);

    useEffect(() => {
        const setData = async () => {
            await localStorage.setItem(
                LOCAL_STORAGE_KEY_NAME,
                JSON.stringify(isName)
            );
        };
        setData();
    }, [isName]);
    
    useEffect(() => {
        const fetchNotes = async () => {
            const userName = await JSON.parse(
                localStorage.getItem(LOCAL_STORAGE_KEY_NAME)
            );
            setIsName(userName);
            setGotName(() => {
                return userName.userName ? false : true;
            });
        };
        fetchNotes();
    }, []);

    const editName = (e) => {
        const { value, name } = e.target;

        setIsName(() => {
            return {
                [name]: value,
            };
        });
    };

    const setEditName = () => {
        setGotName((prevCondition) => {
            return !prevCondition;
        });
    };
    return (
        <>
            <DateTime />
            <h1 className="title ">
                Hi, &nbsp;
                {gotName ? (
                    <input
                        className="nameInput"
                        name="userName"
                        onChange={editName}
                        type="text"
                        placeholder="Enter your name"
                        value={isName.userName}
                    ></input>
                ) : (
                    isName.userName
                )}
                <button className="editBtn">
                    {gotName ? (
                        <DoneIcon onClick={setEditName} />
                    ) : (
                        <EditIcon onClick={setEditName} />
                    )}
                </button>
            </h1>
        </>
    );
}
