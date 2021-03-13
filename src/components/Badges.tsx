import React, { FC } from 'react';
import type { Files } from '../features/SearchAndResults/SearchAndResultsSlice';
import styles from './Badges.module.scss';

const Badges: FC<{ files: Files }> = ({ files }) => {
  let fileArr = [];

  for (let file in files) {
    let language = files[file].language;

    if (fileArr.indexOf(language) === -1) {
      fileArr.push(language);
    }
  }

  return (
    <ul className="d-flex">
      {fileArr.map((language, index) => {
        return (
          <li className={styles.Badge} key={index}>
            {language}
          </li>
        );
      })}
    </ul>
  );
};

export default Badges;
