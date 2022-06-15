import Axios  from "axios"
import * as types from "./ActionTypes"

const fetchDataRequest = (payload) => {
    return {
        type: types.FETCH_DATA_REQUEST,
        payload
    }

}
const fetchDataSucess = (payload) => {
    return {
        type: types.FETCH_DATA_SUCESS,
        payload
    }
}
const fetchDataFailure = (payload) => {
    return {
        type: types.FETCH_DATA_FAILURE,
        payload
    }
}
//function for getting data from db
const fetchData = (payload) => {
    return (dispatch) => {
        dispatch(fetchDataRequest())
    
    Axios.get('/products',{
        params:{
            ...payload
        }
    })
    .then(r => dispatch(fetchDataSucess(r.data)))
    .catch(e => dispatch(fetchDataFailure(e.data)))
    }
}
//action from getting data from params

const getSingleProductRequest = (payload) => {
    return {
        type: types.GET_SINGLE_PRODUCT_REQUEST,
        payload
    }

}
const getSingleProductSucess = (payload) => {
    return {
        type: types.GET_SINGLE_PRODUCT_SUCESS,
        payload
    }
}
const getSingleProductFailure = (payload) => {
    return {
        type: types.GET_SINGLE_PRODUCT_FAILURE,
        payload
    }
}
//callinf action creactors

const getSingleProduct=(id)=>(dispatch)=>{
    dispatch(getSingleProductRequest())
    Axios.get(`/product/${id}`)
    .then(r=> dispatch(getSingleProductSucess(r.data)))
    .catch(e=> getSingleProductFailure(e.data))
}

export {fetchData,getSingleProduct};