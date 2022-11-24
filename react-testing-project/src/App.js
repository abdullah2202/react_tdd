// App.js

import React, {useState} from "react";

const App = () => {
   const [heading, setHeading] = useState("Codesweetly Test");

   const handleClick = () => {
      setHeading("A Codesweetly Project");
   };
   return (
      <>
         <h1>{heading}</h1>
         <button type="button" name="btnChangeHeading" onClick={handleClick}>
            Update Heading
         </button>
         <button type="button" name="btnOk">
            OK
         </button>
         <button type="button" name="btnCancel">
            Cancel
         </button>
      </>
   );
};

export default App;