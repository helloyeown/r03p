
const countSlice = ({
    name: "CountSlice",
    initialState: {num: 5},     // 상태로 관리해야 할 데이터의 초기 상태
    reducers: {
        inc: (state) => {
            console.log(state)  // state 안에 num이 있음

            // 새로운 객체여야 상태가 업데이트 된 걸로 침
            return {num: state.num + 1}     // 리턴 값은 새로운 상태
        },
        dec: (state) => {
            console.log(state)
            return {num: state.num - 1}
        }
    }
})

export const {inc, dec} = countSlice.actions    // inc, dec는 액션 함수
export default countSlice.reducers