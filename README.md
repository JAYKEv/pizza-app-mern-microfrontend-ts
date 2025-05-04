<div align="center">
  <h1>Pizza Delivery Web App (Micro-Frontend) - MERN</h1>
</div>

### Demo Link

- Main App : https://d91vylvrr1oaq.cloudfront.net/
- Admin Panel : https://d1v43ctua56grx.cloudfront.net/



<!-- TechStack -->

### :space_invader: Tech Stack

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://www.typescriptlang.org/">Typescript</a></li>
    <li><a href="https://reactjs.org/">React.js</a></li>
    <li><a href="https://mantine.dev/">Mantine UI</a></li>
    <li><a href="https://redux-toolkit.js.org/">Redux Toolkit</a></li>
    <li><a href="https://tanstack.com/query/v3/">React Query</a></li>
  </ul>
</details>

<details>
  <summary>Server</summary>
  <ul>
    <li><a href="https://expressjs.com/">Express</a></li>
    <li><a href="https://nodemailer.com/about/">Node Mailer</a></li>
  </ul>
</details>

<details>
<summary>Database</summary>
  <ul>
    <li><a href="https://www.mongodb.com/">MongoDB</a></li>
  </ul>
</details>

### Nx Graph


<!-- Features -->

### :dart: Features

- Basic signup and login functionalities with email OTP-based authentication.
- An admin panel allows administrators to manage coupons, products, and categories.
- Admins can accept orders and update their status.
- Image uploads are supported using ImageKit.
- Users can view their order history, receive live updates, and manage multiple addresse

### 📁 Project Structure

The project is using nx monorepo.

- **`apps`**: contains micro frontend apps with its host.
- **`lib`**: contains shared UI , react query client and redux store between micro fontend apps.


<!-- Env Variables -->

### :key: Environment Variables

To run this project, you will need to add the following environment variables to your .env file. you can refer .env.example file for the references.

Variables
`NX_PORT_API`
`NX_MONGODB_URL`
`NX_IMAGE_KIT_URL`
`NX_IMAGE_KIT_PUBLIC_KEY`
`NX_IMAGE_KIT_PRIVATE_KEY`
`NX_EXPIRE_OTP`
`NX_GMAIL_PASS`
`NX_GMAIL_USER`
`NX_JWT_COOKIE_EXPIRES`
`NX_JWT_EXPIRE`
`NX_JWT_SECRET`
`NX_CLIENT_HOST`
`NX_CLIENT_ADMIN`

<!-- Getting Started -->

## :toolbox: Getting Started

### System Requirements

- git v2.13 or greater
- nodejs `14 || 16 || 18`
- npm v8.16.0 or greater

All of these must be available in your `PATH`. To verify things are set up
properly, you can run this:

```shell
git --version
node --version
npm --version
```

<!-- Prerequisites -->

### :bangbang: Prerequisites

This project uses pnpm as package manager

```bash
 npm install --global pnpm
```

<!-- Run Locally -->

### :running: Run Locally

Clone the project

```bash
  https://github.com/ashishkk22/pizza-app-mern-microfrontend-ts.git
```

Go to the project directory

```bash
  cd pizza-app-mern-microfrontend
```

Install dependencies and add the required environment variables in the .env (reference .env.example)

```bash
  pnpm install
```

To start the host app in development run.

```bash
  pnpm nx serve host --devRemotes="cart,shop,auth"
```

To start the admin app in development run.

```bash
  pnpm nx serve admin --devRemotes="auth"
```

To start the server in development run

```bash
  nx serve api
```

<!-- Contact -->

## :handshake: Contact

Jaykumar Kevadiya - jaykumarkevadiya3629@gmail.com
