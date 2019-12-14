import * as fs from 'fs';

export class Store {
    constructor(private baseFolder: string) {
        
    }

    public read(file: string): string {
        return fs.readFileSync(`${this.baseFolder}${file}`, 'utf8');
    }

    public write(file: string, data: string): void {
        fs.writeFileSync(`${this.baseFolder}${file}`, data, 'utf8');
    }
}
