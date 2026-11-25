import type { MovieDetail } from "../Types/TypeDettaglio";
import type { CardHome } from "../Types/TypeMovies";

const apiTMDB = "https://api.themoviedb.org/3"
const apiKey = import.meta.env.VITE_TMDB_API_KEY;

export async function GetMovies(params:string):Promise<{results: CardHome[]}> {
    try {
        if (!apiKey) {
            throw new Error("non se trova il api key");
        }
        const response = await fetch(`${apiTMDB}/search/movie?query=${encodeURIComponent(params)}&include_adult=false&language=en-US&page=1&api_key=${apiKey}`)
        if (!response.ok) {
            throw new Error(`${response.status}`);
        }
        const data = await response.json()

        return data.results
    } catch (error) {
        console.log(error)
        throw error
        
    }
}

export async function GetMovieDettaglio(id:string): Promise<MovieDetail> {
    try {
        if (!apiKey) {
            throw new Error("non se trova il api key");
        }
        const response = await fetch(`${apiTMDB}/movie/${id}?api_key=${apiKey}`)
        if (!response.ok) {
            throw new Error(`${response.status}`);
        }
        const data = await response.json()

        return data as MovieDetail
    } catch (error) {
        console.log(error)
        throw error
    }
}