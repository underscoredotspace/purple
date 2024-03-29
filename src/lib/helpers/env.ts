interface Environment {
  API_URL: string;
  ASSETS: string;
  INVITE_CODE: string;
}

const API_URL = process.env["NEXT_PUBLIC_API_URL"];
const ASSETS = process.env["NEXT_PUBLIC_ASSETS"];
const INVITE_CODE = process.env["NEXT_PUBLIC_INVITE_CODE"];

export const env = {
  API_URL,
  ASSETS,
  INVITE_CODE,
} as Environment;
