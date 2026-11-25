import { useEffect, useState } from 'react'
import { GetMovies } from '../Api/TMDB';
import type { CardHome } from '../Types/TypeMovies';
import CardMovies from '../components/CardMovies';

const PageElencoMovies = () => {
    const [products, setProducts] = useState<CardHome[]>([]);
    const film ="The Lord of the Rings"
    useEffect(() => {
        const loadMovies = async () => {
        try {
            const data = await GetMovies(film);
            console.log(data);
            

            if (data) {
            setProducts(Array.isArray(data) ? data : data.results ?? []);
            }
            console.log(products);
            
        } catch (err) {
            throw err
        }
        }
        loadMovies()
    }, [film]);
    return (
        <>
            <h1 className="page-title">{film}</h1>
            <p className="page-sub">
            Risultati fissi da API · query={film} · page=1 · max 20
            items · senza filtri / paginazione
            </p>
            <div className="movie-grid">
                {products.map((product) =>
                    <CardMovies key={product.id} product={product}/>
                    
                )}
                
            </div>
        </>
    )
}
export default PageElencoMovies