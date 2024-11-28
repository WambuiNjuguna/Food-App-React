import { useState } from "react"
import Search from "./components/Search"
import FoodList from "./components/FoodList"
import Nav from "./components/Nav"
import './App.jsx'
import Container from "./components/Container.jsx"
import InnerContainer from "./components/InnerContainer.jsx"
import FoodDetails from "./components/FoodDetail.jsx"


function App() {
    const[foodData, setFoodData]= useState([]);
    const[foodId, setFoodId]= useState("658615");
 return(
  <div className="App">
    <Nav/>
    <Search foodData={foodData} setFoodData={setFoodData}/>
    <Container>
      <InnerContainer>
         <FoodList setFoodId={setFoodId} foodData={foodData}/>
      </InnerContainer>
      <InnerContainer>
         <FoodDetails foodId={foodId}/>
      </InnerContainer>
       
    </Container>
    
  </div>
 )
}

export default App
