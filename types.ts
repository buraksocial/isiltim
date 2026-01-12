export interface Memory {
  id: number;
  imageUrl: string;
  caption: string;
  date?: string;
}

export interface Reason {
  id: number;
  text: string;
  icon: 'heart' | 'star' | 'sun' | 'smile';
}

export interface FlowerProps {
  x: number;
  y: number;
  scale: number;
  rotation: number;
  delay: number;
  type: 'rose' | 'tulip' | 'daisy';
}