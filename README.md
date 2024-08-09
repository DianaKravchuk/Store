# Store Project

## Project Description

**Store** is a web application for managing an online store, comprising both frontend and backend components. The main goal of the project is to create a platform that allows users to shop online, manage orders and inventory, and provides administrative interfaces.

## Branch Structure

The project is organized into several branches to facilitate efficient development:

- **Backend:** [backend](https://github.com/DianaKravchuk/Store/tree/backend)
  - Contains the code related to the server-side of the application.
  - Main technologies: Django, Django REST Framework, PostgreSQL.
  
- **Frontend:** [frontend](https://github.com/DianaKravchuk/Store/tree/frontend)
  - Contains the code related to the client-side of the application.
  - Main technologies: React, Typescript, Redux, Tailwind.

- **Development:** [development](https://github.com/DianaKravchuk/Store/tree/development)
  - Main branch for integrating and testing new features.
  - Changes from the `backend` and `frontend` branches are merged into this branch.

## Key Technologies

- **Backend:** Django, Django REST Framework, PostgreSQL
- **Frontend:** React, Typescript, Redux, Tailwind
- **DevOps:** Docker, Docker Compose, Git

## Installation and Setup

### Backend

1. Clone the repository and switch to the `backend` branch:

    ```bash
    git clone -b backend https://github.com/DianaKravchuk/Store.git
    cd Store
    ```

2. Create a virtual environment and install dependencies:

    ```bash
    python3 -m venv venv
    source venv/bin/activate
    pip install -r requirements.txt
    ```

3. Apply migrations and start the server:

    ```bash
    python manage.py migrate
    python manage.py runserver
    ```

### Frontend

1. Switch to the `frontend` branch and install dependencies:

    ```bash
    git checkout frontend
    npm install
    ```

2. Start the application:

    ```bash
    npm start
    ```

## Contributing

We welcome contributions to the project. Please create new branches from `backend` or `frontend` to develop new features or fix bugs. Once your work is complete, create a Pull Request to the `development` branch.

---
