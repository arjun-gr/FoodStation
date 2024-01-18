import { useEffect, useState } from "react"
import { useParams} from "react-router-dom"
import { imgURL } from "../constants"

let ResturantDetail = () =>{

  let {id} = useParams() //This gives object {id:123} so we destructured it

  let [resturant, setResturant] = useState([])
  
  useEffect(()=>{
    getDetails()
  },[])

  async function getDetails(){
    let data = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0759837&lng=72.8776559&restaurantId='+id)

    let json = await data.json()

    setResturant(json)

    // setResturant(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards)
    console.log(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards)
  }

  return (
    <div className="resturantDetails">
      <div className="detail">
      <h1 className="id">{resturant?.data?.cards[0]?.card?.card?.info?.id}</h1>
      <h2 className="restName">{resturant?.data?.cards[0]?.card?.card?.info?.name}</h2>
      <img src={imgURL+resturant?.data?.cards[0]?.card?.card?.info?.cloudinaryImageId}/>
      <div className="additionalInfo">
      <h3>Area: {resturant?.data?.cards[0]?.card?.card?.info.areaName}</h3>
      <h3>City: {resturant?.data?.cards[0]?.card?.card?.info.city}</h3>
      <h3>Rating: {resturant?.data?.cards[0]?.card?.card?.info.avgRating}</h3>
      <h3>Cost: {resturant?.data?.cards[0]?.card?.card?.info.costForTwoMessage}</h3>
      </div>
      </div>
      <div className="resturantDetailList">
        {
          resturant.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards?.map((item)=>{
            return <li key={item.card.info.id}>{item.card.info.name}</li>
          })
        }
      </div>
    </div>
  )
}

export default ResturantDetail