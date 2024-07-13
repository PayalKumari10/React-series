// import { Fragment } from "react";
import  NetflixSeries, { Header,Footer } from "./components/NetflixSeries";
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
    <Header/>
    <NetflixSeries/>
    <NetflixSeries/>
    <NetflixSeries/>
    <NetflixSeries/>
    <NetflixSeries/>
    <Footer/>
    </>
  );
};

