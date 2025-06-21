import { Box } from '@contentful/f36-components';
import { useSelector, useDispatch } from 'react-redux';
import { moveBlock } from '../features/layout/layoutSlice';
import BlockItem from './BlockItem';
import HeroBlockEditor from './editors/HeroBlockEditor';
import TwoColumnBlockEditor from './editors/TwoColumnBlockEditor';
import ImageGridBlockEditor from './editors/ImageGridBlockEditor';
import { RootState } from '@/store/store';

const LayoutCanvas = () => {
  const { blocks } = useSelector((state: RootState) => state.layout);
  const dispatch = useDispatch();

  const handleMoveBlock = (fromIndex: number, toIndex: number) => {
    dispatch(moveBlock({ fromIndex, toIndex }));
  };

  const renderBlockEditor = (block: any) => {
    switch (block.type) {
      case 'hero':
        return <HeroBlockEditor block={block} />;
      case 'twoColumn':
        return <TwoColumnBlockEditor block={block} />;
      case 'imageGrid':
        return <ImageGridBlockEditor block={block} />;
      default:
        return null;
    }
  };

  return (
    <Box padding="spacingM" style={{ flex: 1, overflowY: 'auto', backgroundColor: 'white' }}>
      {blocks.map((block, index) => (
        <BlockItem
          key={block.id}
          id={block.id}
          type={block.type}
          index={index}
          moveBlock={handleMoveBlock}
        >
          {renderBlockEditor(block)}
        </BlockItem>
      ))}
    </Box>
  );
};

export default LayoutCanvas;