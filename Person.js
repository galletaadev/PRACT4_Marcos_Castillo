class Person {
    #email;
    #phone;
    #streetName;
    #foto;

    constructor(email, phone, streetName, foto) {
        this.#email = email;
        this.#phone = phone;
        this.#streetName = streetName;
        this.#foto = foto;
    }

    get email() {
        return this.#email;
    }

    get phone() {
        return this.#phone;
    }

    get streetName() {
        return this.#streetName;
    }

    get foto() {
        return this.#foto;
    }
}

class FullNamePerson extends Person {
    #firstName;
    #lastName;
    #horaActual;

    constructor(email, phone, streetName, foto, firstName, lastName, horaActual) {
        super(email, phone, streetName, foto);
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#horaActual = horaActual;
    }

    get fullName() {
        return `${this.#firstName} ${this.#lastName}`;
    }

    get horaActual() {
        return this.#horaActual;
    }
}

export { Person, FullNamePerson };
