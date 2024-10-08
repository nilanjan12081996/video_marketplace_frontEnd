import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../stores/api";

export const stepOne = createAsyncThunk(
    'stepOnes',
    async (userInput, { rejectWithValue }) => {
        try {
            const response = await api.post('/project/step1', userInput);
            if (response?.data?.status_code === 201) {
                return response.data;

            }
            else if (response?.data?.status_code === 200) {
                return response.data;
            }
            else {
                if (response?.data?.errors) {
                    return rejectWithValue(response.data.errors);
                } else {
                    return rejectWithValue('Something went wrong.');
                }
            }
        } catch (err) {
            return rejectWithValue(err);
        }
    }
)
export const videoUpload = createAsyncThunk(
    'videoUpload',
    async (userInput, { rejectWithValue }) => {
        try {
            const response = await api.post('/project/files', userInput);
            if (response?.data?.status_code === 201) {
                return response.data;

            }
            else {
                if (response?.data?.errors) {
                    return rejectWithValue(response.data.errors);
                } else {
                    return rejectWithValue('Something went wrong.');
                }
            }
        } catch (err) {
            return rejectWithValue(err);
        }
    }
)
export const videoListing = createAsyncThunk(
    'videoListings',
    async (userInput, { rejectWithValue }) => {
        try {
            const response = await api.post('/project/video-listing', userInput);
            if (response?.data?.status_code === 200) {
                return response.data;

            }
            else {
                if (response?.data?.errors) {
                    return rejectWithValue(response.data.errors);
                } else {
                    return rejectWithValue('Something went wrong.');
                }
            }
        } catch (err) {
            return rejectWithValue(err);
        }
    }
)
export const getSingleVideo = createAsyncThunk(
    'getsingleVideo',
    async (userInput, { rejectWithValue }) => {
        try {
            const response = await api.get(`/project/single-project/${userInput?.id}`, userInput);
            if (response?.data?.status_code === 200) {
                return response.data;

            }
            else {
                if (response?.data?.errors) {
                    return rejectWithValue(response.data.errors);
                } else {
                    return rejectWithValue('Something went wrong.');
                }
            }
        } catch (err) {
            return rejectWithValue(err);
        }
    }
)
const initialState = {
    loading: false,
    error: false,
    stepOneData: "",
    videoUploadData: "",
    videoList: [],
    singleVideo: {},
}
const VideoUploadSlice = createSlice({
    name: 'stepOness',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(stepOne.pending, (state) => {
            state.loading = true
        })
            .addCase(stepOne.fulfilled, (state, { payload }) => {
                state.loading = false
                state.stepOneData = payload
            })
            .addCase(stepOne.rejected, (state, { payload }) => {
                state.error = true;
                state.message =
                    payload !== undefined && payload.message
                        ? payload.message
                        : 'Something went wrong. Try again later.';
            })
            .addCase(videoUpload.pending, (state) => {
                state.loading = true
            }).addCase(videoUpload.fulfilled, (state, { payload }) => {
                state.loading = false
                state.videoUploadData = payload
                state.error = false
            })
            .addCase(videoUpload.rejected, (state, { payload }) => {
                state.error = true;
                state.message =
                    payload !== undefined && payload.message
                        ? payload.message
                        : 'Something went wrong. Try again later.';
            })
            .addCase(videoListing.pending, (state) => {
                state.loading = true
            })
            .addCase(videoListing.fulfilled, (state, { payload }) => {
                state.loading = false
                state.videoList = payload
                state.error = false
            })
            .addCase(videoListing.rejected, (state, { payload }) => {
                state.error = true;
                state.message =
                    payload !== undefined && payload.message
                        ? payload.message
                        : 'Something went wrong. Try again later.';
            })
            .addCase(getSingleVideo.pending, (state) => {
                state.loading = true
            })
            .addCase(getSingleVideo.fulfilled, (state, { payload }) => {
                state.loading = false
                state.singleVideo = payload
                state.error = false
            })
            .addCase(getSingleVideo.rejected, (state, { payload }) => {
                state.error = true;
                state.message =
                    payload !== undefined && payload.message
                        ? payload.message
                        : 'Something went wrong. Try again later.';
            })
    }
})
export default VideoUploadSlice.reducer;