export default function SingleTrendingCard({ movie }) {
  return (
    <div className="trending__single">
      <figure className="trending__single--img-cover">
        <img
          className="trending__single--img"
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          alt={movie.title}
        />
      </figure>
      <div className="trending__single--details">
        <div className="extra">
          {movie.media_type === "movie" ? (
            <>
              <div>
                <span>{movie.release_date}</span>
                <span>{movie.media_type}</span>
              </div>
              <h4>{movie.original_title}</h4>
            </>
          ) : (
            <>
              <div>
                <span>{movie.first_air_date}</span>
                <span>{movie.media_type}</span>
              </div>
              <h4>{movie.name}</h4>
            </>
          )}
        </div>
      </div>
      <div className="gap"></div>
      <div className="trending__single--overlay"></div>
    </div>
  );
}
