import { configureStore } from '@reduxjs/toolkit';
import affiliateReducer from '../store/affiliate/reducers';

const store = configureStore({
    reducer: {
        affiliateReducer
	}
})

export default store
