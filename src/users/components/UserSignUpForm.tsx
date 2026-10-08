import * as React from "react"
import type { SignUpUserRequestDTO } from "../application/SignUpUserUseCase.ts"


interface UserSignUpFormProps {
    /*
     Aqui no hay problema que el componente conozca el DTO de la capa de aplicacion
     porque que las capas de infraestructura/presentacion conozcan la capa de
     aplicacion o dominio no supone un problema. El dia que necesiten modelos distintos
     podran tenerlos sin problema
    */
    onSubmit: (data: SignUpUserRequestDTO) => void,
    formErrorMessage: string
}

/*
 Componente representacional del formulario de registro de usuario
 Podria en un futuro ser mas generico y no estar acoplado a registro exclusivamente
 (no tomar esa decision hasta que sea necesario nos simplifica la vida)
 A la hora de probar que el formulario fucniona, es muy facil mediante
 tests unitarios, ya que no tiene dependencias externas y es un componente puro
*/
export function UserSignUpForm({ onSubmit, formErrorMessage }: UserSignUpFormProps) {

    const [name, setName] = React.useState<string>("")
    const [email, setEmail] = React.useState<string>("")

    return (
        <>
            <input type="text"
                   placeholder="Enter your name"
                   value={name}
                   onChange={(e) => setName(e.target.value)}
            />
            <input type="email"
                   placeholder="Enter your email"
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
            />
            {formErrorMessage !== '' && <p style={{ color: 'red' }}>{formErrorMessage}</p>}
            <button onClick={() => onSubmit({ name, email })}>Submit</button>
        </>
    )
}
