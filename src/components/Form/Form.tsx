import React from "react";
import styles from "./Form.module.css";
import { FaVk, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface FormValues {
  [x: string]: any;
  name: string;
  phone: string;
}

interface FormProps {
  className?: string;
  title: string;
  description?: string;
  buttonText: string;
  onSubmit: (data: FormValues) => void;
  socialImages?: string[];
  socialText?: string;
}

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Имя обязательно")
    .min(3, "Имя должно содержать минимум 3 символа"),
  phone: yup
    .string()
    .required("Телефон обязателен")
    .matches(
      /^\+7\d{10}$/,
      "Неверный формат телефона. Вводите номер в формате +7XXXXXXXXXX",
    ),
});

const Form: React.FC<FormProps> = ({
  title,
  description,
  buttonText,
  onSubmit,
  className,
  socialImages,
  socialText,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmitHandler = (data: FormValues) => {
    onSubmit(data);
  };

  return (
    <div className={`${styles.formContainer} ${className || ""}`}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      <form onSubmit={handleSubmit(onSubmitHandler)} className={styles.form}>
        <div>
          <input
            {...register("name")}
            type="text"
            placeholder="Ваше имя"
            className={styles.input}
          />
          {errors.name && (
            <span className={styles.error}>{errors.name.message}</span>
          )}
        </div>

        <div>
          <input
            {...register("phone")}
            type="tel"
            placeholder="+79991112233"
            className={styles.input}
          />
          {errors.phone && (
            <span className={styles.error}>{errors.phone.message}</span>
          )}
        </div>

        <button type="submit" className={styles.button}>
          {buttonText}
        </button>
      </form>

      {socialText && <p className={styles.socialText}>{socialText}</p>}
      {socialImages && (
        <div className={styles.socialImages}>
          {socialImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Social ${index}`}
              className={styles.socialImage}
            />
          ))}
        </div>
      )}
      {socialImages && (
        <div className={styles.socialLinks}>
          <a href="https://vk.com/" target="_blank" rel="noopener noreferrer">
            <FaVk />
          </a>
          <a
            href="https://telegram.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTelegram />
          </a>
          <a
            href="https://web.whatsapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
        </div>
      )}
    </div>
  );
};
export default Form;
