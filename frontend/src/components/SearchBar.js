import './searchbar.scss'
import {CiSearch} from "react-icons/ci"

const SearchBar = ({onSearch}) => {
    

  return (
    <>

    <div >

   
    <CiSearch className='searchDIV'/>
    <input type="text" className='search' placeholder='Search products' onChange={(e) => onSearch(e.target.value)}/>
    </div>
    </>
  )
}

export default SearchBar