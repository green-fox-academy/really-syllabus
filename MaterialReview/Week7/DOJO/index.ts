
export class List {
    private boundary: number = 3;
    private list: string[] = [];
    constructor() {}
    add(s: string): void {
        if (s === '') return;
        if (this.list.indexOf(s) >= 0) {
            this.list.splice(this.list.indexOf(s), 1);
        } else {
            if (this.list.length === this.boundary) {
                this.list.pop();
            }
        }
        this.list.unshift( s );
    }
    getItem(i: number): string {
        return this.list[i];
    }
    getList(): string[] {
        return this.list;
    }
}