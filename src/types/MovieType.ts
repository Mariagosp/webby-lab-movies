import type { IconKey } from "../utils/emojiIcons"

export type Movie = {
  id: number,
  title: string,
  releaseYear: number,
  format: FormatType
}

export type MovieWithIcon = Movie & { icon: IconKey };

export type MovieType = {
  id: number,
  title: string,
  releaseYear: number,
  format: FormatType
  actors: string[],
  icon: IconKey
}

export type MovieWithDetails = {
  id: number;
  title: string;
  year: number;
  format: FormatType;
  actors: ActorsType[],
  createdAt: string,
    updatedAt: string,
}

export type ActorsType = {
  id: number;
  name:  string;
  createdAt: string;
  updatedAt: string;
}

export type FormatType = 'VHS' | 'DVD' | 'Blu-Ray'

export enum FormatEnum {
  VHS = 'VHS',
  DVD = 'DVD',
  'Blu-Ray' = 'Blu-Ray'
}

export enum FormatEmojisEnum {
  VHS = '🎞️',
  DVD = '💿',
  'Blu-Ray' = '🖥',
}
