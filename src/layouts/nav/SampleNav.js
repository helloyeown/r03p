import { Link } from "react-router-dom";

const SampleNav = () => {
    return (  
        <div className="m-4 text-4xl hover:underline">
            <Link to={"/products/list"}>Products</Link>
        </div>
    );
}
 
export default SampleNav;