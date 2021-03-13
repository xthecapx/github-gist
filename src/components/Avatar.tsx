import React, { FC } from 'react';

const Avatar: FC<{ avatarUrl: string; name: string }> = ({
  avatarUrl,
  name,
}) => {
  return (
    <>
      <img key="image" src={avatarUrl} alt={name} className="avatar" />
      <span key="username" className="text-secondary">
        {name}
      </span>
    </>
  );
};

export default Avatar;
