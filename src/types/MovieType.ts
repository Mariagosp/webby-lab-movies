export type MovieType = {
  id: number,
  title: string,
  releaseYear: number,
  format: string
  // format: 'VHS' | 'DVD' | 'Blu-ray'
  actors: string[],
}

export type FormatType = 'VHS' | 'DVD' | 'Blu-ray'