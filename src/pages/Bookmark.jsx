import { useSelector } from "react-redux";
import SingleRecommended from "../components/SingleRecommended";
import { Link } from "react-router-dom";

export default function Bookmark() {
  const bookmarked = useSelector((state) => state.bookmark.bookmarked);

  return (
    <section className="main trending bookmarked">
      <h3 className="trending__title">Recommended For You</h3>
      <div className="recommended__container">
        {bookmarked.length > 0 ? (
          bookmarked.map((data) => {
            return <SingleRecommended key={data.id} movie={data} />;
          })
        ) : (
          <div className="no-bookmark">
            <h2>You have not saved any Movie or TV</h2>
            <Link to="/">Go to Home</Link>
          </div>
        )}
      </div>
    </section>
  );
}
