// components
import { useState } from "react";
import SearchBox from "../components/SearchBox";
import SingleRecommended from "../components/SingleRecommended";
import Spinner from "../components/Spinner";

import { useGetOnlyMoviesQuery } from "../features/api/apiSlice";

export default function Movies() {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useGetOnlyMoviesQuery(page);

  return (
    <section className="main">
      <div className="movies">
        <SearchBox />
        <h2>Movies</h2>
        <div className="recommended__container">
          {isLoading ? (
            <Spinner />
          ) : (
            data.results.map((movie) => {
              return <SingleRecommended movie={movie} key={movie.id} />;
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
      </div>
    </section>
  );
}
