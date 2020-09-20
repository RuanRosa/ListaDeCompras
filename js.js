        var lista = document.querySelector('ul');
        var campo = document.getElementById('campo');
        var button = document.getElementById('btn');

        button.addEventListener('click', additem);

        function additem(){
            if(campo.value == ''){
                window.alert('Por favor insira algum valor valido');

            }else{
                var item = '<li>' + campo.value + '</li>';
                lista.innerHTML += item;
                campo.value = '';
                campo.focus();
            }

        }
        campo.addEventListener('keyup', pressbutton);

        function pressbutton(keycap){
            if(keycap.keyCode == 13){
                additem();
            }
        }

       