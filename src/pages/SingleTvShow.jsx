import SingleMovieorTvShow from "../components/SingleMovieorTvShow";
import Spinner from "../components/Spinner";
import { useGetSingleTvShowQuery } from "../features/api/apiSlice";
import { useParams } from "react-router-dom";

export default function SingleTvShow() {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleTvShowQuery(id);

  return (
    <section className="main">
      <div className="wrapper">
        {isLoading ? <Spinner /> : <SingleMovieorTvShow data={data} />}
      </div>
    </section>
  );
}
