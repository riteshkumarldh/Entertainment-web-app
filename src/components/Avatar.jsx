import { Link } from "react-router-dom";
// component
import avatar from "../assets/image-avatar.png";

export default function Avatar() {
  return (
    <Link to="/login">
      <figure className="avatar">
        <img className="avatar__img" src={avatar} alt="avatar" />
      </figure>
    </Link>
  );
}
