export const sortManufacturers = (payload, method) => {
    switch (method) {
        case "normal":
            return payload.sort((a, b) => a.established > b.established ? 1 : 0);
        case "reverse":
            return payload.sort((a, b) => a.established > b.established ? 0 : 1);
        default:
            return payload;
    }
}
