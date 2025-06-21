import { TextInput, Textarea, FormControl, Flex } from '@contentful/f36-components';
import { useDispatch } from 'react-redux';
import { updateBlock } from '../../features/layout/layoutSlice';

const HeroBlockEditor = ({ block }: { block: any }) => {
  const dispatch = useDispatch();

  const handleChange = (field: string, value: string) => {
    dispatch(updateBlock({ id: block.id, data: { [field]: value } }));
  };

  return (
    <FormControl>
      <Flex flexDirection="column" gap="spacingS">
        <TextInput
          value={block.data.heading || ''}
          onChange={(e) => handleChange('heading', e.target.value)}
          placeholder="Heading"
        />
        <Textarea
          value={block.data.subtitle || ''}
          onChange={(e) => handleChange('subtitle', e.target.value)}
          placeholder="Subtitle"
        />
        <TextInput
          value={block.data.ctaText || ''}
          onChange={(e) => handleChange('ctaText', e.target.value)}
          placeholder="CTA Text"
        />
        <TextInput
          value={block.data.ctaUrl || ''}
          onChange={(e) => handleChange('ctaUrl', e.target.value)}
          placeholder="CTA URL"
        />
      </Flex>
    </FormControl>
  );
};

export default HeroBlockEditor;