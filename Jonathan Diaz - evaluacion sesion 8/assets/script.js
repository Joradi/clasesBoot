class Persona {
    constructor(nombre, identificador, clave, saldoCuenta) {
        this.nombre = nombre;
        this.identificador = identificador;
        this.clave = clave;
        this.saldoCuenta = saldoCuenta;
    }

    // Método para mostrar información
    mostrarInformacion() {
        alert(`Nombre: ${this.nombre}\nSaldo actual: $${this.saldoCuenta}`);
        //console.log(`Saldo actual: $${this.saldoCuenta}`);
    }

    // Método para consultar el saldo
    consultarSaldo() {
        return this.saldoCuenta;
    }

    // Método para depositar dinero
    depositarDinero(cantidad) {
        this.saldoCuenta += cantidad;
        alert(`Has depositado $${cantidad}. Saldo actual: $${this.saldoCuenta}`);
    }

    // Método para retirar dinero
    retirarDinero(cantidad) {
        if (cantidad <= this.saldoCuenta) {
            this.saldoCuenta -= cantidad;
            alert(`Has retirado $${cantidad}. Saldo actual: $${this.saldoCuenta}`);
        } else {
            alert("Fondos insuficientes.");
        }
    }
}

// Creamos a las personas
let persona1 = new Persona("David", 11111111, 2233, 2500);
let persona2 = new Persona("Diego", 22222222, 1122, 4500);
let persona3 = new Persona("Dino", 33333333, 3344, 10500);

// Creamos un array con la información de las personas
let personas = [persona1, persona2, persona3];

function validarUsuario(personas) {
    let usuarioIngresado = parseInt(prompt("Ingresa tu identificador:"));
    let contrasenaIngresada = parseInt(prompt("Ingresa tu clave:"));
    let accesoConcedido = false;

    for (let i = 0; i < personas.length; i++) {
        if (usuarioIngresado === personas[i].identificador && contrasenaIngresada === personas[i].clave) {
            alert("Acceso concedido.");
            personas[i].mostrarInformacion();
            accesoConcedido = true;

            // Aquí estan las acciones que puedes realizar
            let opcion;
            do {
                opcion = parseInt(prompt(
                    "¿Qué deseas hacer?\n" +
                    "1. Consultar saldo\n" +
                    "2. Depositar dinero\n" +
                    "3. Retirar dinero\n" +
                    "4. Salir"
                ));

                switch (opcion) {
                    case 1:
                        alert(`Tu saldo actual es: $${personas[i].consultarSaldo()}`);
                        break;
                    case 2:
                        let deposito = parseInt(prompt("¿Cuánto deseas depositar?"));
                        personas[i].depositarDinero(deposito);
                        break;
                    case 3:
                        let retiro = parseInt(prompt("¿Cuánto deseas retirar?"));
                        personas[i].retirarDinero(retiro);
                        break;
                    case 4:
                        alert("Saliendo...");
                        break;
                    default:
                        alert("Opción no válida.");
                }
            } while (opcion !== 4);

            break;
        }
    }

    if (!accesoConcedido) {
        alert("Usuario o contraseña incorrectos.");
    }
}

// Validar los datos de las 3 personas a la vez
validarUsuario(personas);