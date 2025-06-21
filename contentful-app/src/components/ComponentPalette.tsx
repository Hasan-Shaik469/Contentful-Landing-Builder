import { Box, Text } from '@contentful/f36-components';
import { useDispatch } from 'react-redux';
import { BlockType } from '../features/layout/layoutTypes';
import { addBlock } from '../features/layout/layoutSlice';

const ComponentPalette = () => {
  const dispatch = useDispatch();

  const components = [
    { type: 'hero', label: 'Hero Block' },
    { type: 'twoColumn', label: 'Two Column Block' },
    { type: 'imageGrid', label: 'Image Grid' },
  ];

  const handleAddBlock = (type: BlockType) => {
    dispatch(addBlock({ type }));
  };

  return (
    <Box
      padding="spacingM"
      style={{
        width: '250px',
        backgroundColor: '#f7f9fa',
        borderRight: '1px solid #e0e0e0',
        height: '100%',
      }}
    >
      <Text fontWeight="fontWeightMedium" marginBottom="spacingM">
        Components
      </Text>
      {components.map((component) => (
        <Box
          key={component.type}
          padding="spacingM"
          marginBottom="spacingS"
          border="default"
          borderRadius="small"
          style={{ cursor: 'pointer', backgroundColor: 'white' }}
          onClick={() => handleAddBlock(component.type as BlockType)}
        >
          <Text>{component.label}</Text>
        </Box>
      ))}
    </Box>
  );
};

export default ComponentPalette;