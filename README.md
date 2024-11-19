# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.



#  Design the Interface

## JSON Editor (Left Panel):
Allows users to input or edit a JSON schema.Provides real-time syntax highlighting and validation.Displays error messages for invalid JSON.

## Form Preview (Right Panel):
Dynamically generates a responsive form based on the JSON schema.Reflects changes in real-time as the schema is edited.

# JSON Editor

##  The JSON editor must:
Support syntax highlighting.
Validate the input JSON schema in real-time.
Display user-friendly error messages for invalid JSON.

## Implementation:
Use Monaco Editor for syntax highlighting.
Validate JSON using a library like ajv or custom logic.
Display errors using a styled <p> tag.

# Form Generator
The form generator dynamically renders fields based on the JSON schema and manages form submission.

## Key Features:
Field Types: Support text, email, select, radio buttons, and textarea fields.
Validation: Ensure fields respect the schema-defined requirements (e.g., regex patterns, mandatory fields).
Real-time Updates: Update the form preview as the JSON schema changes.

## Implementation:
Use React Hook Form for handling form state and validation.
Map schema fields to React components dynamically.

# Responsive Design
Ensure the layout adapts gracefully to different screen sizes.
Stack the JSON editor and form preview vertically on smaller screens using Tailwind's responsive utilities.

# Testing
## Unit Tests with Jest.
Schema Validation: Test that the JSON validation logic correctly identifies errors.
Field Rendering: Test that fields render correctly based on the schema.

## End-to-End Tests with Playwright:
Real-Time Updates: Verify that editing the JSON schema updates the form preview in real-time.
Form Submission: Validate that form submission triggers the expected console output or success message.

# Deployment
## Host the Application:
Use Vercel or Netlify for deployment.
Push the project to a GitHub repository and connect it to the deployment service.

## README File:
Setup instructions.
Example JSON schemas.
Local development guide.
Link to the deployed application.

# Bonus Features
Copy Form JSON: Add a button to copy the form’s JSON schema to the clipboard.
Dark Mode: Utilize Tailwind’s dark utilities for dark mode styling.
Download Submissions: Implement a feature to download form submissions as a JSON file.
