export interface FilterPriceProps {
  price?: number[];
}

export interface FilterTitleProps {
  title: string;
  onClose: () => void;
  onPrev?: () => void;
}

export interface FilterItemProps {
  onClose: () => void;
  onRemove: () => void;
  onShow: () => void;
  onPrev: () => void;
  title?: string;
  isOpen: boolean;
}

export interface FilterHomeProps {
  onClose: () => void;
  onOpenFilter: (filter: string) => void;
  onRemove: () => void;
  onShow: () => void;
}

export interface FilterControlProps {
  onShow: () => void;
  onRemove: () => void;
}
