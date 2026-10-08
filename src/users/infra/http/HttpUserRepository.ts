import type { User } from "../../domain/User.ts"
import type { UserRepository } from "../../domain/UserRepository.ts"


export class HttpUserRepository implements UserRepository {
    signUp(user: User): void {
        console.log(user)
    }
}
