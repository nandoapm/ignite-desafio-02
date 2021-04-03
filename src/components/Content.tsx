import { MovieCard } from '../components/MovieCard';

interface MovieProps {
  movies: {
    imdbID: string;
    title: string;
    poster: string;
    ratings: Array<{
      source: string;
      value: string;
    }>;
  untime: string;
  }
}

export function Content(props: MovieProps) {
  
  return (
    <main>
          <div className="movies-list">
            {props.movies.map(movie => (
              <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
            ))}
          </div>
        </main> 
  )
}