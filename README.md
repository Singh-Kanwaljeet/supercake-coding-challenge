# Supercake Frontend Coding Challenge

## Project Overview

This is a Next.js-based frontend project using TypeScript, Tailwind CSS, and React. The project follows a structured component-based architecture and includes API integration.

## Tech Stack

- **Next.js** 15.1.5
- **TypeScript** 5.x
- **Tailwind CSS** 3.4.1
- **Framer Motion** for animations
- **ESLint & Prettier** for code linting and formatting

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (Latest LTS recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/../supercake-frontend.git
   ```
2. Navigate to the project directory:
   ```sh
   cd supercake-frontend
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
   or
   ```sh
   yarn install
   ```

### Running the Development Server

Start the local development server:

```sh
npm run dev
```

Or if using yarn:

```sh
yarn dev
```

The app will be available at `http://localhost:3000`.

### Building for Production

To create a production build:

```sh
npm run build
```

To start the production server:

```sh
npm run start
```

## Scripts

The `package.json` defines the following scripts:

- `dev` – Runs the development server
- `build` – Builds the project for production
- `start` – Starts the production server
- `lint` – Runs ESLint
- `format` – Formats the code using Prettier
- `format:check` – Checks formatting
- `typecheck` – Runs TypeScript type checks
- `checks` – Runs type check, lint, and format check

## Environment Variables

Configure your environment variables in `.env.local`:

```
API_BASE_URL=http://localhost:3000/api
```

## Linting & Formatting

To lint the project:

```sh
npm run lint
```

To format the code:

```sh
npm run format
```

## License

This project is licensed under the MIT License.

---

Feel free to update this README to match any additional details or changes in the project!
