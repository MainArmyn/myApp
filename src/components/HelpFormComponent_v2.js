
import styles from "../styles/HelpFormComponent_v2.module.css";
import React, { useState } from 'react';
import InputMask from 'react-input-mask';

const RequestForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [comment, setComment] = useState('');
  const [agree, setAgree] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Действия при отправке формы, например, отправка данных на сервер
    // ...
  };


  return (
      <div className={styles.formContainer}>
          <span className={styles.formTitle}>
              Не нашли ответа на свой вопрос? Оставьте своё обращение, заполнив форму, и мы обязательно с вами свяжемся и постараемся решить любой ваш вопрос.
          </span>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.info}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Ваше имя" required />
              <InputMask
                  mask="+7 (999) 999-99-99"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Ваш телефон"
                  required
              />
            </div>
              <textarea value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Ваш вопрос" />
              <button type="submit" className={styles.send}>Оставить заявку</button>
              <div className={styles.check}>
                  <input type="checkbox" checked={agree} onChange={() => setAgree(!agree)} required />
                  <span>Оставляя заявку, вы даете согласие на <a href="#" className={styles.href}>обработку своих персональных данных</a></span>
              </div>
          </form>
      </div>
      
  );
};

export default RequestForm;
