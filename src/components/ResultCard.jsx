const ResultCard = () => {
  return (
    <div className="rounded-b-3xl bg-gradient-to-b from-slate-blue to-royal-blue py-5 text-center text-lavender md:rounded-3xl md:py-7">
      <h1 className="py-0.5 text-lg font-bold">Your Result</h1>
      <div className="m-auto my-4 w-fit rounded-full bg-gradient-to-b from-violet-blue to-persian-blue/0 px-9 py-6 md:my-6 md:px-12 md:py-9">
        <p className="text-white pt-2 text-6xl font-extrabold">
          76{" "}
          <span className="block text-sm font-light text-lavender/60">
            of 100
          </span>
        </p>
      </div>
      <div className="m-auto mb-4 w-8/12 md:mb-3 md:mt-6">
        <p className="text-white text-2xl font-bold">
          Great
          <span className="mt-2.5 block text-sm font-light text-lavender">
            You scored higher than 65% of the people who have taken these tests.
          </span>
        </p>
      </div>
    </div>
  );
};

export default ResultCard;
