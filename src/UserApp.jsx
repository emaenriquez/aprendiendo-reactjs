import { useEffect } from "react";

export const UserApp = () => {

    const [user, setuser] = useState([]);

    const fetchUsers = async () => {
        try {
            const consulta = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = consulta.json();
            setuser(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect()

    return (
        <>
            <h1>listado de personas</h1>
        </>
    )
}
