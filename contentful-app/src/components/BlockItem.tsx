import { Box, Text } from '@contentful/f36-components';
import { useDrag, useDrop } from 'react-dnd';
import { BlockType } from '../features/layout/layoutTypes';
import { RefObject } from 'react';

interface BlockItemProps {
  id: string;
  type: BlockType;
  index: number;
  moveBlock: (fromIndex: number, toIndex: number) => void;
  children: React.ReactNode;
}

const BlockItem = ({ id, type, index, moveBlock, children }: BlockItemProps) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'BLOCK',
    item: { id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const [, drop] = useDrop(() => ({
    accept: 'BLOCK',
    hover: (item: { id: string; index: number }) => {
      if (item.index !== index) {
        moveBlock(item.index, index);
        item.index = index;
      }
    },
  }));

  // Create a combined ref callback
  const setRef = (node: HTMLElement | null) => {
    drag(node);
    drop(node);
  };

  return (
    <Box
      ref={setRef}
      padding="spacingM"
      marginBottom="spacingS"
      border="default"
      borderRadius="small"
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move',
        backgroundColor: 'white',
      }}
    >
      {children}
    </Box>
  );
};

export default BlockItem;