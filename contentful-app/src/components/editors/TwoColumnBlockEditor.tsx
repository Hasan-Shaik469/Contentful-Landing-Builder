import { TextInput, Textarea, FormControl, Flex } from '@contentful/f36-components';
import { useDispatch } from 'react-redux';
import { updateBlock } from '../../features/layout/layoutSlice';

const TwoColumnBlockEditor = ({ block }: { block: any }) => {
  const dispatch = useDispatch();

  const handleChange = (field: string, value: string) => {
    dispatch(updateBlock({ id: block.id, data: { [field]: value } }));
  };

  return (
    <FormControl>
      <Flex gap="spacingM">
        <Flex flexDirection="column" flex={1} gap="spacingS">
          <TextInput
            value={block.data.leftHeading || ''}
            onChange={(e) => handleChange('leftHeading', e.target.value)}
            placeholder="Left Heading"
          />
          <Textarea
            value={block.data.leftContent || ''}
            onChange={(e) => handleChange('leftContent', e.target.value)}
            placeholder="Left Content"
          />
          <TextInput
            value={block.data.leftCtaText || ''}
            onChange={(e) => handleChange('leftCtaText', e.target.value)}
            placeholder="Left CTA Text"
          />
          <TextInput
            value={block.data.leftCtaUrl || ''}
            onChange={(e) => handleChange('leftCtaUrl', e.target.value)}
            placeholder="Left CTA URL"
          />
        </Flex>
        <Flex flexDirection="column" flex={1} gap="spacingS">
          <TextInput
            value={block.data.rightImageUrl || ''}
            onChange={(e) => handleChange('rightImageUrl', e.target.value)}
            placeholder="Right Image URL"
          />
        </Flex>
      </Flex>
    </FormControl>
  );
};

export default TwoColumnBlockEditor;