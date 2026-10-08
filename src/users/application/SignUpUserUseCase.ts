import type { UserRepository } from "../domain/UserRepository.ts"
import { User } from "../domain/User.ts"


export interface SignUpUserRequestDTO {
    email: string
    name: string
}

export class SignUpUserUseCase {
    constructor(
        private userRepository: UserRepository,
    ) {}

    execute(signUpUserDTO: SignUpUserRequestDTO): void {
        // Aqui realmente para mi la situacion ideal seria manejar los errores
        // de otra manera sin lanzar excepciones para que fuera mas explicito
        const user = User.from(signUpUserDTO.name, signUpUserDTO.email)
        this.userRepository.signUp(user)
    }
}
