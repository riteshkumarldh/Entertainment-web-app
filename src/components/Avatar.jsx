import avatar from "../assets/image-avatar.png";

export default function Avatar() {
  return (
    <figure className="avatar">
      <img className="avatar__img" src={avatar} alt="avatar" />
    </figure>
  );
}
