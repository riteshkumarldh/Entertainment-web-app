// components
import { useState } from "react";
import SearchBox from "../components/SearchBox";
import SingleRecommended from "../components/SingleRecommended";
import Spinner from "../components/Spinner";
import { useGetOnlyTvShowsQuery } from "../features/api/apiSlice";

export default function TvShows() {
  const [page, setPage] = useState(1);
  const { isLoading, data } = useGetOnlyTvShowsQuery(page);
  return (
    <section className="main">
      <div className="tv">
        <SearchBox />
        <h2>TV Shows</h2>
        <div className="recommended__container">
          {isLoading ? (
            <Spinner />
          ) : (
            data.results.map((tv) => {
              return <SingleRecommended movie={tv} key={tv.id} />;
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
