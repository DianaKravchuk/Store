## Installation

To install the required dependencies and run the application, follow these steps:

1. Clone the repository:

```bash
# HTTPS
   git clone https://github.com/DianaKravchuk/Store.git
   
# SSH
    git clone git@github.com:DianaKravchuk/Store.git

   cd Store
```

2. Create and activate a virtual environment:

```bash
   python -m venv venv
   source venv/bin/activate  # For Unix

   venv\Scripts\activate  # For Windows
```

3. Install the dependencies:

```bash
    pip install -r requirements.txt
```

## Project Structure

```
Store/
│└── store_backend/
│   ├── config/ 
│   │   ├── __init__.py
│   │   └── asgi.py
│   │   └── settings.py
│   │   └── urls.py
│   │   └── wsgi.py
│   │
│   ├── users/
│   │   ├── migrations/
│   │   │   └── __init__.py
│   │   │
│   │   ├── __init__.py
│   │   └── models.py
│   │   └── admin.py
│   │   └── tests.py
│   │   └── views.py
│   │   └── apps.py
│   │
│   ├── manage.py
│   └── requirements.txt
│
├── .gitignore
└── README.md

```
