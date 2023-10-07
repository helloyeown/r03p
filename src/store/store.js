import { configureStore } from "@reduxjs/toolkit";

// 외부에서 사용하기 위해 export 키워드 사용
export default configureStore({
    reuder: {}      // reducer는 객체
})      // 함수의 결과물이 store