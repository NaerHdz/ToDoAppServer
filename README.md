# Requerimientos :
    - Se necesita el servidor corriendo de MongoDB
    - para correr el servidor:
        * Si se tiene nodemon usar -> npm start
        * De otra forma usar -> node src/index

# Rutas
``` js
"localhost:3000/api/task"  <- peticiones Get,Post
"localhost:3000/api/task/id"  <- peticiones Put,Delete
```

# Models
```js
Task: {
    text: {type: String},
    check: {type: Boolean, default: false}
}
```


### Hecho por: Hector (Naer) Hernandez - 21/12/2020