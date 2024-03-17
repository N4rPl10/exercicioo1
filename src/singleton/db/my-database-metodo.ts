import { User } from "../interface/user";

export class MyDatabaseMethod {
    private static users: User[] = []; 
  static User: any;

    static add(user: User): void {
        MyDatabaseMethod.users.push(user);
    }

    static remove(index: number): void {
        if (index >= 0 && index < MyDatabaseMethod.users.length) {
            MyDatabaseMethod.users.splice(index, 1);
        }
    }

    static show(): void {
        for (const user of MyDatabaseMethod.users) {
            console.log(user);
        }
    }
}