export class User {
    private constructor(
        public readonly name: string,
        public readonly email: string
    ) {}

    static from(name: string, email: string): User {
        if (name.trim() === '') {
            throw new Error("User must have a name")
        }
        if (!email.includes('@domain.com')) {
            throw new Error("User must have a valid email")
        }
        return new User(name, email)
    }
}
