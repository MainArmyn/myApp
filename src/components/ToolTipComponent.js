import React, { useState,useRef, useEffect } from 'react';
import styles from "../styles/ToolTipComponent.module.css";

const Tooltips = ({ data }) => {
  const tooltipsRef = useRef([]);
  const [visibleTooltips, setVisibleTooltips] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const visibleTooltips = data.filter((tooltip) => {
        const tooltipElement = tooltipsRef.current[tooltip.id];
        if (!tooltipElement) return false;

        const rect = tooltipElement.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= window.innerHeight;
      });

      setVisibleTooltips(visibleTooltips);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [data]);
  const countElementsInArr = (arr,id) => {
    let count = 0;
    arr.forEach(element => {
        if (element.id === id) {
          count+=1;
        }
    });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Подсказки</h1>
      <div className={styles.list}>

      </div>
      {data.map((tooltip) => (
        <div
          key={tooltip.id}
          ref={(element) => (tooltipsRef.current[tooltip.id] = element)}
          className={visibleTooltips.find((t) => t.id === tooltip.id) ? styles.toolTipVisible : styles.toolTip}
        >
          <span>{tooltip.title}</span>
          {tooltip.text} 
        </div>
      ))}
    </div>
  );
};



export default Tooltips;
