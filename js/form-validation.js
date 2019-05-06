function validateForm(nombre,correo) {
    var n = nombre;
    var e = correo;
    var onlyLetters =/^[a-zA-Z\s]*$/; 
    var onlyEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    
    if(n == "" || n == null){
        document.getElementById('nameLabel').innerHTML = ('Please enter your name');
        document.getElementById('name').style.borderColor = "red";
        return false;
    }
       
  
    if (!n.match(onlyLetters)) {
        document.getElementById('nameLabel').innerHTML = ('Please enter only letters');
        document.getElementById('name').style.borderColor = "red";
        return false;
    }
  
    if(e == "" || e == null ){
          document.getElementById('emailLabel').innerHTML = ('Please enter your email');
          document.getElementById('email').style.borderColor = "red";
          return false;
      }
  
    if (!e.match(onlyEmail)) {
        document.getElementById('emailLabel').innerHTML = ('Please enter a valid email address');
        document.getElementById('email').style.borderColor = "red";
        return false;
    } 
    else{
          return true;
      }
      
}

function formObject() {
    var nombre = document.getElementsByName('nombre').value;
    var correo = document.getElementsByName('correo').value;

    if(validateForm(nombre,correo)){
        saveToFirebase(nombre,correo);
    } else{
        alert("Ingrese un nombre y correo correcto");
    }

    
}

function saveToFirebase(name,email){
    var personObject = {
        email: email,
        name: name
    };

    firebase.database().ref('subscription-entries').push().set(personObject)
        .then(function(snapshot){
            alert("!Gracias " + name + "!");
        }, function(error){
            console.log('error ' + error);
        });
}