import { useState } from "react";
import { useGetMoviesAndTvShowsQuery } from "../features/api/apiSlice";
// components
import SingleRecommended from "./SingleRecommended";
import Spinner from "./Spinner";

export default function RecommendedSection() {
  const [page, setPage] = useState(1);
  const { isLoading, data } = useGetMoviesAndTvShowsQuery(page);

  return (
    <section className="recommended trending">
      <h3 className="trending__title">Recommended For You</h3>
      <div className="recommended__container">
        {isLoading ? (
          <Spinner />
        ) : (
          data.results.map((movie) => {
            return <SingleRecommended key={movie.id} movie={movie} />;
          })
        )}
      </div>
      <div className="page__btns">
        <button
          className={`${page === 1 ? "disabled" : null} page__btn`}
          onClick={() => setPage((prev) => prev - 1)}
        >
          Prev Page
        </button>
        <button
          onClick={() => setPage((prev) => prev + 1)}
          className={`${
            !isLoading && page === data.total_pages ? "disabled" : null
          } page__btn`}
        >
          Next Page
        </button>
      </div>
    </section>
  );
}
