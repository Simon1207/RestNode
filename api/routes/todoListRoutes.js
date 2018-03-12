'use strict';
module.exports=function(app){
    var todoList=require('../controllers/todoListController');

    //Aqui defino las rutas que voy a utilizar en el sistema 
    app.route('/task')
        .get(todoList.list_all_task)
        .post(todoList.create_a_task);

    app.route('/task/:taskId')
        .get(todoList.read_a_task)
        .put(todoList.update_a_task)
        .delete(todoList.delete_a_task);    
}