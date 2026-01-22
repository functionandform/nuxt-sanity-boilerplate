import { getName } from 'country-list';

export function useCountryNameFromCode(code?: string | null): string {
  if (!code) return '';
  return getName(code.toUpperCase()) ?? code;
}
