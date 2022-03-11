import ExerciseItem from "./ExerciseItem";

const ExerciseList = ({ exercises }) => {
  let list = [];
  for (let i = 0; i < exercises.length; i++) {
    list.push(<ExerciseItem key={i} exercise={exercises[i]} />);
  }
  return (
    <div className="exercise-list">
      <ol>{list}</ol>
    </div>
  );
};

export default ExerciseList;
