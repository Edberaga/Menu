

function MenuItem({ name, price, nutritionInfo }) {
  console.log(nutritionInfo);
  return (
    <div>
      <p>
        <strong>{name}</strong> | {price}
      </p>
      <NutritionalInfo nutritionInfo={nutritionInfo} />
    </div>
  );
}