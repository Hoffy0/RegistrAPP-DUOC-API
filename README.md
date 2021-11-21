# REGISTR APP (API)

_Esta API esta construida en [NestJS](https://nestjs.com/) la cual permite registar usuarios y asistencia de clases atravez de un codigo QR._

## Comenzando 🚀

_Siguiendo estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo, pruebas o evaluacion del proyecto._


### Pre-requisitos 📋

* NestJS
```
$ npm i -g @nestjs/cli
```
* MongoDB
* Postman (o algun software para probar los endpoints)
* Visual Studio Code (u otro editor de codigo)

### Instalación 🔧

_Clonar el repositorio_

```
$ git clone https://github.com/Hoffy0/RegistrAPP-DUOC-API.git
```

_Moverse al directorio del proyecto_

```
$ cd ./RegistrAPP-DUOC-API/
```

_Instalar dependencias del proyecto_

```
$ npm ci
```

_Crear el archivo .env en la raiz del proyecto y editarlo_

PowerShell ( Windows )
```
$ ni .env && code .env
```

Linux / MacOS
```
$ touch .env && code .env
```
```
Crear la variable de entorno MONGO_URI y asignar la cadena de conexion a la base de datos (MongoDb) creada
anteriormente.
``` 

_Correr el proyecto_
```
$ npm run start
```

## End-Points

### SSO 👤
_Registrar Usuarios_
```
Ruta: http://TU_IP:3000/sso/register
Metodo: POST
Data Format: JSON
{
    "token":     String,  <--  (Al registrar no ingresar datos en este campo. Se Genera automaticamente)
    "email":     String, 
    "rut":       String, 
    "name":      String, 
    "lastName":  String, 
    "sLastName": String, 
    "password":  String  
}
```
_Autenticar Usuario ( LOGIN )_
```
Ruta: http://TU_IP:3000/sso/login
Metodo: POST
Data Format: JSON
{
    "email":     "",  <-- String
    "password":  ""   <-- String
}
```

_Obtener datos del usuario autenticado por su token._
```
Ruta: http://TU_IP:3000/sso/data/(TOKEN)
Metodo: GET
Parametro: Token
Data Format: JSON
{
    "message": "User data",
    "user": {
        "_id":       String,
        "token":     String,
        "email":     String,
        "rut":       String,
        "name":      String,
        "lastName":  String,
        "sLastName": String,
        "password":  String,
        "__v": 0
    }
}
```

### Asistencia 📖
_Agregar Asistencia_
```
Ruta: http://TU_IP:3000/attendace/add
Metodo: POST
Data Format: JSON
{
    "idClass":         Number,
    "teacher":         String,
    "classCode":       String,
    "section":         String,
    "studentFullName": String,
    "studentRut":      String,
    "startTime":       Date,
    "endTime":         Date 
}
```

_Obtener todas las asistencias_
```
Ruta: http://TU_IP:3000/attendace/
Metodo: GET
Data Format: JSON (Output)
{
    "message": "List of Assistance",
    "attendances": [
      {
            "_id":             String,
            "idClass":         Number,
            "teacher":         String,
            "classCode":       String,
            "section":         String,
            "studentFullName": String,
            "studentRut":      String,
            "startTime":       Date,
            "endTime":         Date,
            "__v":             0
      }
    ]
}
```

_Obtener una asistencia por su ID_
```
Ruta: http://TU_IP:3000/attendace/(_id)
Parametro: _id
Metodo: GET
Data Format: JSON (Output)
{
    "message": "Attendance Found",
    "attendances": {
            "_id":             String,
            "idClass":         Number,
            "teacher":         String,
            "classCode":       String,
            "section":         String,
            "studentFullName": String,
            "studentRut":      String,
            "startTime":       Date,
            "endTime":         Date,
            "__v":             0
    }
}
```

_Actualizar una asistencia por su ID_
```
Ruta: http://TU_IP:3000/attendace/update/(_id)
Parametro: _id
Metodo: PUT
Data Format: JSON (Output)
{
    "message": "Update Attendance",
    "attendances": {
            "_id":             String,
            "idClass":         Number,
            "teacher":         String,
            "classCode":       String,
            "section":         String,
            "studentFullName": String,
            "studentRut":      String,
            "startTime":       Date,
            "endTime":         Date,
            "__v":             0
    }
}
```

_Eliminar una asistencia por su ID_
```
Ruta: http://TU_IP:3000/attendace/update/(_id)
Parametro: _id
Metodo: Delete
```
## Construido con 🛠️

* [NestJS](http://www.nestjs.com/) - El framework usado

## Autores ✒️

* **Maximiliano Farias Cortes** - *Creacion de la API* - [Hoffy0](https://github.com/hoffy0)

## Licencia 📄

Este proyecto está bajo la Licencia (MIT) - mira el archivo [LICENSE.md](LICENSE.md) para detalles