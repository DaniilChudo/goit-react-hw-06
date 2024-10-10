import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
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

const handleSubmit = (values, { resetForm }, onAddContact) => {
  const newContact = {
    id: nanoid(),
    name: values.name,
    number: values.number,
  };
  onAddContact(newContact);
  resetForm();
};

const ContactForm = ({ onAddContact }) => {
  return (
    <div className={styles.formWrapper}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, actions) =>
          handleSubmit(values, actions, onAddContact)
        }
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
