import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { Block, BlockType, LayoutState } from './layoutTypes';

const initialState: LayoutState = {
  blocks: [],
};

export const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    addBlock: (state, action: PayloadAction<{ type: BlockType; index?: number }>) => {
      const { type, index } = action.payload;
      const newBlock: Block = {
        id: uuidv4(),
        type,
        data: {},
      };
      if (index !== undefined) {
        state.blocks.splice(index, 0, newBlock);
      } else {
        state.blocks.push(newBlock);
      }
    },
    removeBlock: (state, action: PayloadAction<string>) => {
      state.blocks = state.blocks.filter((block) => block.id !== action.payload);
    },
    updateBlock: (state, action: PayloadAction<{ id: string; data: any }>) => {
      const block = state.blocks.find((b) => b.id === action.payload.id);
      if (block) block.data = { ...block.data, ...action.payload.data };
    },
    moveBlock: (state, action: PayloadAction<{ fromIndex: number; toIndex: number }>) => {
      const [removed] = state.blocks.splice(action.payload.fromIndex, 1);
      state.blocks.splice(action.payload.toIndex, 0, removed);
    },
    setBlocks: (state, action: PayloadAction<Block[]>) => {
      state.blocks = action.payload;
    },
  },
});

export const { addBlock, removeBlock, updateBlock, moveBlock, setBlocks } = layoutSlice.actions;
export default layoutSlice.reducer;