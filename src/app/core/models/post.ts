export interface Post {
    userId: number;
    id?: number;
    title: string;
    body: string;
}
export class PostClass implements Post {

    userId: number;
    id?: number;
    title: string;
    body: string;

    constructor(title = null, body = null) {
        this.userId = Math.floor(Math.random() * 10);
        this.title = title;
        this.body = body;
    }
}
