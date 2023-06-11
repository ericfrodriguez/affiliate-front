import { createReducer } from '@reduxjs/toolkit'
import { getAffiliateById } from './actions'

let initialState = {
    affiliate: {}
}

const reducer = createReducer(
    initialState,
    (builder)=> builder
        .addCase(
            getAffiliateById.fulfilled,   //no olvidar palabrita fulfilled
            (state,action)=> {
                let newState = {
                    ...state,
                    affiliate: action.payload.affiliate
                }
                return newState
            }
        )
)

export default reducer;
