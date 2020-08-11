import React from "react";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import axios from "axios";

import styles from "./ContactForm.module.sass";

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className={[props.classstyles, styles.Form__input].join(" ")}>
      <label htmlFor={props.id || props.name} className={styles.Form__label}>
        {label}
      </label>
      <input {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className={styles.Form__error}>{meta.error}</div>
      ) : null}
    </div>
  );
};

const MyTextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className={props.classstyles}>
      <label htmlFor={props.id || props.name} className={styles.Form__label}>
        {label}
      </label>
      <textarea className={styles.Form__input} {...field} {...props}></textarea>
      {meta.touched && meta.error ? (
        <div className={styles.Form__error}>{meta.error}</div>
      ) : null}
    </div>
  );
};

const ContactForm = () => {
  return (
    <Formik
      initialValues={{ firstName: "", lastName: "", email: "", message: "" }}
      validationSchema={Yup.object({
        firstName: Yup.string().required("Required"),
        lastName: Yup.string().required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        message: Yup.string()
          .max(500, "Must be 500 characters or less")
          .required("Required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        axios
          .post("https://you-need-a-mc.herokuapp.com/", values)
          .then(function (response) {
            alert("Message Sent");
          })
          .catch(function (error) {
            console.log(error);
          });
        setSubmitting(false);
      }}
    >
      <Form className={styles.Form}>
        <div className={styles.Form__inputs}>
          <MyTextInput
            classstyles={styles.Form__firstName}
            label="First Name"
            name="firstName"
            type="text"
            placeholder="John"
          />
          <MyTextInput
            classstyles={styles.Form__lastName}
            label="Last Name"
            name="lastName"
            type="text"
            placeholder="Doe"
          />
          <MyTextInput
            classstyles={styles.Form__emailAddress}
            label="Email Address"
            name="email"
            type="email"
            placeholder="John@youneedamc.com"
          />
        </div>
        <MyTextArea
          classstyles={styles.Form__messageField}
          label="Send A Message"
          name="message"
        />

        <button type="submit" className={styles.Form__button}>
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
