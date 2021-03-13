import React, { FC } from 'react';
import Avatar from './Avatar';
import type { Fork } from '../features/GistDetails/GistDetailsSlice';

const Forks: FC<{ forks: Fork[] }> = ({ forks }) => {
  return (
    <ul className="indent-left">
      {forks &&
        forks.map((fork, index) => {
          return (
            <li key={index}>
              <a href={`https://gist.github.com/${fork.id}`} target="_blank">
                <Avatar
                  avatarUrl={fork.user.avatar_url}
                  name={fork.user.login}
                />
              </a>
            </li>
          );
        })}
    </ul>
  );
};

export default Forks;
