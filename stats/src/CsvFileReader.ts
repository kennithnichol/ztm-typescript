import fs from 'fs';
import { dateStringToDate } from './utils';
import { MatchResult } from "./MatchResult";

export class CsvFileReader {
  data: string[][] = [];

  constructor(public filename: string) { }

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8'
      })
      .split('\n')
      .map(
        (line: string): string[] => {
          return line.split(',')
        }
      ).map(
        (row: string[]): any => {
          return [
            dateStringToDate(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5] as MatchResult,
            row[6]
          ]
        }
      )

  }


}