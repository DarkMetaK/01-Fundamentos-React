import { ImgHTMLAttributes } from "react";

export interface IAvatarProps extends ImgHTMLAttributes<HTMLImageElement>{
  src: string;
  border?: boolean;
}