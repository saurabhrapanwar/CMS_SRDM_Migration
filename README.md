# Spring Boot and Angular Project

This repository contains a **Spring Boot** application (backend) and an **Angular** application (frontend). Follow the instructions below to set up and follow the development conventions for each project.

---

## Angular Project Setup (Frontend)
The Angular project is located in the `UI` directory. Below are the setup instructions and development guidelines.

### **Setup Instructions**
1. Navigate to the `UI` directory:
    cd UI
   
3. Install dependencies:
   npm install
   
4. Start the development server:
   ng serve
   
6. Access the application in your browser at:
   http://localhost:4200

### Development Guidelines
1. Component Naming:  
   - Use *hyphenated case* (e.g., `user-profile` instead of `UserProfile`) when creating components.
   - Avoid spaces in component names.
   ng generate component app/views/files/your-component-name --standalone=false

2. Component Directory Structure:  
   - Place all components inside the `app/views/files` directory.

3. Standalone Option:  
   - Always use `--standalone=false` while generating components to ensure compatibility with the existing structure.
   ng generate component app/views/files/component-name --standalone=false

---

## Spring Boot Project Setup (Backend)
The Spring Boot project is located in the `Backend` directory. Below are the setup instructions and development guidelines.

### Setup Instructions
1. Navigate to the `Backend` directory:
   cd Backend
   
2. Open the project in your favorite IDE (e.g., IntelliJ IDEA, Eclipse).
3. Run the project using the IDE's Spring Boot run configuration or via the terminal:
   ./mvnw spring-boot:run

4. Access the backend services at:
   http://localhost:8080


### Development Guidelines
1. File Naming:  
   - Use camel case for file names (e.g., `UserProfileController`, `OrderService`).

2. Package Structure:  
   - Ensure all new packages follow the naming convention:
     com.<packageName>
     
   - Example:
     com.myapp.users
     com.myapp.orders

---

## Contributing
1. Follow the naming conventions and directory structures outlined above.
2. Test your changes thoroughly before committing.
3. Submit a pull request for code reviews.
