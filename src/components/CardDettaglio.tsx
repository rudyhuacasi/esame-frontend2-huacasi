import type { MovieDetail } from '../Types/TypeDettaglio';
import "../App.css";

type CardDettaglioProps = {
  movie?: MovieDetail;
};

const CardDettaglio = ({movie}: CardDettaglioProps) => {
    const url = `https://image.tmdb.org/t/p/w500${movie?.poster_path}`;
    if (!movie) return null;

  return (
    <>
        <article className="detail">
          <div>
            <div className="detail__poster"><img style={{ width: "100%" }} src={url} alt="" /></div>
          </div>

          <div>
            <h1 className="detail__title">
              {movie.title}
            </h1>
            <p className="detail__tagline">{movie.belongs_to_collection?.name}</p>
            
            <ul className="detail__meta">
              <li>data: {movie.release_date}</li>
              <li>Durata: {movie.runtime} min</li>
              <li>Voto: {movie.vote_average}</li>
              <li>Voti: {movie.vote_count}</li>
              <li>Stato: {movie.status }</li>
              <li>Lingua: {movie.original_language}</li>
            </ul>

            <div className="detail__genres">
                {
                    movie.genres.map((gener) =>
                         <span className="genre">{gener.name}</span>
                    )
                }
            </div>

            <p className="detail__overview-label">Trama</p>
            <p className="detail__overview">
              {movie.overview}
            </p>

            <p className="card__meta">
                Produzione: {
                    movie.production_companies.map((produzione) =>
                        produzione.name
                    )
                }
              
            </p>
          </div>
        </article>
    </>
  )
}

export default CardDettaglio