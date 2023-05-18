import { useSelector } from "react-redux";

const s = useSelector((state) => state.bookmark.bookmarked);

console.log(s);
