import React from "react";
import axios from "axios";
import { useState,useEffect } from "react";
function Joke(){
    const [joke, setjoke] = useState([]);
    const [type, settype] = useState("");
    const [category,setcategory]= useState("");
    const typeArr = ["single", "twopart"];
    const categoryArr = ["Programming", "Misc" ,"Spooky","Pun"];
    useEffect(() => {
        const url = `https://v2.jokeapi.dev/joke/Programming?type=single`;
          axios
            .get(url)
            .then(data => setjoke(data.data))
            .catch(error => console.log(error));
      }, []); 
      useEffect(() => {
        if (category && type) {
          const url = `https://v2.jokeapi.dev/joke/${category}?type=${type}`;
          axios
            .get(url)
            .then(data => setjoke(data.data))
            .catch(error => console.log(error));
        }
      }, [category, type]);
    
      function handleJoke() {
        let i = Math.floor(Math.random() * categoryArr.length);
        let j = Math.floor(Math.random() * typeArr.length);
        setcategory(categoryArr[i]);
        settype(typeArr[j]);
      }  
    return <> 
        <div className="joke">
            <div>
            {type === "single" ? (
                <p>{joke.joke}</p>
                ) : (
                <div>
                    <p>{joke.setup}</p>
                    <p>{joke.delivery}</p>
                </div>)}
            </div>
            <button onClick={handleJoke}>Next Joke</button>
        </div>
    </>
}
export default Joke;