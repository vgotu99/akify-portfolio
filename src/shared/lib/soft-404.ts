import axios from 'axios';
import type { Metadata } from 'next';

export const SOFT_404_METADATA: Metadata = {
  title: '404',
  robots: {
    index: false,
    follow: false,
  },
};

export const is404Error = (error: unknown): boolean => {
  return axios.isAxiosError(error) && error.response?.status === 404;
};

export const handleMetadataSoft404 = (error: unknown): Metadata => {
  if (is404Error(error)) {
    return SOFT_404_METADATA;
  }
  throw error;
};
