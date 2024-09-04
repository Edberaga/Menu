export default function Category({ title, foods }) {
    return (
      <div>
        <h2>{title}</h2>
        {foods}
      </div>
    );
  }