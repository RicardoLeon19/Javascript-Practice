
iniciarApp();

function iniciarApp(){
    console.log('Iniciando App...');
    segundaFunction();
}

function segundaFunction(){
    console.log('Desde la segunda funcion');

    usuarioAutenticado('Pablo');
}



function usuarioAutenticado(usuario){
    console.log('Autenticando usuario... espre...');
    console.log(`Usuario autenticado exitosamente: ${usuario   }`);
}