import { UserSignUpForm } from "./UserSignUpForm.tsx"
import { useSignUpUserUseCase } from "./UserSignUpProvider.tsx"
import { useState } from "react"
import type { SignUpUserRequestDTO } from "../application/SignUpUserUseCase.ts"


/*
 Componente gestor del estado y de la interaccion con respecto al
 formulario de registro de usuario
 A la hora de probarlo, se puede hacer inyectando a traves del provider
 un mock del caso de uso para comprobar que se esta llamando o lanzando
 X excepcion
*/
export function UserSignUpContainer() {
    const signUpUserUseCase = useSignUpUserUseCase()
    const [formErrorMessage, setFormErrorMessage] = useState<string>("")
    const [isLoading, setIsLoading] = useState<boolean>(false)

    function errorMessage(message: string) {
        setFormErrorMessage(message)
        setIsLoading(false)
    }

    const handleSubmitForm = (data: SignUpUserRequestDTO) => {
        setIsLoading(true)

        // Posibles validaciones de los datos del formulario
        // en caso de ser necesario
        if (data.email === "") {
            errorMessage("Email is required")
            return
        }
        if (data.name === "") {
            errorMessage("Name is required")
            return
        }


        /*
         Con programacion funcional, la gestion de errores seria mas
         explicita y nos permitiria gestionar mejor los tipos de
         errores que podriamos tener
        */
        try {
            signUpUserUseCase.execute({
                name: data.name,
                email: data.email,
            })
        } catch(e: any) {
            errorMessage(e.message)
        }


        setTimeout(() => {
            setIsLoading(false)
        }, 4000)
    }
    return (
        <>
            <UserSignUpForm
                onSubmit={handleSubmitForm}
                formErrorMessage={formErrorMessage}
            />
            {isLoading ? <>Loading.....</> : <></>}
        </>
    )
}
