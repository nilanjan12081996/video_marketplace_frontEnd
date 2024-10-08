import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from '../reducers/AuthSlice';
import VideoUploadSlice from '../reducers/VideoUploadSlice';

const store = configureStore({
  reducer: {
    auth: AuthSlice,
    video: VideoUploadSlice

  },
  devTools: import.meta.env.DEV,
});

export default store;
