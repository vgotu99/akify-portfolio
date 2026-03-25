export type WithChildren<T = Record<string, unknown>> = T & {
  children: React.ReactNode;
};

export type FormattedImages = Array<{
  src: string | ImageSrc;
  alt: string;
  title?: string;
  subtitle?: string;
  href?: string;
}>;

export interface ImageSrc {
  mobile: string;
  desktop: string;
}

export interface BaseApiResponse<T> {
  status: number;
  code: string;
  msg: string;
  detailMsg: string;
  data: T;
}
