    let statistics = {
        redCars: 21, 
        blueCars: 45, 
        greenCars: 12, 
        raceCars: 5, 
        blackCars: 40,
        rareCars: 2
    };

    // Print out the value of the property if the property starts with the letter r,
    // or if the value of that property is an odd number. 
    for (const car in statistics) {
        if (car[0] == 'r' || statistics[car] % 2 != 0) {
            console.log(statistics[car]);
        }
    }