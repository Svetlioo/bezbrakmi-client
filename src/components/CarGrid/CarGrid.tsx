import CarCard from "../CarCard/CarCard";
import styles from "./CarGrid.module.css";

function CarGrid() {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  const carInfoList = [
    {
      brand: "Mercedes-Benz",
      model: "C-Class",
      year: 2022,
      price: 45000,
      horsepower: 250,
      description:
        "Много добро състояние,във вида както е пристигнала от Италия.",
      fuelType: "Газ/Бензин",
      transmission: "Автоматик",
      color: "Silver",
      motorModel: "C300",
      dateAdded: new Date(2024, 1, 21, 12, 30),
      location: "Плевен",
      mileage: 180000,
      owner: "DIS",
    },
    {
      brand: "Tesla",
      model: "Model 3",
      year: 2023,
      price: 55000,
      horsepower: 283,
      description:
        "Колата е личен автомобил и се кара ежедневно. Стегнат и напълно обслужена. Гражданска, преглед винетка всичко платено. Много удобен и икономичен автомобил с газов инжекцион.",
      fuelType: "Електрически",
      transmission: "Автоматик",
      color: "Blue",
      motorModel: "Performance Dual Motor",
      dateAdded: new Date(2024, 1, 25),
      location: "София",
      mileage: 293943,
      owner: "Частно лице",
    },
    {
      brand: "Audi",
      model: "A6",
      year: 2022,
      price: 50000,
      horsepower: 300,
      description:
        "Двигател автомат раздатка ново масло филтри. Всичко обслужено.преден заден деф.опслужени",
      fuelType: "Дизел",
      transmission: "Автоматик",
      color: "Black",
      motorModel: "3.0 TDI Quattro",
      dateAdded: yesterday,
      location: "Плевен",
      mileage: 129000,
      owner: "КЪНЧЕВ",
    },
    {
      brand: "Mercedes-Benz",
      model: "C-Class",
      year: 2022,
      price: 45000,
      horsepower: 250,
      description:
        "Много добро състояние,във вида както е пристигнала от Италия.",
      fuelType: "Газ/Бензин",
      transmission: "Автоматик",
      color: "Silver",
      motorModel: "C300",
      dateAdded: new Date(),
      location: "Плевен",
      mileage: 115000,
      owner: "DIS",
    },
    {
      brand: "Tesla",
      model: "Model 3",
      year: 2023,
      price: 55000,
      horsepower: 283,
      description:
        "Колата е личен автомобил и се кара ежедневно. Стегнат и напълно обслужена. Гражданска, преглед винетка всичко платено. Много удобен и икономичен автомобил с газов инжекцион.",
      fuelType: "Електрически",
      transmission: "Автоматик",
      color: "Blue",
      motorModel: "Performance Dual Motor",
      dateAdded: new Date(),
      location: "София",
      mileage: 230000,
      owner: "Частно лице",
    },
    {
      brand: "Audi",
      model: "A6",
      year: 2022,
      price: 50000,
      horsepower: 300,
      description:
        "Двигател автомат раздатка ново масло филтри. Всичко обслужено.преден заден деф.опслужени",
      fuelType: "Дизел",
      transmission: "Автоматик",
      color: "Black",
      motorModel: "3.0 TDI Quattro",
      dateAdded: new Date(),
      location: "Плевен",
      mileage: 128000,
      owner: "КЪНЧЕВ",
    },
    {
      brand: "Mercedes-Benz",
      model: "C-Class",
      year: 2022,
      price: 45000,
      horsepower: 250,
      description:
        "Много добро състояние,във вида както е пристигнала от Италия.",
      fuelType: "Газ/Бензин",
      transmission: "Автоматик",
      color: "Silver",
      motorModel: "C300",
      dateAdded: new Date(),
      location: "Плевен",
      mileage: 14000,
      owner: "DIS",
    },
    {
      brand: "Tesla",
      model: "Model 3",
      year: 2023,
      price: 55000,
      horsepower: 283,
      description:
        "Колата е личен автомобил и се кара ежедневно. Стегнат и напълно обслужена. Гражданска, преглед винетка всичко платено. Много удобен и икономичен автомобил с газов инжекцион.",
      fuelType: "Електрически",
      transmission: "Автоматик",
      color: "Blue",
      motorModel: "Performance Dual Motor",
      dateAdded: new Date(),
      location: "София",
      mileage: 200000,
      owner: "Частно лице",
    },
    {
      brand: "Audi",
      model: "A6",
      year: 2022,
      price: 50000,
      horsepower: 300,
      description:
        "Двигател автомат раздатка ново масло филтри. Всичко обслужено.преден заден деф.опслужени",
      fuelType: "Дизел",
      transmission: "Автоматик",
      color: "Black",
      motorModel: "3.0 TDI Quattro",
      dateAdded: new Date(),
      location: "Плевен",
      mileage: 180020,
      owner: "КЪНЧЕВ",
    },
    {
      brand: "Mercedes-Benz",
      model: "C-Class",
      year: 2022,
      price: 45000,
      horsepower: 250,
      description:
        "Много добро състояние,във вида както е пристигнала от Италия.",
      fuelType: "Газ/Бензин",
      transmission: "Автоматик",
      color: "Silver",
      motorModel: "C300",
      dateAdded: new Date(),
      location: "Плевен",
      mileage: 150000,
      owner: "DIS",
    },
    {
      brand: "Tesla",
      model: "Model 3",
      year: 2023,
      price: 550002,
      horsepower: 283,
      description:
        "Колата е личен автомобил и се кара ежедневно. Стегнат и напълно обслужена. Гражданска, преглед винетка всичко платено. Много удобен и икономичен автомобил с газов инжекцион.",
      fuelType: "Електрически",
      transmission: "Автоматик",
      color: "Blue",
      motorModel: "Performance Dual Motor",
      dateAdded: new Date(),
      location: "София",
      mileage: 200003,
      owner: "Частно лице",
    },
    {
      brand: "Audi",
      model: "A6",
      year: 2022,
      price: 50000,
      horsepower: 300,
      description:
        "Двигател автомат раздатка ново масло филтри. Всичко обслужено.преден заден деф.опслужени",
      fuelType: "Дизел",
      transmission: "Автоматик",
      color: "Black",
      motorModel: "3.0 TDI Quattro",
      dateAdded: new Date(),
      location: "Плевен",
      mileage: 18000,
      owner: "КЪНЧЕВ",
    },
  ];

  return (
    <div className={styles["home-container"]}>
      {carInfoList.map((car) => (
        <CarCard carInfo={car} key={car.mileage} />
      ))}
    </div>
  );
}

export default CarGrid;
