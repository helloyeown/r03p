import { useParams } from "react-router-dom";
import useQueryObj from "../../hooks/useQueryObj";
import ReadComponent from "../../components/products/ReadComponent";

const ReadPage = () => {

    const {queryObj, moveList, moveRead, moveModify, setSearch} = useQueryObj()
    const {pno} = useParams()


    return (  
        <div>
            <ReadComponent pno={pno} moveList={moveList} moveModify={moveModify}></ReadComponent>
        </div>
    );
}
 
export default ReadPage;