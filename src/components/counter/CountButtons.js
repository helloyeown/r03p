import { useDispatch } from "react-redux";
import { dec, inc } from "../../reducers/countSlice";

const CountButtons = () => {

    // useSelector <-> dispatch
    // 슬라이스의 함수 호출
    const dispatch = useDispatch()

    const handleClickInc = () => {
        dispatch(inc(2, "INC"))
        // 첫 번째 파라미터는 무조건 상태, 두 번째는 페이로드로 전달 되는 상태
        // 두 개까지 전달 가능하고 여러 개 전달하려면 객체로 전달해야 함
    }

    const handleClickDec = () => {
        dispatch(dec(2, "DEC"))
    }


    return (  
        <div>
            <button onClick={handleClickInc}>INC</button>
            <button onClick={handleClickDec}>DEC</button>
        </div>
    );
}
 
export default CountButtons;