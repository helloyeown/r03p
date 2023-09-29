import { useEffect, useState } from "react";
import { getProduct } from "../../api/ProductAPI";

const initState = {
	pno:0,
	pname:'',
	pdesc:'',
	price:0,
	images:[]
}

const ReadComponent = ({pno, moveList, moveModify}) => {

    const [product, setProduct] = useState(initState)

    useEffect(() => {
        getProduct(pno).then(data => {
            setProduct(data)
        })
    }, [pno])


    return (  
        <div className="m-2 p-2">
            <div className="m-2 p-2 border-2">
                {product.pname}
            </div>
            <div className="m-2 p-2 border-2">
                {product.pdesc}
            </div>
            <div className="m-2 p-2 border-2">
                {product.price}
            </div>

            <div>
                <button className="bg-orange-300 border-2 m-2 p-2 text-white font-bold"
                    onClick={() => moveModify(product.pno)}>MODIFY</button>
                <button className="bg-blue-200 border-2 m-2 p-2 text-white font-bold"
                    onClick={moveList}>LIST</button>
            </div>
        </div>
    );
}
 
export default ReadComponent;