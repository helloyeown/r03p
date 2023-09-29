import { useParams } from "react-router-dom";
import useQueryObj from "../../hooks/useQueryObj";

const ModifyPage = () => {

    const {queryObj, moveList, moveRead, moveModify, setSearch} = useQueryObj()
    const {pno} = useParams()


    return (  
        <div>
            <div>Product Modify Page {pno}</div>
        </div>
    );
}
 
export default ModifyPage;