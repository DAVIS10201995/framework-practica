export interface Post {
  id: number;
  title: string;
  description: string;
  image?: string;
  fullContent?: {
    introduction: string;
    explanation?: string;
    evidences: string[];
    conclusion: string;
  };
}