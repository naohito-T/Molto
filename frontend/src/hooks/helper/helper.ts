import { AppConstraintConfig } from '@/configs';
export const fullPath = (path: string): string => {
  return `${AppConstraintConfig.PUBLIC_URL}${path}`;
};
