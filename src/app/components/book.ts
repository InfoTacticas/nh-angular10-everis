export interface IBook {
  id: number;
  name: string;
  isbn: string;
  image: string;
  language: 'es' | 'en';
  publishedDate: string;
  publisher: string;
}

export interface IBookAgrupado {
  id: number;
  name: string;
  cantidad: number;
}