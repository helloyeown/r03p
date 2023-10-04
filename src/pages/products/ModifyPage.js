import { useParams } from "react-router-dom";
import useQueryObj from "../../hooks/useQueryObj";
import ModifyComponent from "../../components/products/ModifyComponent";

const ModifyPage = () => {

    const {queryObj, moveList, moveRead, moveModify, setSearch} = useQueryObj()
    const {pno} = useParams()


    return (  
        <div>
            <ModifyComponent pno={pno}></ModifyComponent>
        </div>
    );
}
 
export default ModifyPage;