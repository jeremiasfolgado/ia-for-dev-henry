from fastapi import FastAPI, HTTPException
from typing import List
from pydantic import BaseModel
from passlib.context import CryptContext
import jwt

fake_db = {"users": {}}

app = FastAPI()


class Payload(BaseModel):
    numbers: List[int]


class BinarySearchPayload(BaseModel):
    numbers: List[int]
    target: int

####################### User Management #####################

# Objetivo: Añadir un sistema de autenticación básico utilizando tokens.
# Descripción: Implementa un endpoint para la creación de usuarios y otro para el inicio de sesión. Los usuarios deben autenticarse para poder acceder a los endpoints existentes.
# Ruta Registro: /register
# Método: POST
# Entrada (Body): {"username": "user1", "password": "pass1"}
# Salida: {"message": "User registered successfully"}
# Status Code:
# 200: Registro exitoso
# 400: El usuario ya existe


class Credentials(BaseModel):
    username: str
    password: str

SECRET_KEY = "your_secret_key"
ALGORITHM = "HS256"

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


def get_password_hash(password:str):
    return pwd_context.hash(password)

def verify_password(plain_password, hashed_password):
    print(plain_password, hashed_password)
    return pwd_context.verify(plain_password, hashed_password)

def create_access_token(data: dict):
    to_encode = data.copy()
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

def get_current_user(token):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username: str = payload.get("sub")
        if username is None:
            raise HTTPException(status_code=401, detail="Unauthenticated")

        if username not in fake_db['users']:
            raise HTTPException(status_code=401, detail="User not found")

        return username
    except jwt.PyJWTError:
        raise HTTPException(status_code=401, detail="Unauthenticated")

################## /register /################################
@app.post('/register')
def register(payload: Credentials):
    username = payload.username
    password = payload.password

    if username in fake_db['users'].keys():
        raise HTTPException(status_code=400, detail="User already exists")

    fake_db['users'][username] = get_password_hash(password)
    return {"message": "User registered successfully"}

################# /login    ###################

# Ruta Login: /login
# Método: POST
# Entrada (Body): {"username": "user1", "password": "pass1"}
# Salida: {"access_token": <token_de_acceso>}
# Status Code:
# 200: Login Exitoso
# 401: Credenciales Inválidas

@app.post('/login')
def login(payload:Credentials):
    username = payload.username
    password = payload.password

    if username not in fake_db['users']:
        raise HTTPException(status_code=401, detail="Invalid credentials")

    user = fake_db['users'][username]
    if not verify_password(password, user):
        raise HTTPException(status_code=401, detail="Invalid credentials")

    access_token = create_access_token(data={"sub": username})
    return {"access_token": access_token, "token_type": "bearer"}

################## Bubble sort #################

# Bubble Sort
# Ruta: /bubble-sort
# Método: POST
# Descripción: Recibe una lista de números y devuelve la lista ordenada utilizando el algoritmo de Bubble Sort.
# Entrada: {"numbers": [lista de números]}
# Salida: {"numbers": [lista de números ordenada]}

@app.post("/bubble-sort")
def bubble_sort(payload: Payload, token: str):
    """
    Recibe una lista de números y devuelve la lista ordenada utilizando el algoritmo de Bubble Sort.
    """
    get_current_user(token)  # Verify token
    numbers = payload.numbers
    n = len(numbers)
    for i in range(n):
        for j in range(0, n - i - 1):
            if numbers[j] > numbers[j + 1]:
                numbers[j], numbers[j + 1] = numbers[j + 1], numbers[j]
    return {"numbers": numbers}

    ################################################################

    ###################  /filter-even #################################################

#     Ruta: /filter-even
# Método: POST
# Descripción: Recibe una lista de números y devuelve únicamente aquellos que son pares.
# Entrada: {"numbers": [lista de números]}
# Salida: {"even_numbers": [lista de números pares]}

@app.post("/filter-even")
def filter_even(payload: Payload, token: str):
    """
    Recibe una lista de números y devuelve únicamente aquellos que son pares.
    """
    get_current_user(token)
    numbers = payload.numbers
    even_numbers = [number for number in numbers if number % 2 == 0]
    return {"even_numbers": even_numbers}

    ################################################################

    ###################  /sum-elements #################################################

# Ruta: /sum-elements
# Método: POST
# Descripción: Recibe una lista de números y devuelve la suma de sus elementos.
# Entrada: {"numbers": [lista de números]}
# Salida: {"sum": suma de los números}

@app.post("/sum-elements")
def sum_elements(payload: Payload, token: str):
    """
    Recibe una lista de números y devuelve la suma de sus elementos.
    """
    get_current_user(token)
    numbers = payload.numbers
    return {"sum": sum(numbers)}

    ################################################################

    ###################  /max-value #################################################

#     Ruta: /max-value
# Método: POST
# Descripción: Recibe una lista de números y devuelve el valor máximo.
# Entrada: {"numbers": [lista de números]}
# Salida: {"max": número máximo}

@app.post("/max-value")
def max_value(payload: Payload, token: str):
    """
    Recibe una lista de números y devuelve el valor máximo.
    """
    get_current_user(token)
    numbers = payload.numbers
    return {"max": max(numbers)}

    ################################################################

    ###################  /binary-search #################################################

#     Ruta: /binary-search
# Método: POST
# Descripción: Recibe un número y una lista de números ordenados. Devuelve true y el índice si el número está en la lista, de lo contrario false y -1 como index.
# Entrada: {"numbers": [lista de números], "target": int}
# Salida: {"found": booleano, "index": int}

def binary_search_iterative(number, target):
    low = 0
    high = len(number) - 1

    while low <= high:
        mid = (low + high) // 2

        if number[mid] == target:
            return {"found": True, "index": mid}

        elif number[mid] < target:
            low = mid + 1

        else:
            high = mid - 1

    return {"found": False, "index": -1}


@app.post("/binary-search")
def binary_search(payload: BinarySearchPayload, token: str):
    """
    Recibe un número y una lista de números ordenados. Devuelve true y el índice si el número está en la lista, de lo contrario false y -1 como index.
    """
    get_current_user(token)
    numbers = payload.numbers
    target = payload.target
    return binary_search_iterative(numbers, target)

    ################################################################
