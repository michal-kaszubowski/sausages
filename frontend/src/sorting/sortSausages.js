export const sortSausages = (payload, method) => {
    switch (method) {
        case "null":
            return payload;
        case "price":
            return payload.sort((a, b) => a.price > b.price ? 1 : 0);
        case "priceReverse":
            return payload.sort((a, b) => a.price > b.price ? 0 : 1);
        default:
            return payload.filter(sausage => sausage.manufacturer._id === method);
    }
}
