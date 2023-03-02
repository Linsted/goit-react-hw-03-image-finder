


export const fetchImages = async (searchQery) => {
    console.log(searchQery)
    let data;
    
    const KEY = `32978489-20caeca748ffe4537bd9570d6`
    const BASE_URL = `https://pixabay.com/api/`

    try {
        const response = await fetch(`${BASE_URL}?key=${KEY}&q=${searchQery}&image_type=photo`);
        
        if (!response.ok) {
            throw new Error(response.status);
        }
        
        data = await response.json();
    } catch (error) {
        console.log(error.message)
    }
    return data;
}

