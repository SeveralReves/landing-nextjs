from fastapi import FastAPI, Form
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

# Configurar CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Origen permitido (tu frontend en Next.js)
    allow_credentials=True,
    allow_methods=["*"],  # Permitir todos los métodos (GET, POST, etc.)
    allow_headers=["*"],  # Permitir todos los encabezados
)

# Ruta principal
@app.get("/")
def read_root():
    return {"message": "Hello World"}

# Endpoint para recibir el formulario
@app.post("/submit-form/")
def submit_form(
    full_name: str = Form(...),
    email: str = Form(...),
    message: str = Form(...),
    company_address: str = Form(...),
    company_phone: str = Form(...),
    company_email: str = Form(...)
):
    return {
        "status": "success",
        "message": "Formulario enviado correctamente",
        "data": {
            "full_name": full_name,
            "email": email,
            "message": message,
            "company_address": company_address,
            "company_phone": company_phone,
            "company_email": company_email
        }
    }
