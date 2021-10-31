import * as Yup from "yup";

const YupValidationSchema = () => {
    return Yup.object().shape({
        title: Yup.string()
            .required('No title')
            .min(3, 'To short'),
        price: Yup.number()
            .required('No price')
            .moreThan(0, 'Has to be more than 0'),
        image: Yup.string()
            .url('Invalid URL')
    })
}

export default YupValidationSchema
