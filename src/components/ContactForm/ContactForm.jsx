import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import styles from "./ContactForm.module.css";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name must be at most 50 characters")
    .required("Name is required"),
  number: Yup.string()
    .min(3, "Number must be at least 3 characters")
    .max(50, "Number must be at most 50 characters")
    .required("Number is required"),
});

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    dispatch(addContact(newContact));
    resetForm();
  };

  return (
    <div className={styles.formWrapper}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className={styles.form}>
            <div>
              <label className={styles.label} htmlFor="name">
                Name
              </label>
              <Field
                className={styles.input}
                id="name"
                name="name"
                type="text"
              />
              <ErrorMessage name="name" component="div" />
            </div>
            <div>
              <label className={styles.label} htmlFor="number">
                Number
              </label>
              <Field
                className={styles.input}
                id="number"
                name="number"
                type="text"
              />
              <ErrorMessage name="number" component="div" />
            </div>
            <button type="submit">Add Contact</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
