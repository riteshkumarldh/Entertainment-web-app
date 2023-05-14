// components
import Avatar from "./Avatar";
import Logo from "./Logo";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <Logo />
        <Navbar />
        <Avatar />
      </div>
    </header>
  );
}
