$(function(){

    $(".add__button").on('click', function(){
        var task = getTask();

        if(task){
            createTask(task);
        }

        clearInput();
    });

    $(document).on('click', '#edit', function(){
        var taskToChange = $(this).parent().siblings();

        var newTask = window.prompt("Edit your task: ", taskToChange.text());

        if(newTask.length == 0) {
            return;            
        }
        else {
            taskToChange.text(newTask);
        }
    });

    $(document).on('click', '#delete', function(){
        $(this).parent().parent().remove();
    });

    
    function getTask(){
        var len = $(".task__input").val().length;  
        var val = $(".task__input").val();

        return len > 0 ? val : window.alert("Please enter a task!"); 
    }

    function newItemElement(){
        return $("<div>", {class: "item__element"});
    }

    function newTaskElement(){
        return $("<h2>", {class: "task__element"});
    }

    function newButtonSet(){

        var btnContainer = $("<div>", {class: "button__container"});

        var editBtn = $("<input>", {id: "edit",class: "button", type: "button", value: "Edit"});
        var deleteBtn = $("<input>", {id: "delete", class: "button", type: "button", value: "Delete"});

        btnContainer.append(editBtn, deleteBtn);

        return btnContainer;
    }


    function createTask(task){
        var newDiv = newItemElement();
        var newTask = newTaskElement();
        var taskButtons = newButtonSet();
        
        newTask.text(task);
        newDiv.append(newTask, taskButtons);

        $(".item__container").append(newDiv);
    }

    function clearInput(){
        $(".task__input").val('');
    }

});
