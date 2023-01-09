export interface ICommentProps {
  id: number;
  author: {
    name: string;
    avatarUrl: string;
  };
  publishedAt: Date;
  content: string;
  applauses: number;
  onDeleteComment?: (id: Number) => void;
}