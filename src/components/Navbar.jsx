import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__list--item">
          <NavLink to="/" className="navbar__list--link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              stroke="none"
            >
              <path d="M8 0H1C.4 0 0 .4 0 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11H1c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1ZM19 0h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1Z" />
            </svg>
          </NavLink>
        </li>
        <li className="navbar__list--item">
          <NavLink to="/movies" className="navbar__list--link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              stroke="none"
            >
              <path d="M16.956 0H3.044A3.044 3.044 0 0 0 0 3.044v13.912A3.044 3.044 0 0 0 3.044 20h13.912A3.044 3.044 0 0 0 20 16.956V3.044A3.044 3.044 0 0 0 16.956 0ZM4 9H2V7h2v2Zm-2 2h2v2H2v-2Zm16-2h-2V7h2v2Zm-2 2h2v2h-2v-2Zm2-8.26V4h-2V2h1.26a.74.74 0 0 1 .74.74ZM2.74 2H4v2H2V2.74A.74.74 0 0 1 2.74 2ZM2 17.26V16h2v2H2.74a.74.74 0 0 1-.74-.74Zm16 0a.74.74 0 0 1-.74.74H16v-2h2v1.26Z" />
            </svg>
          </NavLink>
        </li>
        <li className="navbar__list--item">
          <NavLink to="/tvshows" className="navbar__list--link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              stroke="none"
            >
              <path d="M20 4.481H9.08l2.7-3.278L10.22 0 7 3.909 3.78.029 2.22 1.203l2.7 3.278H0V20h20V4.481Zm-8 13.58H2V6.42h10v11.64Zm5-3.88h-2v-1.94h2v1.94Zm0-3.88h-2V8.36h2v1.94Z" />
            </svg>
          </NavLink>
        </li>
        <li className="navbar__list--item">
          <NavLink to="/bookmark" className="navbar__list--link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 12 14"
              fill="none"
              stroke="transparent"
              width="1em"
            >
              <path
                strokeWidth="1.5"
                d="m10.711.771.01.004.01.005a.28.28 0 0 1 .14.107c.032.048.046.09.046.15v11.927a.243.243 0 0 1-.046.15.282.282 0 0 1-.14.106l-.007.004-.008.003a.29.29 0 0 1-.107.014c-.1 0-.17-.027-.24-.091L6.357 9.235l-.524-.512-.524.512-4.011 3.915a.328.328 0 0 1-.24.1.244.244 0 0 1-.103-.021l-.01-.004-.01-.005a.281.281 0 0 1-.139-.107.244.244 0 0 1-.046-.15V1.037c0-.058.014-.101.046-.15A.281.281 0 0 1 .935.78l.01-.005.01-.004A.245.245 0 0 1 1.057.75h9.552c.038 0 .07.007.102.021Z"
              />
            </svg>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
