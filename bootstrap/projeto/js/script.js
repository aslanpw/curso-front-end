
document.getElementById('formulario').addEventListener('submit', function( evento ) {
    evento.preventDefault();
    evento.stopPropagation();

    if(this.getAttribute('class').match(/erro/)) {
        return false;
    }
})


function validaCampo(elemento){

    elemento.addEventListener('focusout', function(event) {

        event.preventDefault();

				const letraValido = /^[a-z]/i;

        if(this.value.match(letraValido) && letraValido != [0-9]) {
            
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        } else {
            document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em vermelho";
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
            
            document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em vermelho";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }

    });

}

let camposObrigatorios = document.querySelectorAll('input.obrigatorio');
let campoEmail = document.querySelectorAll('input.email');

for( let emFoco of camposObrigatorios) {
    validaCampo(emFoco);
}

for( let emFoco of campoEmail) {
		validaEmail(emFoco);
}
