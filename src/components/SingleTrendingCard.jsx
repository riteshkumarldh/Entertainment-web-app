import { Link } from "react-router-dom";

export default function SingleTrendingCard({ movie }) {
  return (
    <Link
      to={`${
        movie.media_type === "movie"
          ? `/movie/${movie.id}`
          : `/tvshow/${movie.id}`
      }`}
      className="trending__single"
    >
      <figure className="trending__single--img-cover">
        <img
          className="trending__single--img"
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          alt={movie.title}
        />
      </figure>
      <div className="trending__single--bookmark">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 12 14"
          fill="none"
          stroke="currentColor"
          width="1em"
        >
          <path
            strokeWidth="1.5"
            d="m10.711.771.01.004.01.005a.28.28 0 0 1 .14.107c.032.048.046.09.046.15v11.927a.243.243 0 0 1-.046.15.282.282 0 0 1-.14.106l-.007.004-.008.003a.29.29 0 0 1-.107.014c-.1 0-.17-.027-.24-.091L6.357 9.235l-.524-.512-.524.512-4.011 3.915a.328.328 0 0 1-.24.1.244.244 0 0 1-.103-.021l-.01-.004-.01-.005a.281.281 0 0 1-.139-.107.244.244 0 0 1-.046-.15V1.037c0-.058.014-.101.046-.15A.281.281 0 0 1 .935.78l.01-.005.01-.004A.245.245 0 0 1 1.057.75h9.552c.038 0 .07.007.102.021Z"
          />
        </svg>
      </div>
      <div className="trending__single--play">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
            fill="currentColor"
            stroke="none"
            width="1em"
          >
            <path d="M15 0C6.713 0 0 6.713 0 15c0 8.288 6.713 15 15 15 8.288 0 15-6.712 15-15 0-8.287-6.712-15-15-15Zm-3 21V8l9 6.5-9 6.5Z" />
          </svg>
          <span>play</span>
        </div>
      </div>
      <div className="trending__single--details">
        <div className="extra">
          {movie.media_type === "movie" ? (
            <>
              <div>
                <span>{movie.release_date}</span>
                <div className="dot"></div>
                <div className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    stroke="none"
                    width="0.8em"
                  >
                    <path d="M16.956 0H3.044A3.044 3.044 0 0 0 0 3.044v13.912A3.044 3.044 0 0 0 3.044 20h13.912A3.044 3.044 0 0 0 20 16.956V3.044A3.044 3.044 0 0 0 16.956 0ZM4 9H2V7h2v2Zm-2 2h2v2H2v-2Zm16-2h-2V7h2v2Zm-2 2h2v2h-2v-2Zm2-8.26V4h-2V2h1.26a.74.74 0 0 1 .74.74ZM2.74 2H4v2H2V2.74A.74.74 0 0 1 2.74 2ZM2 17.26V16h2v2H2.74a.74.74 0 0 1-.74-.74Zm16 0a.74.74 0 0 1-.74.74H16v-2h2v1.26Z" />
                  </svg>
                  <span>{movie.media_type}</span>
                </div>
              </div>
              <h4>{movie.original_title}</h4>
            </>
          ) : (
            <>
              <div>
                <span>{movie.first_air_date}</span>
                <div className="dot"></div>
                <div className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    stroke="none"
                    width="0.8em"
                  >
                    <path d="M20 4.481H9.08l2.7-3.278L10.22 0 7 3.909 3.78.029 2.22 1.203l2.7 3.278H0V20h20V4.481Zm-8 13.58H2V6.42h10v11.64Zm5-3.88h-2v-1.94h2v1.94Zm0-3.88h-2V8.36h2v1.94Z" />
                  </svg>
                  <span>{movie.media_type}</span>
                </div>
              </div>
              <h4>{movie.name}</h4>
            </>
          )}
        </div>
      </div>
      <div className="trending__single--overlay"></div>
    </Link>
  );
}
