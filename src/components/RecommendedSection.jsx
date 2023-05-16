import { useGetMoviesAndTvShowsQuery } from "../features/api/apiSlice";
// components
import SingleRecommended from "./SingleRecommended";
import Spinner from "./Spinner";

export default function RecommendedSection() {
  const { isLoading, data } = useGetMoviesAndTvShowsQuery();

  console.log(data);

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
    </section>
  );
}
