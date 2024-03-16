// Import necessary utility functions and dependencies
import { addKeyValue } from "@/utils";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchStops } from "./stopsApi";

// Thunk to fetch stops-list data asynchronously
export const getStopsData = createAsyncThunk(
	"stops/getStopsData",
	async (_, { rejectWithValue }) => {
		try {
			let { data } = await fetchStops();
			data = addKeyValue(data, "completed", false);
			return data;
		} catch (error) {
			if (error.response && error.response.data.message) {
				return rejectWithValue(error.response.data.message);
			} else {
				return rejectWithValue(error.message);
			}
		}
	}
);
