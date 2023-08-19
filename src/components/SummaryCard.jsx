import CategoryScore from "./CategoryItem";
import data from "../data.json";

const SummaryCard = () => {
  const colors = ["red", "yellow", "green", "blue"];

  return (
    <div className="p-7">
      <h2 className="text-lg font-bold text-gray-blue md:py-0.5">Summary</h2>
      <div className="my-5">
        {data.map((d, idx) => (
          <CategoryScore key={d.category} data={d} color={colors[idx]} />
        ))}
      </div>
      <button className="text-white my-2.5 w-full rounded-full bg-gray-blue py-4 text-sm hover:bg-gradient-to-b hover:from-slate-blue hover:to-royal-blue md:py-3">
        Continue
      </button>
    </div>
  );
};

export default SummaryCard;
