export default function Analysis() {
  const data = [
    { q: "Define photosynthesis", level: "Remember" },
    { q: "Explain sunlight", level: "Understand" },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="mb-4 font-semibold">Results</h2>

      {data.map((item, i) => (
        <div key={i} className="flex justify-between border-b py-2">
          <span>{item.q}</span>
          <span className="bg-blue-500 text-white px-3 rounded">
            {item.level}
          </span>
        </div>
      ))}
    </div>
  );
}
