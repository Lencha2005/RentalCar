import { useState } from "react";
import Button from "../ui/Button/Button";
import toast from "react-hot-toast";
import css from "./BookingForm.module.css";
import Calendar from "../Calendar/Calendar";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: null,
    comment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (date) => {
    setFormData((prev) => ({ ...prev, date }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Reservation sent successfully!");
    setFormData({ name: "", email: "", date: null, comment: "" });
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <h2 className={css.title}>Book your car now</h2>
      <p className={css.text}>
        Stay connected! We are always ready to help you.
      </p>
      <div className={css.wrapperInput}>
        <input
          className={css.input}
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          className={css.input}
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <Calendar
          className={css.input}
          selectedDate={formData.date}
          onChange={handleDateChange}
        />

        <textarea
          className={`${css.input} ${css.textaria}`}
          type="textarea"
          name="comment"
          value={formData.comment}
          onChange={handleChange}
          placeholder="Comment"
        />
      </div>
      <Button className={css.btnSend} type="submit">
        Send
      </Button>
    </form>
  );
};

export default BookingForm;
