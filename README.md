# 🎬 WebbyLab Movies

A single-page web application for managing a list of movies. This app is built as a frontend client for the [WebbyLab Movies API](https://hub.docker.com/r/webbylabhub/movies).

## 📌 Project Overview

This application allows you to:

- Add a movie
- Delete a movie
- View movie details
- View an alphabetically sorted list of movies
- Search for a movie by title and actor's name
- Import movies from a `.txt` file via a web interface

### Technologies Used:

- **React + TypeScript**
- **Redux Toolkit**
- **React-hook-form + Yup**
- **Vite**
- **Docker + NGINX**
- **Environment variables for configuration**

## 🚀 Quick Start

### Run the Dockerized App

```bash
docker run --name movies -p 3000:80 -e API_URL=http://localhost:8000/api/v1/movies hospodinova/movies
```

Replace API_URL with the actual backend server address if it's different. And open application at: 

```bash
http://localhost:3000
```
🐳 DockerHub Image: https://hub.docker.com/r/hospodinova/movies

### 💻 Local Development

If you'd like to run the project locally for development:

1. Clone the repository
```bash
git clone https://github.com/hospodinova/webbylab-movies.git
cd webbylab-movies
```

2. Install dependencies
```bash
npm install
```
3. Set environment variable

Create a .env file in the root directory with the following content:
```bash
VITE_API_URL=http://localhost:8000/api/v1/movies
```

and add your VITE_AUTH_TOKEN

Make sure your backend is running on the specified API_URL.

4. Run the development server
```bash
npm run dev
```


Then visit:

```bash
http://localhost:5173
```
