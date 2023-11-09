export type EventTypeProps = {
  isChecked?: boolean;
  xPath?: string;
  name?: string;
  type?: string;
  content?: string
  isEnter?: boolean
  value?: string
};

export type Ctx = {
  [key: string]: EventTypeProps
};
