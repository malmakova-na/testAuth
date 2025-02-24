# Authentication form application

A simple app built with React, Redux, and React Router. This project includes a login form that validates user credentials using a mocked API call.

## Features

- **Authentication Form:** A semantic, accessible login form that uses proper HTML elements such as `<form>`, `<label>`, and `<button>`.
- **Form Validation:** Built-in browser validation with `type="email"`, `minLength`, and `required` attributes.
- **State Management:** Uses Redux for handling authentication state.
- **Protected Routing:** Uses React Router to secure route.
- **Mocked API Calls:** Simulates server-side authentication using a mock function. Use email = "test@example.com" and password = "secret123" to log in.
- **Error Handling:** Displays error messages on failed login attempts.
- **Disabled State:** Prevents double form submission by disabling the submit button during an API call.
