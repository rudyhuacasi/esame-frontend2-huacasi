import { useNavigate } from 'react-router'
import type { CardHome } from '../Types/TypeMovies'

type PageElencoProps = {
    product: CardHome
}

const CardMovies = ({product}: PageElencoProps) => {
    const url = `https://image.tmdb.org/t/p/w500${product.poster_path}`;
  return (
    <>
        <article className="card">
            <div className="card__poster"><img style={{width: "100%" }} src={url} alt="" /></div>
            <div className="card__body">
            <h2 className="card__title">
                {product.title}
            </h2>
            <p className="card__meta">{product.release_date}· {product.vote_average}</p>
            <p className="card__overview">
                {product.overview}
            </p>
            <a className="card__cta" href={`/movies/${product.id}`}
            >Dettaglio</a>
            </div>
        </article>
    </>
  )
}

export default CardMovies