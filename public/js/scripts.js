
const addProjectToApp = (project) => {
    $.ajax({
        url: '/api/projects',
        data: project,
        type: 'POST',
        success: (result) => {
            alert(result.message);
            location.reload();
        }
    })
}
const addAccountToApp = (account) => {
    $.ajax({
        url: '/api/accounts',
        data: account,
        type: 'POST',
        success: (result) => {
            alert(result.message);
            location.reload();
        }
    })
}
const backendSend = (mail) =>{
    $.ajax({
        url: '/email',
        data: Boolean,
        type: 'POST',
        success: (result) => {
            alert(result.message);
        }
    })
}

const submitImage = () => {
    let formData = {};
    formData.title = $('#title').val();
    formData.image = $('#image').val();
    formData.subtitle = $('#subtitle').val();
    formData.description = $('#description').val();

    console.log("Form Data Submitted: ", formData);
    addProjectToApp(formData);

}

const signUp = () => {
    if( $('#email').val()==$('#RepeatEmail').val()){
        let formData = {};
        formData.first_name = $('#first_name').val();
        formData.last_name = $('#last_name').val();
        formData.password = $('#password').val();
        formData.email = $('#email').val();
        console.log("Form Data Submitted: ", formData);
        addAccountToApp(formData);
    }
    else{
        alert("Please check your email!")
    }

}
const getProjects = () => {
    $.get('/api/projects',(response) => {
        if(response.statusCode==200){
            console.log(response)
            addCards(response.data);
        }
        else {
            console.log(response)
        }
    })
}
const getAccounts = () => {
    $.get('/api/accounts',(response) => {
        if(response.statusCode==200){
            console.log(response)
            logIn(response.data);
        }
        else {
            console.log(response)
        }
    })
}
const addCards = (items) => {
    items.forEach(item => {
        let itemToAppend = '<div class="col s4 center-align">'+
    '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="'+item.image+'">'+
    '</div><div class="card-content">'+
    '<span class="card-title activator grey-text text-darken-4">'+item.title+'<i class="material-icons right">more_vert</i></span><p><a href="#">'+item.subtitle+'</a></p></div>'+
    '<div class="card-reveal">'+
        '<span class="card-title grey-text text-darken-4">'+item.title+'<i class="material-icons right">close</i></span>'+
        '<p class="card-text grey-text text-darken-4">'+item.description+'</p>'+
      '</div></div></div>';
      $("#card-section").append(itemToAppend)
    });
}
const printAccount = (items) => {
    items.forEach(item => {
        let itemToAppend =item.email;
        $("#account-box").append(itemToAppend)
    })
}
const logIn =(items) =>{
    items.forEach(item =>
        {
            if(items.email==$('#logInEmail').val()){
                alert("exits!")
            }
        })
}

let socket = io();

socket.on('number', (msg) => {
    $("#pageTitle").html("Welcome to SIT 725 Week 5: "+ msg)
})

$(document).ready(function(){
    $('.materialboxed').materialbox();
    $('#imageSubmit').click(()=>{
        submitImage();
    })
    $('#signUp').click(()=>{
        signUp();
    })
    getProjects();
    getAccounts();
    $('.modal').modal();
  });
