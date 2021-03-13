import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { getUserPublicGists } from '../features/SearchAndResults/SearchAndResultsSlice';

const SearchForm = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState('');

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    if (user.length === 0) {
      return;
    }

    dispatch(getUserPublicGists(user));
  };

  return (
    <form onSubmit={handleSubmit} className="searchform mt-3">
      <input
        className="form-control"
        type="text"
        placeholder="Search for a user, eg. xthecapx."
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
    </form>
  );
};

export default SearchForm;
