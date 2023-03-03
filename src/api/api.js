


export const fetchImages = async (searchQery) => {
   
    
    const KEY = `32978489-20caeca748ffe4537bd9570d6`;
    const BASE_URL = `https://pixabay.com/api/`;

    const response = await fetch(`${BASE_URL}?key=${KEY}&q=${searchQery}&image_type=photo`);
        
    return response;


    
        
    
}

