import { getCode } from 'country-list';


export function useCountryCodeFromName(name: string): string | undefined {
  return getCode(name);
}
