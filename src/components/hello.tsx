type SaludoProp = {
    name: string;
}

const Saludo = ({name}: SaludoProp) =>{
    return <h2>Bienvenido de nuevo {name} :)</h2>
}

export default Saludo;