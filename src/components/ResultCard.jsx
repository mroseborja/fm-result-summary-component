const ResultCard = () => {
  return (
    <div className="result card card-primary text-center text-lavender">
      <h1>Your Result</h1>
      <div className="circle circle-primary m-auto">
        <p className="pt-2 text-7xl font-extrabold text-white">76</p>
        <span className="text-lavender/60">of 100</span>
      </div>

      <div className="result-description">
        <p className="text-3xl font-bold text-white">Great</p>
        <p className="mt-4 leading-snug">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </div>
  );
};

export default ResultCard;
