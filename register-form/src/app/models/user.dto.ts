export class UserDto{


    constructor(
        public nombre: string,
        public apellidos: string,
        public nif: string,
        public email: string,
        public telefono: string,
        public sexo: string,
        public comoConocio: string,
        public contrasena: string,
        public confirmarContrasena: string,
        public aceptaTerminos: boolean
    ){}
}
