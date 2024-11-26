// control flow
    //------------------------------------------Part 1--------------------------------------------------------------

    const radius = 5; 
    const PI = 3.1415;
    const minSpacePerPlant = 0.8;
    const availablePlants = 20; 
    
    const area = PI * radius * radius;
    const maxCapacity = Math.floor(area / minSpacePerPlant); 
    
    //  week (1, 2, 3 ), calculate & check the growth
    for (let weeks = 1; weeks <= 3; weeks++) {
        // Calculate plant count after 'weeks' weeks
        let plantCount = availablePlants;
        for (let i = 0; i < weeks; i++) 
            {
            plantCount *= 2; 
            }
    
        const capacity80Per = maxCapacity * 0.8;
        const capacity50Per = maxCapacity * 0.5;
    
        // Determine category based on the plant count
        let category = "";
        if (plantCount > capacity80Per) {
            category = "Pruned (to stop exceeding garden capacity)";
        } else if (plantCount >= capacity50Per && plantCount <= capacity80Per) {
            category = "Monitored (growing at an acceptable rate)";
        } else {
            category = "Planted (room for more plants)";
        }
    
        // Display the results for the current week
        console.log(`After ${weeks} week(s):`);
        console.log(`Plant count: ${plantCount}`);
        console.log(`Maximum capacity: ${maxCapacity}`);
        console.log(`Category: ${category}\n`);
    }
   
    //------------------------------------------------Part 2-------------------------------------------------------------

    // const PI = 3.1415;
    // const minSpacePerPlant = 0.8;
    const initialPlant = 100; 
    const weeks = 10; // number of weeks to let the plants grow without pruning
    
    // Calculate plant count after 'weeks' weeks
    let plantCount = initialPlant * Math.pow(2, weeks); // Double the plant count each week
    
    // Calculate the total area required for the plants
    let totalAreaRequired = plantCount * minSpacePerPlant;
    
    // Calculate the radius of the expanded garden
    let expandedRadius = Math.sqrt(totalAreaRequired / PI);
    
    //  results
    console.log('After ${weeks} weeks:');
    console.log('Plant count: ${plantCount}');
    console.log('Total area required for the plants: ${totalAreaRequired.toFixed(2)} square meters');
    console.log('Radius of the expanded garden: ${expandedRadius.toFixed(2)} meters')


// --------------------------------------------Part 3----------------------------------------------------------------------------------

// const PI = 3.1415;
// const radius = 5; // radius of the original garden in meters
// const minSpacePerPlant = 0.8; // space required per plant in square meters
const initialPlants = 100; // starting number of plants

try {
    // Calculate the area of the original circular garden
    const area = PI * radius * radius;
    
    // Calculate the total space required for the initial number of plants
    const totalSpaceRequired = initialPlants * minSpacePerPlant;

    // Check if the available area is enough
    if (totalSpaceRequired > area) {
        // If the space required exceeds the available space, throw an error
        throw new Error("The space required for the plants exceeds the available area in the garden.");
    }

    // If the space is enough, log the plant count and space details
    console.log('The garden can accommodate ${initialPlants} plants.');
    console.log('Total space required: ${totalSpaceRequired} square meters');
    console.log('Available garden area: ${area} square meters');

} catch (error) {
    // Handle any errors that occur (like space exceeding the available area)
    console.log("Error:", error.message);
}