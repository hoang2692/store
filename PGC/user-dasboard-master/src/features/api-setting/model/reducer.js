import { createSlice } from "@reduxjs/toolkit";

function updateObjectInArray(array, action) {
  return array.map((item, index) => {
    if (index !== action.index) {
      // This isn't the item we care about - keep it as-is
      return item;
    }
    // Otherwise, this is the one we want - return an updated value
    return {
      ...item,
      ...action.item
    };
  });
}

const initialState = {
  isFetching: false,
  data: [],
  page: 1,
  totalApiSettings: 1,
  errors: [],
  /**
   * Create
   */
  create: {
    isFetching: false,
    errors: []
  },
  /**
   * Update
   */
  update: {
    isFetching: false,
    errors: []
  },
  /**
   * Delete
   */
  delete: {
    isFetching: false,
    errors: []
  },
  /**
   * Get delete
   */
  secret: {
    isFetching: false,
    errors: []
  }
};

const apiSettingSlice = createSlice({
  name: "apiSetting",
  initialState,
  reducers: {
    /**
     * Reset data
     */
    resetApiSettingState: () => initialState,
    /**
     * Get list api settings
     */
    getListApiSettingStart: state => {
      state.isFetching = true;
      state.errors = [];
    },
    getListApiSettingSuccess: (state, action) => {
      const { data, totalApiSettings } = action.payload;
      state.isFetching = false;
      state.data = data;
      state.totalApiSettings = totalApiSettings;
    },
    getListApiSettingFailure: (state, action) => {
      const { errors } = action.payload;

      state.isFetching = false;
      state.errors = errors;
    },
    /**
     * create new
     */
    createApiSettingStart: state => {
      state.create.isFetching = true;
      state.create.errors = [];
    },
    createApiSettingSuccess: (state, action) => {
      const { data } = action.payload;
      state.create.isFetching = false;
      state.data = [data, ...state.data];
    },
    createApiSettingFailure: (state, action) => {
      const { errors } = action.payload;
      state.create.isFetching = false;
      state.create.errors = errors;
    },
    /**
     * Update
     */
    updateApiSettingStart: state => {
      state.update.isFetching = true;
    },
    updateApiSettingSuccess: (state, action) => {
      const { data: updatedData } = action.payload;

      state.update.isFetching = false;

      state.data = state.data.map(item => {
        if (item.ID === updatedData.ID) {
          return { ...item, ...updatedData };
        } else {
          return item;
        }
      });
    },
    updateApiSettingFailure: (state, action) => {
      const { errors } = action.payload;

      state.update.isFetching = false;
      state.update.errors = errors;
    },
    /**
     * Delete
     */
    deleteApiSettingStart: state => {
      state.delete.isFetching = true;
    },
    deleteApiSettingSuccess: (state, action) => {
      const { id } = action.payload;

      state.delete.isFetching = false;

      state.data = state.data.filter(item => {
        return item.ID !== id;
      });
    },
    deleteApiSettingFailure: (state, action) => {
      const { errors } = action.payload;

      state.delete.isFetching = false;
      state.delete.errors = errors;
    },

    /**
     * secret
     */
    getSecretKeyStart: state => {
      state.secret.isFetching = true;
    },
    getSecretKeySuccess: (state, action) => {
      const { apiSecret, id } = action.payload;

      state.secret.isFetching = false;

      state.data = state.data.map(item => {
        if (item.ID === id) {
          return { ...item, apiSecret };
        }
        return item;
      });
    },
    getSecretKeyFailue: (state, action) => {
      const { errors } = action.payload;
      state.secret.isFetching = false;
      state.secret.errors = errors;
    },
    clearApiSecret: state => {
      state.data = state.data.map(item => {
        if (item.apiSecret) {
          return {
            ...item,
            apiSecret: undefined
          };
        }
        return item;
      });
    }
  }
});

export const {
  resetApiSettingState,
  getListApiSettingStart,
  getListApiSettingSuccess,
  getListApiSettingFailure,
  createApiSettingStart,
  createApiSettingSuccess,
  createApiSettingFailure,
  updateApiSettingStart,
  updateApiSettingSuccess,
  updateApiSettingFailure,
  deleteApiSettingStart,
  deleteApiSettingSuccess,
  deleteApiSettingFailure,
  getSecretKeyStart,
  getSecretKeySuccess,
  getSecretKeyFailue,
  clearApiSecret
} = apiSettingSlice.actions;

export default apiSettingSlice.reducer;
