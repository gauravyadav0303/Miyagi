import Contact from "../components/Contact";
import Description from "../components/Description";
import Header from "../components/Header";
import Upload from "../components/Upload";
import { NavLink} from "react-router-dom";

function Verfiaction() {
    return ( <>
    <Header/>
    <Description/>
    <Upload/>
    <div className="w-full flex justify-center">
      <NavLink to="/subscription">
      <button className="p-2 rounded-lg text-white bg-[#5379FE] text-[15px] font-thin">
          pricing of the products
        </button>
      </NavLink>
        
      </div>
    <Contact/>
    
   
    </> );
}

export default Verfiaction;