import * as fs from 'fs/promises';

export class JsonFileReader {

    async readJsonFile<T>(filePath: string): Promise<T> {
      try {
        const fileContent = await fs.readFile(filePath, 'utf-8');
        return JSON.parse(fileContent) as T;
      } catch (error) {
        console.error(`Error reading JSON file: ${error}`);
        throw error; // Re-throw the error to allow the caller to handle it
      }
    }
  }