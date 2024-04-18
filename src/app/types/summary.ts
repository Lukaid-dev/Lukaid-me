export interface summary {
  key: string;
  isUrl?: boolean;
  value?: string;
  urls?: url[];
}

export interface url {
  title: string;
  link: string;
}
