// components
import SearchBox from "../components/SearchBox";
import SingleRecommended from "../components/SingleRecommended";
import Spinner from "../components/Spinner";

import { useGetOnlyMoviesQuery } from "../features/api/apiSlice";

export default function Movies() {
  const { data, isLoading } = useGetOnlyMoviesQuery();
  console.log(data);

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
      </div>
    </section>
  );
}
