function CreateUser(name: string, ci: string, email: string){
    return {name, ci, email}
}

const User = CreateUser('Yovana', '8617009', 'Yovanaedith2000@gmail.com');
console.log(User);
