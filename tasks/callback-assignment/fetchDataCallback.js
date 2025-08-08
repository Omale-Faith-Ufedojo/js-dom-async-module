function fetchDataWithCallback(callback) {
    setTimeout(function () {
      let error = true; 
        try {
        if (error) {
          throw new Error("Fetch failed");
        }
        callback("Data fetched");
      } catch (err) {
        console.log("Error: Fetch failed");
      }
    }, 2000);
  }
  
  fetchDataWithCallback(function (message) {
    console.log(message);
  });
  