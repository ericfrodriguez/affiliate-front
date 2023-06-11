import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../../api'
import axios from 'axios'

export const getAffiliateById = createAsyncThunk('GET_AFFILIATE_BY_ID', async (dni) => {
	try {
		const res = await axios.get(`${api}/affiliate/${dni}`)
		return {
			affiliate: res.data
		}
	} catch (error) {
		return {
			affiliate: {}
		}
	}
})
