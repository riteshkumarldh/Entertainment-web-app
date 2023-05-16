import { useGetMoviesAndTvShowsQuery } from "../features/api/apiSlice";

export default function RecommendedSection() {
  const { isLoading, isSuccess, data } = useGetMoviesAndTvShowsQuery();

  console.log(data);

  return (
    <section className="recommended trending">
      <h3 className="trending__title">Recommended For You</h3>
      <div className="recommended__container"></div>
    </section>
  );
}
