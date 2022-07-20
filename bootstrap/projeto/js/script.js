
document.getElementById('formulario').addEventListener('submit', function( evento ) {
    if(this.getAttribute('class').match(/erro/)) {
        return false;
    } else {
        alert("Felizes pelo contato! Responderemos o mais rápido possível.");
    }
})

document.getElementById('formulario02').addEventListener('submit', function( evento ) {
    if(this.getAttribute('class').match(/erro/)) {
        return false;
    } else {
        window.location.href = "./cadastro.html";
        alert("Felizes pelo contato! Responderemos o mais rápido possível.");
    }
})

function validaPacote(elemento){

    elemento.addEventListener('focusout', function(event) {

        event.preventDefault();

				const letraValido = /^[a-z]/i;

        if(this.value.match(letraValido) && letraValido != [0-9]) {
            
            document.querySelector('.mensagem02').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        } else {
            document.querySelector('.mensagem02').innerHTML = "Verifique o preenchimento dos campos em vermelho";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }

    });

}



function validaCampo(elemento){

    elemento.addEventListener('focusout', function(event) {

        event.preventDefault();

				const letraValido = /^[a-z]/i;

        if(this.value.match(letraValido) && letraValido != [0-9]) {
            
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        } else {
            document.querySelector('.mensagem').innerHTML = "Verifique o preenchimento dos campos em vermelho";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }

    });

}

function validaNumero(elemento){

    elemento.addEventListener('focusout', function(event) {

        event.preventDefault();

				const numeroValido = /^[0-9]/i;

        if(this.value.match(numeroValido)) {
            
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        } else {
            document.querySelector('.mensagem').innerHTML = "Verifique o preenchimento dos campos em vermelho";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }

    });

}


function validaEmail(elemento){
		
        elemento.addEventListener('focusout', function(event) {

        event.preventDefault();

        if(this.value != "" && this.value.match(/^[a-z0-9_.-]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?/i)){
        
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
            
        } else {
            
            document.querySelector('.mensagem').innerHTML = "Verifique o preenchimento dos campos em vermelho";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }

    });

}

let camposPacote = document.querySelectorAll('input.pacote');
let camposObrigatorios = document.querySelectorAll('input.obrigatorio');
let numerosObrigatorios = document.querySelectorAll('input.numero');
let campoEmail = document.querySelectorAll('input.email');

for( let emFoco of camposPacote) {
    validaPacote(emFoco);
}

for( let emFoco of camposObrigatorios) {
    validaCampo(emFoco);
}

for( let emFoco of numerosObrigatorios) {
    validaNumero(emFoco);
}

for( let emFoco of campoEmail) {
	validaEmail(emFoco);
}

/* progress bar upgrade */

var contador = 1
var nome = 0
var email = 0
var telefone = 0
var endereco = 0
var bairro = 0
var numero = 0
var estado = 0
var cidade = 0
var cep = 0
var termo = 0

function atualizaBar() {
    contador = nome + email + telefone + endereco + bairro + numero + estado + cidade + cep + termo;
    document.getElementById("progressBar").style.width = contador + "%";
}

function nomeBar() {

    var string = document.getElementById("name").value.length;

    if (nome == 0){
                                                
        if( string > 0) {                                  
            nome = nome + 10;
        } else {
            nome = nome;
        }
    } else {                                                           
        if( string > 0) {                                            
            nome = nome;
        } else {
            nome = nome - 10;
        }
    }
    atualizaBar()
}

function emailBar() {

    var string = document.getElementById("email").value.length;

    if (email == 0){
                                                
        if( string > 0) {                                  
            email = email + 10;
        } else {
            email = email;
        }
    } else {                                                           
        if( string > 0) {                                            
            email = email;
        } else {
            email = email - 10;
        }
    }
    atualizaBar()
}

function telefoneBar() {

    var string = document.getElementById("telefone").value.length;

    if (telefone == 0){
                                                
        if( string > 0) {                                  
            telefone = telefone + 10;
        } else {
            telefone = telefone;
        }
    } else {                                                           
        if( string > 0) {                                            
            telefone = telefone;
        } else {
            telefone = telefone - 10;
        }
    }
    atualizaBar()
}

function enderecoBar() {

    var string = document.getElementById("endereco").value.length;

    if (endereco == 0){
                                                
        if( string > 0) {                                  
            endereco = endereco + 10;
        } else {
            endereco = endereco;
        }
    } else {                                                           
        if( string > 0) {                                            
            endereco = endereco;
        } else {
            endereco = endereco - 10;
        }
    }
    atualizaBar()
}

function bairroBar() {

    var string = document.getElementById("bairro").value.length;

    if (bairro == 0){
                                                
        if( string > 0) {                                  
            bairro = bairro + 10;
        } else {
            bairro = bairro;
        }
    } else {                                                           
        if( string > 0) {                                            
            bairro = bairro;
        } else {
            bairro = bairro - 10;
        }
    }
    atualizaBar()
}

function numeroBar() {

    var string = document.getElementById("numero").value.length;

    if (numero == 0){
                                                
        if( string > 0) {                                  
            numero = numero + 10;
        } else {
            numero = numero;
        }
    } else {                                                           
        if( string > 0) {                                            
            numero = numero;
        } else {
            numero = numero - 10;
        }
    }
    atualizaBar()
}

function estadoBar() {

    var string = document.getElementById("estado").value.length;
    if (estado == 0){
                                                
        if( string < 3 ) {                                  
            estado = estado + 10;
        } else {
            estado = estado;
        }
    }
    atualizaBar()
}

function cidadeBar() {

    var string = document.getElementById("cidade").value.length;

    if (cidade == 0){
                                                
        if( string > 0) {                                  
            cidade = cidade + 10;
        } else {
            cidade = cidade;
        }
    } else {                                                           
        if( string > 0) {                                            
            cidade = cidade;
        } else {
            cidade = cidade - 10;
        }
    }
    atualizaBar()
}

function cepBar() {

    var string = document.getElementById("cep").value.length;

    if (cep == 0){
                                                
        if( string > 0) {                                  
            cep = cep + 10;
        } else {
            cep = cep;
        }
    } else {                                                           
        if( string > 0) {                                            
            cep = cep;
        } else {
            cep = cep - 10;
        }
    }
    atualizaBar()
}


function termoBar() {

    if (termo == 0){ termo = termo + 10; } else { termo = termo - 10; }

    atualizaBar()
}

