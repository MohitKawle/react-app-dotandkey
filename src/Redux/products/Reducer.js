import * as types from "./ActionTypes"
const initialstate = {
    products: [],
    error: "",
    currentProduct:{},
    loding:false

}
const reducer = (state = initialstate, action) => {
    const { type, payload } = action;
    switch (type) {
        case types.FETCH_DATA_REQUEST:
            return {
                ...state,
                error: "",
                loding:true
            }
        case types.FETCH_DATA_SUCESS:
            return {
                ...state,
                products: payload,
                error: "",
                loding:false
            }
        case types.FETCH_DATA_FAILURE:
            return {
                ...state,
                loding:false,
                error: payload,
            }
        //for single product
        case types.GET_SINGLE_PRODUCT_REQUEST:
            return {
                ...state,
                error: "",
                loding:true
            }
        case types.GET_SINGLE_PRODUCT_SUCESS:
            return {
                ...state,
              currentProduct:payload,
                error: "",
                loding:false
            }
        case types.GET_SINGLE_PRODUCT_FAILURE:
            return {
                ...state,
                loding:false,
                error: payload,
            }



        default:
            return state;
    }

}

export default reducer