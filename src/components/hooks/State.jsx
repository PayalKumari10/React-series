export const State = () => {
  let value = 0;
  const handleButtonClcik = () => {
    value++;
    console.log(value);
  };

  return (
    <>
    <section className="main-div"></section>
    <h1>{value}</h1>
    <button onClick={handleButtonClcik}>Increment</button>
    </>
  );
};