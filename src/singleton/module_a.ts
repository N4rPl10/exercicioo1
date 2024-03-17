import { MyDatabaseMethod } from "./db/my-database-metodo";

const myDatabase = MyDatabaseMethod;

myDatabase.add({ name: 'Roberto', age: 30 });
myDatabase.add({ name: 'Joana', age: 50 });
myDatabase.add({ name: 'Luíza', age: 25 })

export { myDatabase };