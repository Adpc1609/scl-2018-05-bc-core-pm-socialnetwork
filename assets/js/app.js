//Registro
function registerWithFirebase(){
    const emailValue = email.value;
    const passwordValue = password.value;

    firebase.auth().createUserWithEmailAndPassword(emailValue, passwordValue)
        .then(()=>{
            console.log("Usuario creado con éxito");
        })
        .catch((error)=>{
            console.log("Error de firebase > Código > "+error.code); //error.code nos mostrará el código de error para informarnos qué pasó
            console.log("Error de firebase > Mensaje > "+error.message); //error.message nos mostrará el mensaje de firebase del mismo error
        });
}
//Login
function loginWithFirebase(){
    const emailValue = email.value;
    const passwordValue = password.value;

    firebase.auth().signInWithEmailAndPassword(emailValue, passwordValue)
        .then(()=>{
            console.log("Usuario inició sesión con éxito");
        })
        .catch((error)=>{
            console.log("Error de firebase > Código > "+error.code); //error.code nos mostrará el código de error para informarnos qué pasó
            console.log("Error de firebase > Mensaje > "+error.message); //error.message nos mostrará el mensaje de firebase del mismo error
        });
}