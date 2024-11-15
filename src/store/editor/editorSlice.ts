import { createAppSlice } from "@/store/createAppSlice";
import { PayloadAction } from "@reduxjs/toolkit";

interface EditorSliceState {
  content: string;
}

const initialState: EditorSliceState = {
  content: "",
};

export const editorSlice = createAppSlice({
  name: "editor",
  initialState,
  reducers: {
    setContent(state, action: PayloadAction<string>) {
      state.content = action.payload;
    },
  },
  selectors: {
    selectContent: (state) => state.content,
  },
});

export const { setContent } = editorSlice.actions;
export const { selectContent } = editorSlice.selectors;
