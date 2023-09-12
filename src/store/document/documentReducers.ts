// store/document/documentReducers.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Document } from "./types";

interface DocumentState {
  documentsList: Document[];
  singleDocument: Document | null;
  loading: boolean;
  error: string | null;
}

const initialState: DocumentState = {
  documentsList: [],
  singleDocument: null,
  loading: false,
  error: null,
};

const documentReducer = createSlice({
  name: "document",
  initialState,
  reducers: {
    loadDocumentsRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    loadDocumentsSuccess: (state, action: PayloadAction<Document[]>) => {
      state.loading = false;
      state.documentsList = action.payload;
    },
    loadDocumentsFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    loadDocumentRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    loadDocumentSuccess: (state, action: PayloadAction<Document | null>) => {
      state.loading = false;
      state.singleDocument = action.payload;
    },
    loadDocumentFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default documentReducer.reducer;
