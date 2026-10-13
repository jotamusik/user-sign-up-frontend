# User SignUp Kata - Frontend

This is a simple frontend application for user signup. 
It allows users to create an account by providing their name and email. 
The application includes form validation and error handling to ensure that 
the user inputs are valid before submission. Also, it uses dependency injection to make easier
to test the components.

## How to Run the Application

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the dependencies: `npm install`
4. Start the development server: `npm run dev`
5. Open your web browser and go to `http://localhost:5173` to see the application running.

## How it´s done
Used bounded contexts to separate the different parts of the application.
- **User Context**: Contains the user signup form and handles user input validation.

Used hexagonal architecture to separate the application into different layers:
- **Domain Layer**: Contains the business logic and domain entities.
- **Application Layer**: Contains the application services and use cases.
- **Infrastructure Layer**: Contains the implementation of the interfaces defined in the domain layers.
- **Presentation Layer**: Contains the user interface components and handles user interactions.
- **Dependency Injection**: Used to inject dependencies into the components, making it easier to test and maintain the code.
