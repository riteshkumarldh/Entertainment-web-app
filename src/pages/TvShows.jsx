// components
import SearchBox from "../components/SearchBox";
import SingleRecommended from "../components/SingleRecommended";
import Spinner from "../components/Spinner";
import { useGetOnlyTvShowsQuery } from "../features/api/apiSlice";

export default function TvShows() {
  const { isLoading, data } = useGetOnlyTvShowsQuery();
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
      </div>
    </section>
  );
}
