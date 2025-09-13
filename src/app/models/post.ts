import { DateTime } from "luxon";

export class Post {
    constructor(
        public id: string,
        public author: string,
        public title: string,
        public date: DateTime,
        public content: string
    ){}
}
