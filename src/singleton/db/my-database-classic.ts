import { User } from '../interface/user';
import { MyDatabaseMethod } from './my-database-metodo';

export class MyDatabaseClassic {
  private static _instance: MyDatabaseClassic | null = null;
  private users: User[] = [];

  private constructor() {}

  static get instance(): MyDatabaseClassic {
    if (MyDatabaseClassic._instance === null) {
      MyDatabaseClassic._instance = new MyDatabaseClassic();
    }

    return MyDatabaseClassic._instance;
  }

  add(user: User): void {
    this.users.push(user);
  }

  deletarUsuario(index: number): void {
    if (index >= 0 && index < MyDatabaseMethod.User.length) {
      MyDatabaseMethod.User.splice(index, 1);
    }
}

  show(): void {
    for (const user of this.users) {
      console.log(user);
    }
  }
}