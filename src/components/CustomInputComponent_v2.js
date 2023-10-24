import React, { useState } from 'react';
import styles from "../styles/CustomInputComponent_v2.module.css";

const CustomFileInput = () => {
  const [fileName, setFileName] = useState('');

  const handleInputChange = (event) => {
    const file = event.target.files[0];
    setFileName(file.name);
    // Дополнительная логика обработки файла...
  };

  return (
    <div>
      <label className={styles.text} htmlFor="fileInput">Загрузить логотип</label>
      <input type="file" id="fileInput" onChange={handleInputChange} style={{display: "none"}}/>
      {fileName && <p>Выбранный файл: {fileName}</p>}
    </div>
  );
};

export default CustomFileInput;
