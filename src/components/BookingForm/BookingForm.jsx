import { useState } from "react";
import Button from "../ui/Button/Button";
import toast from "react-hot-toast";
import css from "./BookingForm.module.css";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    comment: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    console.log("formdata: ", formData);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Reservation sent successfully!");
    setFormData({ name: "", email: "", date: "", comment: "" });
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
        <input
          className={css.input}
          type="text"
          name="date"
          value={formData.date}
          onChange={handleChange}
          placeholder="Booking date"
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
