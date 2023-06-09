// components
import RecommendedSection from "../components/RecommendedSection";
import SearchBox from "../components/SearchBox";
import TrendingSection from "../components/TrendingSection";

export default function Home() {
  return (
    <div className="main">
      <div className="home">
        <SearchBox />
        <TrendingSection />
        <RecommendedSection />
      </div>
    </div>
  );
}
