import { ReactNode } from "react";

export interface IContentHeaderProps {
  title: string;
  lineColor: string;
  children: ReactNode;
}
export interface ITitleContainerProps {
  lineColor: string;
}
export interface ISelectIntupProps {
  option: {
    value: string | number;
    label: string | number;
  }[];
}

export interface IHistoryFinanceCardProps {
  tagColor: string;
  title: string;
  subtitle: string;
  amount: string;
}
export interface ITagProps {
  color: string;
}
