// create your App component here
import React , {useEffect, useState} from "react";
function App (){
    const [Img , setImg] = useState(null)
   useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => setImg(data.message));
  },[]); 
    return(
        <div>
      {Img ? (
        <img src={Img} alt="A Random Dog" />
      ) : (
        <p>Loading...</p>
      )}
    </div>
    )

};
export default App;