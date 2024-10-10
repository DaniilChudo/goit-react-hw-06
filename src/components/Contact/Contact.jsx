import styles from "./Contact.module.css";
import { IoIosContact } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = ({ name, number, onDelete }) => {
  return (
    <li className={styles.item}>
      <p>
        <IoIosContact className="menIcon" size="24" />
        {name}
      </p>
      <p>
        <FaPhoneAlt className="phoneIcon" size="24" />
        {number}
      </p>
      <button type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
