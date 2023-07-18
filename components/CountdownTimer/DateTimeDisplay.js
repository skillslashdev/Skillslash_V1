import styles from "./datetime.module.css";
const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div className={styles.countdown}>
      <p>{value}</p>
      <span>{type}</span>
    </div>
  );
};

export default DateTimeDisplay;
