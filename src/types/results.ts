export interface Results {
  info: Info;
}

export interface Info {
  count: number;
  pages: number;
  next: string;
  prev: null | string;
}
