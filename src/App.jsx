// import NetflixSeries from "./components/NetflixSeries";
import "./components/Netflix.css";
// import "./components/Netflix.module.css"
import { EventProps } from "./components/EventProps";
// import { EventHandling } from "./components/EventHandling";

export const App = () => {
  return (
    <section className="container">
      {/* <h1 className="card-heading">List of Best Netflix Series</h1>  */}
       {/* <NetflixSeries />; */}
      {/* <EventHandling/> */}
      <EventProps/>
    </section>
  );
};
