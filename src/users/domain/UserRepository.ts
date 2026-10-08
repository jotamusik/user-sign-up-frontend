import { User } from "./User.ts"


/*
 Interfaz que permite desacoplar cualquiera que dependa de ella de la implementacion
 concreta y que asi sea un contrato que no se pueda romper facilmente
*/
export interface UserRepository {
    signUp(user: User): void
}
