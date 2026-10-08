import * as React from 'react'
import { SignUpUserUseCase } from "../application/SignUpUserUseCase.ts"
import { HttpUserRepository } from "../infra/http/HttpUserRepository.ts"

interface UserSignUpProviderProps {
    children: React.ReactNode
    signUpUserUseCase: SignUpUserUseCase
}

export const UserSignUpContext = React.createContext<SignUpUserUseCase>(new SignUpUserUseCase(new HttpUserRepository()))

export function UserSignUpProvider({ children, signUpUserUseCase }: UserSignUpProviderProps) {
    return (
        <UserSignUpContext.Provider value={signUpUserUseCase}>
            {children}
        </UserSignUpContext.Provider>
    )
}

export function useSignUpUserUseCase(): SignUpUserUseCase {
    const context = React.useContext(UserSignUpContext)
    if (!context) {
        throw new Error('useSignUpUserUseCase must be used within a UserSignUpProvider')
    }
    return context
}
