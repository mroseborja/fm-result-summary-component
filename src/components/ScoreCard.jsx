import ResultCard from "./ResultCard";
import SummaryCard from "./SummaryCard";

const ScoreCard = () => {
  return (
    <div className="flex items-center justify-center md:h-screen">
      <div className="font-hanken-grotesk grid shadow-[hsl(221,_100%,_96%)_0px_15px_30px_5px] md:max-w-xl md:grid-cols-2 md:rounded-3xl">
        <ResultCard />
        <SummaryCard />
      </div>
    </div>
  );
};

export default ScoreCard;
