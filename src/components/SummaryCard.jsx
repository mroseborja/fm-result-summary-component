import CategoryScore from "./CategoryItem";
import data from "../data.json";

const SummaryCard = () => {
  const colors = ["red", "yellow", "green", "blue"];

  return (
    <div className="summary">
      <h2 className="text-gray-blue">Summary</h2>
      <div className="flex flex-col gap-5">
        {data.map((d, idx) => (
          <CategoryScore key={d.category} data={d} color={colors[idx]} />
        ))}
      </div>
      <button className="button button-primary w-full text-lg">Continue</button>
    </div>
  );
};

export default SummaryCard;
