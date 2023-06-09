import SingleMovieorTvShow from "../components/SingleMovieorTvShow";
import Spinner from "../components/Spinner";
import { useGetSingleMovieQuery } from "../features/api/apiSlice";
import { useParams } from "react-router-dom";

export default function SingleMovie() {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleMovieQuery(id);
  return (
    <section className="main">
      <div className="wrapper">
        {isLoading ? <Spinner /> : <SingleMovieorTvShow data={data} />}
      </div>
    </section>
  );
}
