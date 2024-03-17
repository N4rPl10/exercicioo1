import { User } from "../interface/user";
import { MyDatabaseMethod } from "./my-database-metodo";

const users: User[] = [];

export const MyDatabaseFunctionfunction = ( function () {
    return {
        add(user: User): void {
            users.push(user)
        },

        remove(index: number): void {
            if (index >= 0 && index < MyDatabaseMethod.User.length) {
                MyDatabaseMethod.User.splice(index, 1);
            }
        },

        show(): void {
            for (const user of users) {
                console.log(user.name)
            }
        }
    }
})