# Car Park

*Welcome to our car park*

## File-IO

 - `readFromFile()` method with a fileName parameter
 - it should return the fileContent, and handle the errors
 - `writeToFile()` method which with 2 parameter: fileName and content
 - it should handle the filewriting, and checks if the file exists or not

## Car

 - it should have 3 main properties: an id, a license plate, and a manufacture year
 - create a constructor for setting those values
 - use acces modifiers, to protect the object's values

## CarPark

 - it should have a `carPark` array of Cars
 - `addCar()` method which add's a new car to the carPark
 - `addCarToFile()` method which add's a new car to the [file](./cars.csv), with 3 parameter: license plate, year of manufacture, and a parking ticket(0 or 1)
 - `removeCar()` method which removes a car, by ID
 - `getOldest()` method which returns the oldest car's license plate from the [file](./cars.csv)
 - `getPenalty()` method which returns a new array of car's who hasn't got a parking ticket from the [file](./cars.csv)
