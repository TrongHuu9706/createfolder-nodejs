const fs = require("fs"); 
  
const path = "./new-Directory/new/"; 
  
fs.access(path, function(error){ 
   
  // To check if the given directory  
  // already exists or not 
  if (error) { 
    // If current directory does not exist 
    // then create it 
    fs.mkdir(path, (error) => { 
      if (error) { 
        console.log(error); 
      } else { 
        console.log("New Directory created successfully !! : " +path); 
      } 
    }); 
  } else { 
    console.log("Given Directory already exists !!"); 
  } 
}); 
