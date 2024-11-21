# Spring Boot and Angular Project

This repository contains a **Spring Boot** application (backend) and an **Angular** application (frontend). Follow the instructions below to set up the required environments and adhere to the development conventions.

---

## Required Versions

Before setting up the project, ensure you have the following versions installed:

- **Spring Boot**: `3.3.4`
- **Angular**: `18.2.9`
- **Java**: `21`
- **Node.js**: `20.13.1`

---

## Angular Project Setup (Frontend)

The Angular project is located in the `UI` directory. Below are the setup instructions and development guidelines.

### **Setup Instructions**

1. **Install Node.js**:  
   - Download and install Node.js version `20.13.1` from the [official website](https://nodejs.org/).
   - Verify the installation:
     ```bash
     node -v
     ```
     Ensure the version matches `20.13.1`.

2. **Install Angular CLI**:  
   - Install Angular CLI version `18.2.9` globally:
     ```bash
     npm install -g @angular/cli@18.2.9
     ```
   - Verify the installation:
     ```bash
     ng version
     ```

3. **Install Project Dependencies**:  
   - Navigate to the `UI` directory:
     ```bash
     cd UI
     ```
   - Install the required dependencies:
     ```bash
     npm install
     ```

4. **Run the Development Server**:  
   - Start the Angular application:
     ```bash
     ng serve
     ```
   - Open your browser and visit:
     ```
     http://localhost:4200
     ```

### **Development Guidelines**

1. **Component Naming**:  
   - Use **hyphenated case** for component names (e.g., `user-profile` instead of `UserProfile`).
   - Avoid spaces in component names.  
     Example command:
     ```bash
     ng generate component app/views/files/your-component-name --standalone=false
     ```

2. **Component Directory Structure**:  
   - Place all components inside the `app/views/files` directory.

3. **Standalone Option**:  
   - Always use `--standalone=false` when generating components to ensure compatibility with the project structure:
     ```bash
     ng generate component app/views/files/component-name --standalone=false
     ```

---

## Spring Boot Project Setup (Backend)

The Spring Boot project is located in the `Backend` directory. Below are the setup instructions and development guidelines.

### **Setup Instructions**

1. **Install Java**:  
   - Download and install Java version `21` from the [official Oracle website](https://www.oracle.com/java/technologies/javase-downloads.html) or use a compatible OpenJDK version.
   - Verify the installation:
     ```bash
     java -version
     ```
     Ensure the version matches `21`.

2. **Install Maven**:  
   - Maven is included in the Spring Boot project wrapper (`mvnw`), so no additional installation is required.  
   - Verify Maven installation:
     ```bash
     mvn -v
     ```

3. **Run the Project**:  
   - Navigate to the `Backend` directory:
     ```bash
     cd Backend
     ```
   - Run the project using Maven:
     ```bash
     ./mvnw spring-boot:run
     ```
   - Access the backend services at:
     ```
     http://localhost:8080
     ```

### **Development Guidelines**

1. **File Naming**:  
   - Use **camel case** for file names (e.g., `UserProfileController`, `OrderService`).

2. **Package Structure**:  
   - Follow the naming convention:
     ```
     com.<packageName>
     ```
   - Examples:
     ```
     com.myapp.users
     com.myapp.orders
     ```

---

## Contributing

1. Follow the naming conventions and directory structures outlined above.
2. Test your changes thoroughly before committing.
3. Submit a pull request for code reviews.

---
