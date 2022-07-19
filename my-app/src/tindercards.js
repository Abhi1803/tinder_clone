import React,{useState,useEffect}from "react";
import "./tindercards.css"
import axios from './axios'
import Tindercard from "react-tinder-card"
import { SwipeableDrawer } from "@mui/material";
function Tindercards()
{
    const[people,setPeople]=useState([]);
    useEffect(()=>{
      async function fetchData()
      {
        const req=await axios.get("http://localhost:3001/tinder/cards");

        setPeople(req.data)
      }

      fetchData();
    },[])


    console.log(people);
    const swiped=(direction, nameToDelete) => {
      console.log("removing: " + nameToDelete);
      };
      const outOfFrame = (name) => {
      console.log(name+" left the screen!");
      };
  return (
    <div className="tindercards">
        <div className="Tindercards_container">
        {people.map((t)=>(
           <Tindercard 
           className="swipe"
           key={t.name}
           preventSwipe={["up","down"]}
           onSwipe={(dir)=>swiped(dir,t.name)}
           onCardLeftScreen={()=>outOfFrame(t.name)}
           >
            <div
            style={{backgroundImage:`url(${t.ingUrl})`}}
            className="card"
            >
            <h3>{t.name}</h3>
            </div>
           </Tindercard>
        ))}
        </div>
    </div>
  );
}

export default Tindercards;