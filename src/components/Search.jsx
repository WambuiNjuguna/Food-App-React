import { useEffect, useState } from "react"
import styles from './Search.module.css'

const URL= "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY= "7a33018409b147a78910005a9e9f3dca";

export default function Search({foodData, setFoodData}){

    const[query, setQuery]= useState("pizza");
    useEffect(() => {
       async function fetchFood(){
         const res=  await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`)
          const data= await res.json()
          console.log(data.results)
          setFoodData(data.results) //storing data so that it is accessible in app.jsx
        }
         fetchFood()
    }, [query])

    return (
    <div className={styles.searchContainer}>
        <input className={styles.input} onChange={(e)=> setQuery(e.target.value)} type="text" value={query}></input>

    </div>
    )
}