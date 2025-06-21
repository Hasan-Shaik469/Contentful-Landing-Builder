export type BlockType = 'hero' | 'twoColumn' | 'imageGrid';

export interface Block {
  id: string;
  type: BlockType;
  data: {
    heading?: string;
    subtitle?: string;
    ctaText?: string;
    ctaUrl?: string;
    images?: string[];
    leftHeading?: string;
    leftContent?: string;
    leftCtaText?: string;
    leftCtaUrl?: string;
    rightImageUrl?: string;
    backgroundImage?: string;
  };
}

export interface LayoutState {
  blocks: Block[];
}