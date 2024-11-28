import { useEffect, useState } from "react";


export default function FoodDetails({foodId}){
    
    const [food, setFood]=useState({})
    const URL= `https://api.spoonacular.com/recipes/${foodId}/information`
    const API_KEY= "7a33018409b147a78910005a9e9f3dca";
 
    useEffect(() => {

        async function fetchFood(){
            const res= await fetch(`${URL}?apiKey=${API_KEY}`)
            const data = await res.json ()
            console.log(data)
            setFood(data)
        }
        fetchFood()
        

    }, [foodId])

    return <div>Food Details {foodId}
    {food.title}
    <img src={food.image}/>
    </div>

}