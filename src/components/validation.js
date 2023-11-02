export default function validate(userData) {
    const errors = {};

    const correctEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    // /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!correctEmail.test(userData.email)) {
        errors.email = 'Please, enter a valid email.'
    }
    if(userData.email.length === 0) {
        errors.email = 'Please, enter your email.';
    }
    if(userData.email.length > 35) {
        errors.email = "Email can't be longer than 35 characters."
    }

    /*
    EMAIL
    el nombre de usuario tiene que ser un email (¡Explora validaciónes REGEX en internet!).
    el nombre de usuario no puede estar vacío.
    el nombre de usuario no puede tener más de 35 caracteres.
    */

    // if(userData.password.includes())
    if(userData.password.length < 6) {
        errors.password = 'Password must be at least 6 characters';
    }
    if(userData.password.length > 10) {
        errors.password = 'Password must be up to 10 characters';
    }

    /*
    PASSWORD
    la contraseña tiene que tener al menos un número.
    la contraseña tiene que tener una longitud entre 6 y 10 caracteres.
    */

    return errors;

}