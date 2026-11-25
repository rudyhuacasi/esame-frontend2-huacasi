import { useEffect, useState } from 'react';
import { useParams } from 'react-router'
import { GetMovieDettaglio } from '../Api/TMDB';
import type { MovieDetail } from '../Types/TypeDettaglio';
import CardDettaglio from '../components/CardDettaglio';


const PageDettaglioMovie = () => {
        const [movie, setMovie] = useState<MovieDetail>();
    
    const {id} = useParams<{ id: string }>()
    useEffect(() => {
        const loadMovie = async () => {
            try {
            if (!id) return;
            const detail = await GetMovieDettaglio(id);
            setMovie(detail);
            } catch (err) {
            console.error("Errore caricamento dettaglio:", err);
            }
        };
        loadMovie();
    }, [id]);


  return (
    <div>
        <a className="back-link" href="/">← Torna all’elenco</a>
        <CardDettaglio movie={movie}/>
    </div>
  )
}

export default PageDettaglioMovie