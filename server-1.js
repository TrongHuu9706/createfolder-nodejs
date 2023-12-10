const fs = require("fs"); 
  
// Multilevel directory 
const path = "./directory1/directory2/new-directory"; 
  
fs.access(path, (error) => { 
  
  // To check if given directory  
  // already exists or not 
  if (error) { 
    // If current directory does not exist then create it 
    fs.mkdir(path, { recursive: true }, (error) => { 
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
