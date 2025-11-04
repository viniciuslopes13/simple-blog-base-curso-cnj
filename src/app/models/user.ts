import { UUIDTypes } from "uuid";

export class User {
    constructor(
        public email: string,
        public id: UUIDTypes,
        public name: string,
        public isActive: boolean
    ){}
}