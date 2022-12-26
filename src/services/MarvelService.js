import { useHttp } from "../hooks/http.hook";

    //  reserve:  _apiKey = 'apikey=510b8bce9fde45b9268c2a88929a9cf9';
    //  reserve: _apiKey = 'apikey=b8eb564d8601ebd97f960a8b16dea621';

const useMarvelService = () => {
    const {loading, request, error, clearError} = useHttp();

    const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    const _apiKey = 'apikey=b8eb564d8601ebd97f960a8b16dea621';
    const _baseOffset = 571;

    const getAllCharacters = async (offset = _baseOffset) => {
        const res = await request(`${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`);
        return res.data.results.map(_transformCharacter);
    }

    const getCharacter = async (id) => {
       const res = await request(`${_apiBase}characters/${id}?${_apiKey}`);
       return _transformCharacter(res.data.results[0]);
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

    return {loading, error, getAllCharacters, getCharacter, clearError}
}

export default useMarvelService;