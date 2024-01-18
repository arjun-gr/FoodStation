import {Link} from 'react-router-dom'

let Header = ()=>{
  return(
    <div className='nav'>
      <h1>FoodStation</h1>
      <ul>
        
        <li> <Link to="/"> Home </Link> </li>
        
        <li><Link to="/contact">Contact</Link></li>
        <li>Offers</li>
        <li>Cart</li>
      </ul>
    </div>
  )
}


export default Header