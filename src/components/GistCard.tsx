import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import {
  Gist,
  selectGist,
} from '../features/SearchAndResults/SearchAndResultsSlice';
import Badges from './Badges';
import styles from './GistCard.module.scss';

const GistCard: FC<{ gistData: Gist }> = ({ gistData }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const noOfFiles = Object.keys(gistData.files).length;

  return (
    <li
      className={styles.ListRow}
      onClick={() => {
        dispatch(selectGist(gistData));
        history.push(`/${gistData.id}`);
      }}
    >
      <p className="lead">{gistData.description || 'No Description'}</p>
      <p className="text-secondary">
        {noOfFiles} {noOfFiles > 1 ? 'Files' : 'File'}
      </p>
      <Badges files={gistData.files} />
    </li>
  );
};

export default GistCard;
