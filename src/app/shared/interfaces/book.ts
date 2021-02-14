import { languageCode } from '../types';

export interface Book {
    id: number;
    name: string;
    isbn: string;
    image: string;
    language: languageCode;
    publishedDate: string;
    publisher: string;
    numberPages?: number;
    summary: string;
    featured: boolean;
}

