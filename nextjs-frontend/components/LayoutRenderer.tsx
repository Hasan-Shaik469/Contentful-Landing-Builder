'use client';
import HeroBlock from './blocks/HeroBlock';
import TwoColumnBlock from './blocks/TwoColumnBlock';
import ImageGridBlock from './blocks/ImageGridBlock';

interface Block {
  type: 'hero' | 'twoColumn' | 'imageGrid';
  data: any;
}

interface Layout {
  blocks: Block[];
}

// components/LayoutRenderer.tsx
export default function LayoutRenderer({ layout }: { layout: any }) {
  if (!layout?.blocks) return null;

  return (
    <>
      {layout.blocks.map((block: any) => {
        try {
          switch (block.type) {
            case 'hero':
              return <HeroBlock key={block.id} data={block.data || {}} />;
            // ... other cases
            default:
              console.warn(`Unknown block type: ${block.type}`);
              return null;
          }
        } catch (error) {
          console.error(`Error rendering ${block.type} block:`, error);
          return null;
        }
      })}
    </>
  );
}