// store/document/documentActions.ts
import { createAction } from "@reduxjs/toolkit";
import { Document } from "./types";

// 문서 리스트 로딩
export const loadDocumentsRequest = createAction<string | null>("document/loadDocumentsRequest");
export const loadDocumentsSuccess = createAction<Document[] | null>(
  "document/loadDocumentsSuccess"
);
export const loadDocumentsFailure = createAction<string>("document/loadDocumentsFailure");

// 단일 문서 로딩
export const loadDocumentRequest = createAction<number>("document/loadDocumentRequest");
export const loadDocumentSuccess = createAction<Document | null>("document/loadDocumentSuccess");
export const loadDocumentFailure = createAction<string>("document/loadDocumentFailure");

// 문서 추가
export const addDocumentRequest = createAction<Document>("document/addDocumentRequest");
export const addDocumentSuccess = createAction<Document>("document/addDocumentSuccess");
export const addDocumentFailure = createAction<string>("document/addDocumentFailure");

// 문서 저장
export const saveDocumentRequest = createAction<Document>("document/saveDocumentRequest");
export const saveDocumentSuccess = createAction<Document>("document/saveDocumentSuccess");
export const saveDocumentFailure = createAction<string>("document/saveDocumentFailure");

// 문서 삭제
export const deleteDocumentRequest = createAction<number>("document/deleteDocumentRequest");
export const deleteDocumentSuccess = createAction<number>("document/deleteDocumentSuccess");
export const deleteDocumentFailure = createAction<string>("document/deleteDocumentFailure");

// 문서 수정
export const updateDocumentRequest = createAction<Document>("document/updateDocumentRequest");
export const updateDocumentSuccess = createAction<Document>("document/updateDocumentSuccess");
export const updateDocumentFailure = createAction<string>("document/updateDocumentFailure");
