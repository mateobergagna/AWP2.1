
async function datitos() {
    const datos = await fetch('https://api.escuelajs.co/api/v1/users')
    const convertir = datos.json()
    
    return convertir
}

export{ datitos}