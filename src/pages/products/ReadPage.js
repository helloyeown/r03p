import { useParams } from "react-router-dom";
import useQueryObj from "../../hooks/useQueryObj";

const ReadPage = () => {

    const {queryObj, moveList} = useQueryObj()
    const {pno} = useParams()


    return (  
        <div>
            {pno}
        </div>
    );
}
 
export default ReadPage;