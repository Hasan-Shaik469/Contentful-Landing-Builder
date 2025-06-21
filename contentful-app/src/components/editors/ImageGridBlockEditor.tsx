import { TextInput, FormControl, Flex, Button } from '@contentful/f36-components';
import { useDispatch } from 'react-redux';
import { updateBlock } from '../../features/layout/layoutSlice';

interface ImageGridBlockEditorProps {
  block: {
    id: string;
    data: {
      images?: string[];
    };
  };
}

const ImageGridBlockEditor = ({ block }: ImageGridBlockEditorProps) => {
  const dispatch = useDispatch();

  const handleChange = (index: number, value: string) => {
    const images = [...(block.data.images || [])];
    images[index] = value;
    dispatch(updateBlock({ id: block.id, data: { images } }));
  };

  const addImage = () => {
    const images = [...(block.data.images || []), ''];
    dispatch(updateBlock({ id: block.id, data: { images } }));
  };

  const removeImage = (index: number) => {
    const images = [...(block.data.images || [])];
    images.splice(index, 1);
    dispatch(updateBlock({ id: block.id, data: { images } }));
  };

  return (
    <FormControl>
      <Flex flexDirection="column" gap="spacingS">
        {(!block.data.images || block.data.images.length === 0) && (
          <TextInput isDisabled value="" placeholder="No images added" />
        )}
        {block.data.images?.map((image: string, index: number) => (
          <Flex key={index} gap="spacingS">
            <TextInput
              value={image}
              onChange={(e) => handleChange(index, e.target.value)}
              placeholder={`Image ${index + 1} URL`}
              css={{ flex: 1 }}
            />
            <Button variant="negative" size="small" onClick={() => removeImage(index)}>
              Remove
            </Button>
          </Flex>
        ))}
        <Button variant="secondary" size="small" onClick={addImage}>
          Add Image
        </Button>
      </Flex>
    </FormControl>
  );
};

export default ImageGridBlockEditor;