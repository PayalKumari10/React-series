// import { Fragment } from "react";

export const App = () => {
  
  // ********************   1    ***************
  //  return ( [    <NetflixSeries key="1"/>, <NetflixSeries key="2"/>
  //  ])

    // ********************   2    ***************

  // return (
  //   <Fragment>
  //   <NetflixSeries/>
  //   <NetflixSeries/>
  //   <NetflixSeries/>
  //   <NetflixSeries/>
  //   <NetflixSeries/>
  //   </Fragment>
  // );

     // ********************   3    ***************


  return (
    <>
    <NetflixSeries/>
    <NetflixSeries/>
    <NetflixSeries/>
    <NetflixSeries/>
    <NetflixSeries/>
    </>
  );
};

const NetflixSeries = () => {
     const name = "Queen of Tears";
     const rating = "8.2";
     const summary = " Baek Hyun-woo  both at home and at work.But upon deciding its future, visit to his family."
     const returnGenre = () => {
      const genre = "RomCop";
      return genre;
     }



  return (
    <div>
      <div style={{ textAlign: 'center' }}>
        <img src="pic.jpg" alt="pic.jpg" width="30%" height="30%"/>
        <img src="pic1.jpg" alt="pic.jpg" width="30%" height="30%"/>
      </div>
      <h2>Name: {name} </h2>
      <h3>Rating: {rating}</h3>
      <p>Summary: {summary}</p>
      <p>Genre: {returnGenre()}</p>
    </div>
  );
};
// React.createElement("h1", null, "Hello, Payal, react-19");