import SearchIcon from "../components/svg-components/searchIcon";
import ButtonLine from "../components/buttonLine";
import Curve from "../components/svg-components/curve";
import {goto} from "../utils/utils"



const Search = ()=>{

  const handleKeyDown = (e)=>{
    if(e.key === "Enter"){
      goto(`/marketplace/list/${e.target.value}`)
    }
  }
    
    return (
        <div className="be-purple2">
          <div className="container">
            <div class="input-search">
              <SearchIcon />
              <input
                placeholder="Search..."
                class="service-filter"
                tabindex="0"
                onKeyDown={handleKeyDown}
              />
            </div>
            <ButtonLine />
          </div>
        <Curve />
      </div>
    );
}

export default Search;