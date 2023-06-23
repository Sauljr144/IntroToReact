import React, { useState } from "react";
import styles from './Button.module.css'



interface BtnProps {
  Color?: string;
  children: string;
  onClick: () => void;
  
}

const Button = ({Color = 'primary', children, onClick}: BtnProps) => {

  return (

          <button
            type="button"
            // Use array with the styles module to concat the name of the css and the Props
            className={[styles.btn, styles['btn-' + Color]].join(' ')}
            onClick={(onClick)}
          >
            {children}
          </button>

  );
};

export default Button;
