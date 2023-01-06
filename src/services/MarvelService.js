import { useHttp } from "../hooks/http.hook";

    //  reserve:  _apiKey = 'apikey=510b8bce9fde45b9268c2a88929a9cf9';
    //  reserve: _apiKey = 'apikey=b8eb564d8601ebd97f960a8b16dea621';

const useMarvelService = () => {
    const { request, clearError, process, setProcess} = useHttp();

    const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    const _apiKey = 'apikey=b8eb564d8601ebd97f960a8b16dea621';
    const _baseOffset = 571;
    const _comicsBaseOffset = 555;

    const getAllCharacters = async (offset = _baseOffset) => {
        const res = await request(`${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`);
        return res.data.results.map(_transformCharacter);
    }

    const getCharacterByName = async (name) => {
        const res = await request(`${_apiBase}characters?name=${name}&${_apiKey}`);
        return res.data.results.map(_transformCharacter);
    }

    const getCharacter = async (id) => {
       const res = await request(`${_apiBase}characters/${id}?${_apiKey}`);
       return _transformCharacter(res.data.results[0]);
    }

    const getAllComics = async (offset = _comicsBaseOffset) => {
        const res = await request(`${_apiBase}comics?orderBy=issueNumber&limit=8&offset=${offset}&${_apiKey}`);
        return res.data.results.map(_transformComics);
    }

    const getComics = async (id) => {
        const res = await request(`${_apiBase}comics/${id}?${_apiKey}`);
        return _transformComics(res.data.results[0]);
    }

    const _transformCharacter = (char) => {
        return {
            id: char.id,
            name: char.name,
            description: char.description ? `${char.description.slice(0, 230)}...` : 'This character have not description',
            thumbnail: `${char.thumbnail.path}.${char.thumbnail.extension}`,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url,
            comics: char.comics.items
        }
    }

    const _transformComics = (comics) => {
        return {
            id: comics.id,
            title: comics.title,
            description: comics.description || 'This comics have not description' ,
            pageCount: comics.pageCount ? `${comics.pageCount} p.` : 'No information about the number of pages',
            thumbnail: `${comics.thumbnail.path}.${comics.thumbnail.extension}`,
            language: comics.textObjects.language || 'en-us',
            price: comics.prices.price ? `${comics.prices.price} $` : 'not available',
            info: comics.urls[0].url
        }
    }

    return {getAllCharacters, 
            getCharacter, 
            clearError, 
            getAllComics, 
            getComics, 
            getCharacterByName, 
            process,
            setProcess}
}

export default useMarvelService;