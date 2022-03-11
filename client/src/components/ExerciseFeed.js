import ExerciseList from "./ExerciseList";

const ExerciseFeed = ({ exercises }) => {
  return (
    <div className="exercise-feed">
      <ExerciseList exercises={exercises} />
    </div>
  );
};

export default ExerciseFeed;
