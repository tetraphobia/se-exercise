# SE Exercise
This is a take home exercise as part of a job interview process.

This API is intended to store game saves. Along with player information, each board is saved in the form of a nested array of integers. Each integer corresponds to an index of a list of tile types, which the frontend is responsible for rendering.

## Requirements
- Node.js 18
- Yarn
- MongoDB Server

### Nodejs
You can download version 18 of Node.js on their official website.
Alternatively, a tool like [nvm](https://github.com/nvm-sh/nvm) can help you manage multiple local Node.js versions.
https://nodejs.org/en/download/
### Yarn
Yarn can be installed through corepack.
```bash
corepack enable
corepack prepare yarn@stable --activate
```

### MongoDB
Install MongoDB through your package manager of choice, use a third party host, or deploy it through Docker.
https://www.mongodb.com/try/download/community

## Setup
Dependencies are managed using Yarn. Install them as such.
```bash
yarn install
```

## Running
This application always runs in development mode. You can run the application using this yarn script.
```bash
yarn start
```
The application can then be accessed at http://localhost:3000/

## Configuration
All configurations are handled using a `.env` file. First, copy the `.env.example` file to `.env`, then edit it with your desired configurations.
```bash
MONGO_URI=mongodb://your:mongodb@uri:27017/of_preference
PORT=3000
```
