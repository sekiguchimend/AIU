import { useState, useEffect } from "react";
import { db } from "../firebase/Firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { time } from "console";
import { Button } from "@mui/material";
export default function SendButton (){
    const [input, setinput] = useState("")
   const handleClick = async () => {
    try{
        const add = addDoc(collection(db, "message"),{
            Timestamp: "createat",
            data: "input"
        })
       
    }catch{
        console.log("error");
    }
   }
    return(
    <>
    <Button >投稿</Button>
    </>
   )
}