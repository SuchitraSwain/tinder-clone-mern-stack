import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import axios from "./axios";

function TinderCards() {
  // const [people, setPeople] = useState([]);

  // useEffect(() => {
  //   async function fetchData() {
  //     const req = await axios.get("/tinder/cards");
  //     console.log(req);

  //     setPeople(req.data);
  //   }
  //   fetchData();
  // }, [people]);

  const [people, setPeople] = useState([
    {
      name: "Brooks Leibee",
      imgUrl:
        "https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-...",
    },
    {
      name: "Mia Dam",
      imgUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-...",
    },
    {
      name: "Michael henry",
      imgUrl:
        "https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixlib=rb-...",
    },
    {
      name: "Ben Parker",
      imgUrl:
        "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-...",
    },
    {
      name: "Halama Steve",
      imgUrl:
        "https://images.unsplash.com/photo-1520155707862-5b32817388d6?ixlib=rb-...",
    },
    {
      name: "Lesly Juarez",
      imgUrl:
        "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-...",
    },
    {
      name: "Gian Cescon",
      imgUrl:
        "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-...",
    },
  ]);

  const swiped = (direction, nameToDelete) => {
    console.log("removing" + nameToDelete);
    // setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + "left the screen");
  };

  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.imgUrl})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
