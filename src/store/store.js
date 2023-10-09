import { configureStore } from "@reduxjs/toolkit";
import countSlice from "../reducers/countSlice";

// 외부에서 사용하기 위해 export 키워드 사용
export default configureStore({
    reuder: {
        counter: countSlice     // 리듀서 세팅
    }      // reducer는 객체
})      // 함수의 결과물이 store