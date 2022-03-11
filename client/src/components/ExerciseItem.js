const ExerciseItem = ({ exercise }) => {
  let className = "";
  if (exercise.id % 2 == 0) {
    className = "exercise-even";
  } else {
    className = "exercise-odd";
  }
  return (
    <li className={className}>
      <strong>{exercise.title}</strong> {exercise.description}
    </li>
  );
};
export default ExerciseItem;
