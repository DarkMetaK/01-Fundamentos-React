import { ICommentProps } from '../Comment/types';

interface IContent {
  type: string;
  content: string;
}

export interface IPostProps {
  id: number;
  author: {
    avatarUrl: string;
    name: string;
    role: string;
  };
  content: Array<IContent>;
  publishedAt: Date;
  comments: Array<ICommentProps>;
}