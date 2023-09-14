// store/document/documentReducers.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DocumentDetailInfo, DocumentInfo } from "./types";

interface DocumentState {
  documentsList: DocumentInfo[];
  singleDocument: DocumentDetailInfo | null;
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
    loadDocumentsSuccess: (state, action: PayloadAction<DocumentInfo[]>) => {
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
    loadDocumentSuccess: (state, action: PayloadAction<DocumentDetailInfo | null>) => {
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
