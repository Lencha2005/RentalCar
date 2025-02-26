import Button from "../ui/Button/Button";
import css from "./BookingForm.module.css";

const BookingForm = () => {
  const handleSubmit = (e) => {
e.preventDefault()
  }
  return (
    <form className={css.form}>
      <h2 className={css.title}>Book your car now</h2>
      <p className={css.text}>
        Stay connected! We are always ready to help you.
      </p>
      <div className={css.wrapperInput}>
        <input
          className={css.input}
          type="text"
          name="name"
          placeholder="Name"
          required
        />
        <input
          className={css.input}
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        <input
          className={css.input}
          type="text"
          name="date"
          placeholder="Booking date"
        />
        <input
          className={`${css.input} ${css.textaria}`}
          type="textarea"
          name="comment"
          placeholder="Comment"
        />
      </div>
      <Button className={css.btnSend} type="submit" onSubmit={handleSubmit}>
        Send
      </Button>
    </form>
  );
};

export default BookingForm;
