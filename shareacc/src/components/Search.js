import SearchIcon from "../components/svg-components/searchIcon";
import ButtonLine from "../components/buttonLine";
import Curve from "../components/svg-components/curve";


const Search = ()=>{
    
    return (
        <div className="be-purple2">
          <div className="container">
            <div class="input-search">
              <SearchIcon />
              <input
                placeholder="Search..."
                class="service-filter"
                tabindex="0"
              />
            </div>
            <ButtonLine />
          </div>
        <Curve />
      </div>
    );
}

export default Search;