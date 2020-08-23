// Local Typings
export interface ParsedToken {
  authorities: Authorities;
  exp: number;
  iat: number;
  operatorId: string;
  roleId: number;
  sub: string;
}

interface Authorities {
  authority: string;
}

// Exports
export const stringifyQueryParams = (queryParams: Record<string, string | string[]>) => {
  let queryString = '';
  const keys = Object.keys(queryParams);

  const keyValuePairs: string[][] = keys.reduce((acc: any, k) => {
    const value = queryParams[k];
    if (Array.isArray(value)) {
      acc.push(...value.map(v => [k, v]));
    } else {
      acc.push([k, value]);
    }

    return acc;
  }, []);

  keyValuePairs.forEach(([key, value], index) => {
    const prefix = index === 0 ? '' : '&';
    const val = encodeURIComponent(value);
    const keyValPair = `${prefix}${key}=${val}`;
    queryString += keyValPair;
  });

  return queryString;
};

export function decodeJWT<T = ParsedToken>(base64Url: string): T {
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(atob(base64).split('').map(c => {
    const charCode = `00${c.charCodeAt(0).toString(16)}`;

    return `%${(charCode).slice(-2)}`;
  }).join(''));

  return JSON.parse(jsonPayload);
}

export function parseJWT<T = ParsedToken>(token: string): T {
  const base64Url = token.split('.')[1];

  return decodeJWT(base64Url);
}
