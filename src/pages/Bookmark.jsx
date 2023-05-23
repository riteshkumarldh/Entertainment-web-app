import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SingleBookmark from "../components/SingleBookmark";

export default function Bookmark() {
  const bookmarked = useSelector((state) => state.bookmark.bookmarked);

  return (
    <section className="main trending bookmarked">
      <h3 className="trending__title">Recommended For You</h3>
      <div className="recommended__container">
        {bookmarked.length > 0 ? (
          bookmarked.map((data) => {
            return <SingleBookmark key={data.id} data={data} />;
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
