export default function NutritionalInfo({ nutritionInfo }) {
  const { calories, protein, carbs, fat } = nutritionInfo
  return (
    <div>
      <p>Calories: {calories} kcal</p>
      <p>Protein: {protein} g</p>
      <p>Carbs: {carbs} g</p>
      <p>Fat: {fat} g</p>
    </div>
  );
}