import axios from "axios";

export const initState = async () => {
    const host = process.env.HOST || 'localhost'
    const port = process.env.PORT || 5000
    await axios.get(`http://${host}:${port}`);
}
