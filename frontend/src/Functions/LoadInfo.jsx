export default async function LoadInfo(query){

    console.log("loaded info")

    const baseUrl ='http://localhost:3000/results?'
    const options= {
        method: 'GET'
    }
    
    let res = await fetch(baseUrl + new URLSearchParams({search:query}),options)
    let data = await res.json()
    
    return data.documents[0]
}