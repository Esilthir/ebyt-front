export class Genre {
    name: string;
    code: string;

    constructor(name?:string, code?:string) {
        this.name = name === undefined ? null : name;
        this.code = code === undefined ? null : code
    }
}
