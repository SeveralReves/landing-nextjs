# Proyecto de FinPro

Este proyecto incluye un backend en Python utilizando FastAPI y un frontend en Next.js. A continuación se detallan los pasos para instalar las dependencias y ejecutar ambos componentes. Este proyecto fue hecho por Gabriel Duran gabrielalexander2@gmail.com

## Requisitos Previos

Asegúrate de tener instalados los siguientes programas en tu máquina:

- [Node.js](https://nodejs.org/) (versión recomendada: LTS)
- [Python](https://www.python.org/) (versión 3.7 o superior)
- [pip](https://pip.pypa.io/en/stable/) (administrador de paquetes de Python)

## Instalación

### 1. Configuración del Backend (FastAPI)

1. Navega a la carpeta del backend:

   cd /backend

2.  Crea un entorno virtual (opcional pero recomendado):

    python3 -m venv venv

3. Activa el entorno virtual:

    source venv/bin/activate
    En Windows:
    venv\Scripts\activate

4. Instala FastAPI y Uvicorn:

    pip install fastapi uvicorn[standard]


### 2. Configuración del Front (NextJs)
1. Instala las dependencias de Next.js desde la carpeta principal:

    npm install

## Ejecución

1. Ejecutar el Backend
Desde la carpeta del backend, ejecuta el siguiente comando:

    uvicorn main:app --reload
    Esto iniciará el servidor en http://127.0.0.1:8000.

2. Ejecutar el Frontend
Desde la carpeta del frontend, ejecuta el siguiente comando:

    npm run dev


Este README proporciona una guía clara sobre cómo instalar y ejecutar el proyecto.
