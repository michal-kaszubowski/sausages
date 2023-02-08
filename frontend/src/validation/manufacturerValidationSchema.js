import * as Yup from "yup";

const manufacturerValidationSchema = () => {
    return Yup.object().shape({
        name: Yup.string()
            .required("Brak nazwy!")
            .min(5, "Nazwa jest za krótka!"),
        origin: Yup.string()
            .min(5, "Nazwa jest za krótka!")
            .nullable(),
        established: Yup.number()
            .required("Data jest wymagana!")
            .moreThan(1600, "Dość archaicznie...")
            .lessThan(2022, "Ej, wracasz z przyszłości?")
    });
}

export default manufacturerValidationSchema;
