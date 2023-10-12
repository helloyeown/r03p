import { useSelector } from "react-redux";

const CountDisplay = () => {

    // 스토어에서 받고 싶은 데이터 선별
    const obj = useSelector(state => state.counter)
    console.log(obj)


    return (  
        <div className="text-4xl">
            count: {obj.num}
        </div>
    );
}
 
export default CountDisplay;