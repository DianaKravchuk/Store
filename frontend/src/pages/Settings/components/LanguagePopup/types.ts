export interface LanguagePopupProps {
  onClose: () => void;
}

export type SettingFunctionKeys = "newsleter" | "languages";

export interface Setting {
  id: number;
  title: string;
  description: string;
  function: SettingFunctionKeys;
}
