import * as Yup from "yup";

const sausageValidationSchema = () => {
    return Yup.object().shape({
        type: Yup.string()
            .required("Brak gatunku!")
            .min(6, "Nazwa jest za krótka!"),
        origin: Yup.string()
            .min(6, "Nazwa jest za krótka!")
            .nullable(),
        price: Yup.number()
            .required("Cena jest wymagana!")
            .moreThan(0, "Nic nie jest za darmo :/")
            .lessThan(100, "Nie przesadzasz? To tylko kiełbasa..."),
        image: Yup.string()
            .url("Jeżeli chcesz dodać link, musi on być poprawny!")
            .nullable(),
        manufacturer: Yup.string()
            .required("Producent jest wymagany!"),
        spice: Yup.string()
            .nullable()
    });
}

export default sausageValidationSchema;
