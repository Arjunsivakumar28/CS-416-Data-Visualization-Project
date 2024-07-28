console.log("script check")

d3.csv("icc_mens_t20_world_cup_male_csv2/682897_info.csv")
  .then(function(data) {
    // Handle the loaded data here
    console.log(data); // For demonstration, you can replace this with your desired processing logic
  })
  .catch(function(error) {
    console.error('Error loading CSV file:', error);
  });
