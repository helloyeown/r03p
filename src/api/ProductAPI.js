import axios from "axios"

export const postProduct = async(FormData) => {
    
    const header = {
        headers: {
            "Content-Type": "multipart/form-data",
        }
    }

    const res = await axios.post('http://localhost:8080/api/products/', FormData, header)

    return res.data
    
}

export const getProduct = async(pno) => {

    const res = await axios.get(`http://localhost:8080/api/products/${pno}`)
    return res.data

}

export const deleteProduct = async(pno) => {

    const res = await axios.delete(`http://localhost:8080/api/products/${pno}`)
    return res.data

}