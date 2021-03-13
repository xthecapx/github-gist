import React, { FC, useEffect } from 'react';
import { selectedGistSelector } from '../SearchAndResults/SearchAndResultsSlice';
import { useHistory } from 'react-router-dom';
import Forks from '../../components/Forks';
import { gistSelector, gistErrorSelector } from './GistDetailsSlice';
import { getGistDetails } from './GistDetailsSlice';
import { useSelector, useDispatch } from 'react-redux';
import styles from './GistDetails.module.css';

const SearchAndResults: FC = () => {
  const gist = useSelector(selectedGistSelector);
  const dispatch = useDispatch();
  const { forks } = useSelector(gistSelector);
  const error = useSelector(gistErrorSelector);
  const history = useHistory();
  const { description, files, id } = gist;

  useEffect(() => {
    if (id) {
      dispatch(getGistDetails(id));
    } else {
      history.push('/');
    }
  }, []);

  return (
    <div className="container header-space">
      <div className={styles.DetailsBox}>
        <p className="lead">{description || 'No Description'}</p>
        <div className={styles.FilesBox}>
          <p className="text-primary">Files:</p>
          <ul className="indent-left">
            {files &&
              Object.values(files).map((file, index) => {
                return (
                  <li key={index} className="text-secondary">
                    <a
                      href={file.raw_url}
                      target="_blank"
                      className="text-secondary"
                    >
                      {file.filename}
                    </a>
                  </li>
                );
              })}
          </ul>
        </div>
        <div className={styles.ForksBox}>
          <p className="text-primary">Forks:</p>
          {error && (
            <span className="text-danger indent-left">
              {'An Error has ocurred'}
            </span>
          )}
          {forks && !error && <Forks forks={forks.slice(0, 3)} />}
        </div>
      </div>
    </div>
  );
};

export default SearchAndResults;
