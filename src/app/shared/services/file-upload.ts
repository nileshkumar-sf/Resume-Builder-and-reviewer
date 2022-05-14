export class FileUpload {
    key: string;
    file: File;
    name: string;
    url: string;
    progress: number;
    createdAt: Date = new Date();
    constructor(file: File) {
        this.file = file;
        this.key = this.createdAt.getTime().toString();
        this.name = file.name;
        this.url = '';
        this.progress = 0;
    }
}
