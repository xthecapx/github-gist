import React from 'react';
import { gistsSelector } from './SearchAndResultsSlice';
import { useSelector } from 'react-redux';
import GistCard from '../../components/GistCard';

const SearchAndResults = () => {
  const gists = useSelector(gistsSelector);

  return (
    <ul className="container header-space">
      {gists && gists.length > 0 && gists.map((gist, index) => {
        return <GistCard key={gist.id} gistData={gist} />;
      })}
    </ul>
  );
};

export default SearchAndResults;
