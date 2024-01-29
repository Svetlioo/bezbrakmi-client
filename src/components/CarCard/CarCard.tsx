import styles from "./CarCard.module.css";

interface CarInfo {
  brand: string;
  model: string;
  year: number;
  price: number;
  horsepower: number;
  description: string;
  fuelType: string;
  transmission: string;
  color: string;
  motorModel: string;
  dateAdded: Date;
  location: string;
  mileage: number;
  owner: string;
}

function CarCard({ carInfo }: { carInfo: CarInfo }) {
  const formatDate = (date: Date) => {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    const isToday =
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear();
    const isYesterday =
      date.getDate() === yesterday.getDate() &&
      date.getMonth() === yesterday.getMonth() &&
      date.getFullYear() === yesterday.getFullYear();

    if (isToday) {
      return `Днес, ${date.getHours().toString().padStart(2, "0")}:${date
        .getMinutes()
        .toString()
        .padStart(2, "0")} ч.`;
    } else if (isYesterday) {
      return `Вчера, ${date.getHours().toString().padStart(2, "0")}:${date
        .getMinutes()
        .toString()
        .padStart(2, "0")} ч.`;
    } else {
      const formattedDate = `${date.getDate().toString().padStart(2, "0")}.${(
        date.getMonth() + 1
      )
        .toString()
        .padStart(2, "0")}.${date.getFullYear().toString().slice(-2)}, ${date
        .getHours()
        .toString()
        .padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")} ч.`;

      return formattedDate;
    }
  };

  return (
    <figure className={styles["car-card"]}>
      <p className={styles["car-date"]}>{formatDate(carInfo.dateAdded)}</p>
      <div className={styles["image-container"]}>
        <img
          src="src/assets/bmw photo.jpeg"
          alt={`${carInfo.year} ${carInfo.brand} ${carInfo.model}`}
          className={styles["car-image"]}
        />
        <p className={styles["car-price"]}>{carInfo.price} лв.</p>
      </div>

      <figcaption className={styles["car-details"]}>
        <h2 className={styles["car-heading"]}>
          {carInfo.brand} {carInfo.model}
        </h2>
        <h3>{carInfo.motorModel}</h3>
        <div className={styles.divider} />
        <p className={styles["car-main-details"]}>
          {carInfo.year}, {carInfo.fuelType}, {carInfo.mileage} км.
        </p>
        <p className={styles["car-main-details"]}>
          {carInfo.horsepower} к.с., {carInfo.transmission}
        </p>
        <p className={styles["car-description"]}>
          {carInfo.description.length > 55
            ? `${carInfo.description.slice(0, 55)}...`
            : carInfo.description}
        </p>
        <div
          className={`${styles["car-location-owner"]} ${
            carInfo.description.length < 30 ? styles["short-description"] : ""
          }`}
        >
          <p>{carInfo.owner}</p>
          <p>{carInfo.location}</p>
        </div>
      </figcaption>
    </figure>
  );
}

export default CarCard;
