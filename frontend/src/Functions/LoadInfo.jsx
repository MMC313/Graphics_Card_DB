

export default async function LoadInfo(query){

    console.log("loaded info")

    const baseUrl ='http://visualvault-backend.up.railway.app/results?' 
    const options= {
        method: 'GET'
    }
    
    let res = await fetch(baseUrl + new URLSearchParams({search:query}),options)
    let data = await res.json()
    
    return data.documents[0]
}