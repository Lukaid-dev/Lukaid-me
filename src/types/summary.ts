export interface Summary {
  key: string;
  isUrl?: boolean;
  value?: string;
  urls?: Url[];
}

export interface Url {
  title: string;
  link: string;
}
