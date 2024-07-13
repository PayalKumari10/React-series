const NetflixSeries = () => {
    const name = "Queen of Tears";
    const rating = "8.2";
    const summary = " Baek Hyun-woo  both at home and at work.But upon deciding its future, visit to his family."
    let age = 19;
    
   //  let canWatch = "Not Available";
   //  if(age >= 18) canWatch = "Watch Now";
    

    const canWatch = () => {
     if (age >= 18) return "Watch Now";
     return "Not Available";
    };


    const returnGenre = () => {
     const genre = "RomCop";
     return genre;
    };


   //  if(age < 18) {
   //   return (
   //     <div>
   //       <div style={{ textAlign: 'center' }}>
   //         <img src="pic.jpg" alt="pic.jpg" width="30%" height="30%"/>
   //         <img src="pic1.jpg" alt="pic.jpg" width="30%" height="30%"/>
   //       </div>
   //       <h2>Name: {name} </h2>
   //       <h3>Rating: {rating}</h3>
   //       <p>Summary: {summary}</p>
   //       <p>Genre: {returnGenre()}</p>
   //       <button>Not Available</button>
   //     </div>
   //   );
   //  }

        
   //2: But this violates DRY (Do not repeat yourself)


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
     {/* <button>{age >= 18 ? "Watch Now" : "Not Available"}</button> */}
      {/* <button>{canWatch()}</button> */}
       <button>{canWatch()}</button>

   </div>
 );
};

export default NetflixSeries;

 export const Header = () => {
    return <p>copyright @PayalKumar</p>;
};

export const Footer = () => {
    return <p>copyright @PayalKumar</p>;
};
