import axios from "axios";

export const DeleteProduct = async (id) => {
    return await axios.delete(`${process.env.REACT_APP_URL_LOCALHOST}/api/product/${id}`)
}

export const NewProduct = async (product) => {
    return axios.post(`${process.env.REACT_APP_URL_LOCALHOST}/api/product/createProduct`, product)
}