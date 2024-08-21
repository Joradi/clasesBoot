function menu(){
    let opcion;

    while(opcion !== 5){
        opcion = parseInt(prompt(
            "Menú Principal:\n" +
            "1. Anime\n" +
            "2. Doramas\n" +
            "3. Mangas\n" +
            "4. Foros\n" +
            "5. Salir\n" +
            "Elige una opción (1-5):"
        ));
        switch (opcion){
            case 1:
                alert("Haz elegido la opcion de Anime");
                break;

            case 2:
                alert("Haz elegido la opcion de Doramas");
                break;
            
            case 3:
                alert("Haz elegido la opcion de Mangas");
                break;
            
            case 4:
                alert("Haz elegido la opcion el Foro");
                break;

            case 5:
                alert("Saliendo del menu");
                break;

            default:
                alert("Ingrese una opcion valida del 1 al 5");
                break;
        }

    }
}
menu();