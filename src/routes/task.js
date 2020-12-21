const express = require('express');
const app = express();
const Task = require('../models/task');

//Obtener todos los tareas
app.get('/', (req, res) => {
    Task.find({}).exec((err, tasks) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.status(200).json({
            ok: true,
            tasks
        })
    })
})
//Agregar una tarea Nueva
app.post('/', (req, res) => {
    const task = new Task({
        text: req.body.text
    });

    task.save((err, tareaDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            })
        }

        res.json({
            ok: true,
            tareaDB
        });
    });

});
//Poner una tarea como terminada o modificar el texto de la tarea
app.put('/:id', (req, res) => {
    let id = req.params.id;
    let body = req.body;

    Task.findByIdAndUpdate ( id ,body, (err, taskDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            taskDB
        })
    });
});
//Borrar una tarea
app.delete('/:id', (req, res) => {
    let id = req.params.id;

    Task.findByIdAndRemove ( id , (err, taskDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            taskDB
        })
    });
});

module.exports = app;