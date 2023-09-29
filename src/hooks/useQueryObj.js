const { useSearchParams, useNavigate, createSearchParams } = require("react-router-dom")

const checkNull = (obj) => {

    const result = {}

    for(const attr of obj){
        const attrName = attr
        const attrValue = obj[attr]

        if(attrValue && attrName !== 'null'){
            result[attrName] = attrValue
        }
    }

    return result
}

const useQueryObj = () => {

    const [search, setSearch] = useSearchParams()
    const navigate = useNavigate()

    const page = search.get("page") || 1
    const size = search.get("size") || 10
    const type = search.get("type")
    const keyword = search.get("keyword")

    const queryObj = checkNull({page, size, type, keyword})

    const moveList = () => {
        const queryString = createSearchParams(queryObj).toString()
        navigate(`../list?${queryString}`)
    }

    const moveRead = (pno) => {
        const queryString = createSearchParams(queryObj).toString()
        navigate(`../read/${pno}?${queryString}`)
    }

    const moveModify = (pno) => {
        const queryString = createSearchParams(queryObj).toString()
        navigate(`../modify/${pno}?${queryString}`)
    }


    return {queryObj, moveList, moveRead, moveModify, setSearch}

}

export default useQueryObj