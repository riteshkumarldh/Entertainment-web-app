import { useGetTrendingDataQuery } from "../features/api/apiSlice";
// components
import SingleTrendingCard from "./SingleTrendingCard";
import Spinner from "./Spinner";

export default function TrendingSection() {
  const { data, isLoading } = useGetTrendingDataQuery();

  return (
    <section className="trending">
      <h3 className="trending__title">Trending</h3>
      <div className="trending__banner">
        {isLoading ? (
          <Spinner />
        ) : (
          data.results.slice(0, 15).map((movie) => {
            return <SingleTrendingCard key={movie.id} movie={movie} />;
          })
        )}
      </div>
    </section>
  );
}
