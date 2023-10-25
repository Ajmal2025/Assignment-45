

// 45.	Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

class Car {
    private manufacturer: string;
    private model: string;
    private color: string;
    private year: number;
    private features: string[];
  
    constructor(manufacturer: string, model: string, color?: string, year?: number, ...features: string[]) {
      this.manufacturer = manufacturer;
      this.model = model;
      this.color = color || 'N/A';
      this.year = year || 0;
      this.features = features;
    }
  
    getInfo(): object {
      return {
        Manufacturer: this.manufacturer,
        Model: this.model,
        Color: this.color,
        Year: this.year,
        Features: this.features
      };
    }
  }
  
  // Create a car object
  const myCar = new Car('Mercedes', 'Benz', 'White', 2022, 'EV', 'Auto');
  
  // Print the car information
  console.log(myCar.getInfo());
  