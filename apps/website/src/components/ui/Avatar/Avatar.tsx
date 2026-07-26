/******************************************************************************
File: Avatar.tsx
------------------------------------------------------------------------------
Purpose:
Reusable Avatar component.
******************************************************************************/

import type { FC } from "react";

import styles from "./Avatar.module.css";

import type { AvatarProps } from "./Avatar.types";

const Avatar: FC<AvatarProps> = ({
  src,
  alt,
  initials,
  size = 48,
  className = "",
}) => {
  return (
    <div
      className={`${styles.avatar} ${className}`.trim()}
      style={{
        width: size,
        height: size,
      }}
    >
      {src ? (
        <img src={src} alt={alt} className={styles.image} />
      ) : (
        <span className={styles.initials}>{initials}</span>
      )}
    </div>
  );
};

export default Avatar;
