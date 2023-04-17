export const getTitle = async() => {
    const res = await fetch('https://moviesdatabase.p.rapidapi.com/titles',{
        method: 'GET',
        headers: {
            'X-RapidAPI-Key' : process.env.RAPIDKEY,
            'X-RapidAPI-Host' : process.env.RAPIDHOST
        }
    })

    const data = await res.json()
    return data
}