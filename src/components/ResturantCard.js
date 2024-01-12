import { imgURL } from "../constants"

let ResturantCard = ({cloudinaryImageId, name, locality, totalRatingsString}) =>{

  return(
    <div className='resturant-card'>
      <img alt="food" src={imgURL + cloudinaryImageId}/>
      <h3>{name}</h3>
      <p className='region'>{locality}</p>
      <p className='rating'>{totalRatingsString} stars</p>
    </div>
  )
}

export default ResturantCard