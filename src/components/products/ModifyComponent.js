import { deleteProduct } from "../../api/ProductAPI";

const initState = {
    pno:0,
	pname:'',
	pdesc:'',
	price:0,
	images:[]
}

const ModifyComponent = ({pno}) => {

    const handleClickDelete = () => {
        deleteProduct(pno).then(data => {
            alert(pno + "번 상품이 삭제되었습니다.")
            // moveList
        })
    }


    return (  
        <div>
            <div>Modify Component</div>

            <div className="m-2 p-2 border-2">
                <input type="text" name="pname"></input>
            </div>
            <div className="m-2 p-2 border-2">
                <input type="text" name="pdesc"></input>
            </div>
            <div className="m-2 p-2 border-2">
                <input type="number" name="price"></input>
            </div>
            <div className="m-2 p-2 border-2">
                <input type="file" name="images" multiple></input>
            </div>

            <div>
                <button className="bg-[#fdd000] border-2 m-2 p-2 text-white font-bold">MOD</button>
                <button className="bg-[#2b2b2a] border-2 m-2 p-2 text-white font-bold">LIST</button>
                <button className="bg-red-400 border-2 m-2 p-2 text-white font-bold">DEL</button>
            </div>
        </div>
    );
}
 
export default ModifyComponent;