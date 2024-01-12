import { useEffect, useState } from "react";
import { ResturantList } from "../constants";
import ResturantCard from "./ResturantCard";
import {ShimmerPostList, ShimmerTable} from "react-shimmer-effects"

function handleFilter(srch, allresturants) {
  let data = allresturants.filter((rest) => {
    return rest.info.name.toLowerCase().includes(srch.toLowerCase());
  });
  return data;
}

let Body = () => {
  const [srch, setSrch] = useState("");
  const [allresturants, setAllResturants] = useState([]);
  const [filteredResturants, setFilteredResturants] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try{

      let data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        
    let json = await data.json();
    console.log(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setAllResturants(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredResturants(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    }
    catch(error){
      console.log("Error fetching data")
    }

  }

  return (allresturants.length === 0?  <div className="shimmer"> <ShimmerTable row={1} col={2} /> < ShimmerPostList postStyle="STYLE_FOUR" col={4} row={2} gap={30} imageWisth={30}/></div>  :(
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search"
          value={srch}
          onChange={(e) => {
            setSrch(e.target.value);
          }}
        />
        <button
          onClick={() =>
            setFilteredResturants(handleFilter(srch, allresturants))
          }
        >
          Submit
        </button>
      </div>
      <div className="cards-container">
        {filteredResturants.length === 0? <h1>No restaurants found...</h1>:filteredResturants.map((rest) => {
          return <ResturantCard {...rest.info} key={rest.id} />;
        })}
      </div>
    </>
  ));
};

export default Body;
