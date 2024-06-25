# Gen-AI--SQL-Search

## Prerequisites

Ensure you have the following software installed on your system:

- Node.js (v14.x or later)
- npm (v6.x or later)
- Python (v3.8 or later)
- virtualenv


## Installation

Clone the repository and navigate into the project directory:

```bash
git clone https://github.com/ilina-jayalath/Gen-AI-BD-Search.git
cd Gen-AI-BD-Search
```

## Running the Application

- **Starting the Frontend**
  
 Navigate to the frontend directory, install the dependencies, and start the development server:

 ```bash
cd frontend
npm install
npm start

```

- **Starting the Backend**
  
Navigate to the backend directory, install the dependencies, and start the server:

 ```bash
cd backend
npm install
node server.js

```

	

- **Starting the Langchain Service**
  
Navigate to the langchain_service directory, set up the virtual environment, install the dependencies, and run the server:


```bash
cd langchain_service
python -m venv venv
source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
pip install -r requirements.txt

```


- Create a .env file in the langchain_service directory and add your Google API key:
 
```bash
GOOGLE_API_KEY=your_google_api_key
```

- Run the Langchain server:

```bash
 python main.py
```

## Environment Variables
Ensure you create a .env file in the langchain_service directory with the following content:

```bash
GOOGLE_API_KEY=your_google_api_key
```

Replace your_google_api_key with your actual Google API key.


<br/><br/>
## Author

Created by 👨🏻‍💻 &nbsp;Dilina Jayalath.
