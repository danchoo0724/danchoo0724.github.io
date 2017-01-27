//hide Add Task function at the beginning
$(document).ready(function () {
    $('#addTask').hide();
    $("button").on('click', function () {
        $('#addTask').show();
    });

});


var completeBtn = document.getElementById('completeBtn');

$(document).ready(function () {
//have the textfield for Add Task be disabled if empty
    setInterval(function(){
        if($('.txt').val().length > 0){
            $(".btn").attr('disabled', false);
        }else{
            $(".btn").attr('disabled', true);
        }
    }, 100);

//Inputing Date for New Task
    $('#txtDate').datepicker();
    $('#txtDate').datepicker('setDate', 'today');
    
//New Task is created when user clicks "Add Task" button
    $(".btn").on('click', function () {
        
        $('#newTask').append("<tr> <td>" + '<input type="checkbox" name="myCheckbox" />' + "&nbsp;" + $(".txt").val() + "<br>" + "<div id='time'>" + $(".txtDate").val() + "</div>" + "</td> </tr>");
        $('#newTask').css('cursor','move');
    });
    

//Deleting completed New Tasks
    $("#completeBtn").on('click', function(){
        $('#newTask tr').has('input:checkbox:checked').remove();
    });
});

//Drag and Drop interaction for each task
    $("#sortable > tbody").sortable({
    items: 'tr:has(td)'
    
    ,connectWith: 'tbody' 
});

    $("#sortable > tbody").sortable({
        cancel: ".unsortable"
    });

//Removing already existing tasks
$("#completeBtn").on("click",function(){
    $("input:checkbox").each(function() {
        if ($(this).is(":checked")) {
            $(this).parent().parent().remove();
        }
    });
});