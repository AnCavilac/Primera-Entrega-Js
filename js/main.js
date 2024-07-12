function comprarSeguro() {

    let usuario = prompt("Ingrese el nombre de usuario con el que crearas tu cuenta");
    
    alert("Bienvenido, su nombre de usuario es: " + usuario);

    let intentos = 0;
    let maxIntentos = 3;

    while (intentos < maxIntentos) {
        let intentoUsuario = prompt("Ingrese su nombre de usuario para verificar:");

        if (intentoUsuario === usuario) {
            alert("Usuario verificado correctamente.");

            let menuSeguro = prompt("Seleccione el medio de transporte al cual le comprará el seguro: \n1. Automóvil \n2. Moto");
            
            let valorAutomovil = 140;
            let ivaAutomovil = 0.10;

            let valorMoto = 120;
            let ivaMoto = 0.05;

            switch (menuSeguro) {
                case "1": 
                    console.log("El usuario ha seleccionado el medio de transporte: Automóvil");
                    let totalAutomovil = valorAutomovil + (valorAutomovil * ivaAutomovil);
                    alert("Gracias por su compra, el total es de: " + totalAutomovil.toFixed(3));
                    break;

                case "2":
                    console.log("El usuario ha seleccionado el medio de transporte: Moto");
                    let totalMoto = valorMoto + (valorMoto * ivaMoto);
                    alert("Gracias por su compra, el total es de: " + totalMoto.toFixed(3));
                    break;
                default:
                    alert("Opción inválida");
            }

            return; 
        } else {
            intentos++;
            if (intentos < maxIntentos) {
                alert("Nombre de usuario incorrecto. Te quedan " + (maxIntentos - intentos) + " intentos.");
            }
        }
    }

    alert("Has superado el número máximo de intentos. Inténtalo más tarde.");
    console.log("El usuario ha superado el número máximo de intentos.");
}

comprarSeguro();
