import { User } from "./User";

export class Authentication{
    constructor(
        public accessToken: string,
        public user: User
    ){}
}