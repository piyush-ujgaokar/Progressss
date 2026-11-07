const Intrests = ({ data, setData, errors }) => {
  const { intrests } = data;

  const handleChange = (e) => {
    setData((prev) =>(
        {
      ...prev,
      intrests:e.target.checked
        ? [...prev.intrests, e.target.name]
        : prev.intrests.filter((i) => i !== e.target.name),
  }
    ));
  };

  console.log(intrests);

  return (
    <div>
      <div>
        <label htmlFor="">
          <input
            type="checkbox"
            name="coding"
            checked={intrests.includes("coding")}
            onChange={handleChange}
            className="cursor-pointer"
          />
          Coding
        </label>
      </div>
      <div>
        <label htmlFor="">
          <input
            type="checkbox"
            name="music"
            checked={intrests.includes("music")}
            onChange={handleChange}
            className="cursor-pointer"
          />
          Music
        </label>
      </div>
      <div>
        <label htmlFor="">
          <input
            type="checkbox"
            name="travelling"
            checked={intrests.includes("travelling")}
            onChange={handleChange}
            className="cursor-pointer"
          />
          Travelling
        </label>
      </div>
      <div>
        <label htmlFor="">
          <input
            type="checkbox"
            name="dancing"
            checked={intrests.includes("dancing")}
            onChange={handleChange}
            className="cursor-pointer"
          />
          Dancing
        </label>
      </div>
      {errors.intrestsErr && <p className="text-red-500">{errors.intrestsErr}</p>}
    </div>
  );
};

export default Intrests;
