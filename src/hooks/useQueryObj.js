const { useSearchParams, useNavigate } = require("react-router-dom")

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

}