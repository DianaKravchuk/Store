import { ReactNode } from "react";

interface FooterSectionBase<T> {
  title: string;
  links: {
    id: number;
    url: string;
    content: T;
  }[];
}

export interface FooterSectionProps extends FooterSectionBase<string> {}

export interface FooterIconsSectionProps extends FooterSectionBase<ReactNode> {}
