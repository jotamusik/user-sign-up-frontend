import "./App.css"
import { UserSignUpContainer } from "./users/components/UserSignUpContainer.tsx"
import { UserSignUpProvider } from "./users/components/UserSignUpProvider.tsx"
import { SignUpUserUseCase } from "./users/application/SignUpUserUseCase.ts"
import { HttpUserRepository } from "./users/infra/http/HttpUserRepository.ts"


function App() {
    return (
        <UserSignUpProvider signUpUserUseCase={new SignUpUserUseCase(new HttpUserRepository())}>
            <section id="center">
                <UserSignUpContainer/>
            </section>
        </UserSignUpProvider>
    )
}

export default App
