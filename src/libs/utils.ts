import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import {INFO_URL as INFO_URL_TYPE, REPO_OWNER, REPO_NAME} from './types';
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const INFO_URL = (ID: string): INFO_URL_TYPE => {
  return `https://github.com/${REPO_OWNER}/${REPO_NAME}/blob/master/events/${ID}/info.json`;
}

export const API_URL = process.env.API_HOST || "http://localhost:6969";

export const FOLDER_URL = `https://github.com/${REPO_OWNER}/${REPO_NAME}/tree/master/events`;
export const FOLDER_INFO_URL = `https://github.com/${REPO_OWNER}/${REPO_NAME}/tree/master/info.json`;


export const PARSE = (data: Array<string>): Record<string, any> => {
  const jsonString: string = data.join("").replace(/\s*(\{|\}|\[|\]|,|:)\s*/g, '$1');
  const jsonObject: Record<string, any> = JSON.parse(jsonString);
  return jsonObject;
}
