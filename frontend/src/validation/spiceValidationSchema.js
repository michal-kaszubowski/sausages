import * as Yup from "yup";

const spiceValidationSchema = () => {
    return Yup.object().shape({
        name: Yup.string()
            .required("Brak nazwy!")
            .min(5, "Nazwa jest za krótka!"),
        origin: Yup.string()
            .min(5, "Nazwa jest za krótka!")
            .nullable(),
        price: Yup.number()
            .required("Cena jest wymagana!")
            .moreThan(0, "Nic nie jest za darmo :/")
            .lessThan(50, "Nie przesadzasz? To tylko kawałek zielska!")
    });
}

export default spiceValidationSchema;
