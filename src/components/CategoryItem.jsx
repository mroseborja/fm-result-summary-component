const CategoryItem = ({ data, color }) => {
  const colorVariants = {
    red: { text: "text-light-red", bg: "bg-light-red/5" },
    yellow: { text: "text-orange-yellow", bg: "bg-orange-yellow/5" },
    green: { text: "text-green-teal", bg: "bg-green-teal/5" },
    blue: { text: "text-cobalt-blue", bg: "bg-cobalt-blue/5" },
  };

  return (
    <div
      className={`flex items-center ${colorVariants[color].bg} my-4 rounded-md p-3 md:my-3.5`}
    >
      <img src={data.icon} className="h-min w-min px-2 md:px-1" alt="" />
      <div className="flex w-full justify-between px-2 md:px-1">
        <h3 className={`${colorVariants[color].text} text-sm font-medium`}>
          {data.category}
        </h3>
        <p className="text-sm font-extrabold text-gray-blue/50">
          <span className="pr-1 text-gray-blue">{data.score} </span> / 100
        </p>
      </div>
    </div>
  );
};

export default CategoryItem;
