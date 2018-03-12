//Aqui defino las funciones que voy a utilizar(funcionalidad) 
//Y que manda llamar todoListROutes.js y los esquemas de model para utilizarlas

var mongoose=require('mongoose'),
    //llamo el modelo que cree y exporte llamado Task
    Task=mongoose.model('Task');

//exporto funcion list_all_task(mostrar todas las tareas)
exports.list_all_task=function(req,res){
    //.find{}
    Task.find({},function(err,task){
        if(err)
            res.send(err);
            res.json(task);
    });

};

//exporto funcion create_a_task(Guardar las Tareas)
exports.create_a_task = function(req, res) {
    var new_task = new Task(req.body);
    //.save
    new_task.save(function(err, task) {
      if (err)
        res.send(err);
        res.json(task);
    });
  };

  //exporto funcion findById(Buscar por ID)
  exports.read_a_task = function(req, res) {
    //findById(Rquiere taskId)
    Task.findById(req.params.taskId, function(err, task) {
      if (err)
        res.send(err);
      res.json(task);
    });
  };

  //exporto funcion update_a_task(actializar tarea)
  exports.update_a_task = function(req, res) {
      //findOneAndUpdate(quiere: id,taskId)
    Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
      if (err)
        res.send(err);
      res.json(task);
    });
  };
  
  //export funcion delete_a_task(Elimina tarea)
  exports.delete_a_task = function(req, res) {
    //remove:(require id para borrar)  
    Task.remove({
      _id: req.params.taskId
    }, function(err, task) {
      if (err)
        res.send(err);
      res.json({ message: 'Task successfully deleted' });
    });
  };
  
  