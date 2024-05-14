'use client';
import React, { useState } from 'react';
import styles from '@/components/filer.module.css';

const categories = [
  { category: 'Ideal For', options: ['Men', 'Women', 'Baby & Kids'] },
  { category: 'Occasion', options: ['Men', 'Women', 'Baby & Kids'] },
  { category: 'Work', options: ['Men', 'Women', 'Baby & Kids'] },
  { category: 'Fabric', options: ['Men', 'Women', 'Baby & Kids'] },
  { category: 'Segment', options: ['Men', 'Women', 'Baby & Kids'] },
  { category: 'Suitable For', options: ['Men', 'Women', 'Baby & Kids'] },
];

const Filtering = ({show}) => {
  const [clickedCategory, setClickedCategory] = useState(null);

  function handleCategoryClick(index) {
    if (clickedCategory === index) {
      setClickedCategory(null);
    } else {
      setClickedCategory(index);
    }
  }
  return (
    <div className={`${styles.dropdown} ${show ? styles.active : ''}`}>
      <div className={styles.dropdownContent}>

        {categories.map((item, index) => (
          <div
            key={index}
            className={`${styles.category} ${index === clickedCategory ? styles.clicked : ''}`}
            onClick={() => handleCategoryClick(index)}
          >
            <h3>{item.category}</h3>
            <label>All</label>
            <div className={styles.options}>
              <label>unselect all</label>
              {item.options.map((element, optIndex) => (
                <label key={optIndex}>
                  <input
                    type="checkbox"
                    className={styles.optionCheckbox}
                    value={element}
                  />{' '}
                  {element}
                </label>
              ))}
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filtering;
