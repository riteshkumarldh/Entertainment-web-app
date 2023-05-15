import { useGetTrendingDataQuery } from "../features/api/apiSlice";
import SingleTrendingCard from "./SingleTrendingCard";

export default function TrendingSection() {
  console.log(useGetTrendingDataQuery());
  const { data, isLoading, isSuccess } = useGetTrendingDataQuery();

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <section className="trending">
      <h3 className="trending__title">Trending</h3>
      <div className="trending__banner">
        {isSuccess &&
          data.results.slice(0, 10).map((movie) => {
            return <SingleTrendingCard key={movie.id} movie={movie} />;
          })}
      </div>
    </section>
  );
}
