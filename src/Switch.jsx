import React, { useState } from 'react';
import styles from './Switch.css';

const Switch = ({ isDark, onToggle, size }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    if (onToggle) {
      onToggle(newChecked);
    }
  };

  const switchStyle = {
    '--switch-font-size': size,
  };

  return (
    <div className={`col ${isDark ? 'col--dark' : ''}`} style={switchStyle}>
      <label>
        <span className="switch">
          <input
            className="switch__input"
            type="checkbox"
            role="switch"
            checked={checked}
            onChange={handleChange}
          />
          <span className="switch__surface">
            <span className="switch__surface-glare"></span>
          </span>
          <span className="switch__inner-shadow"></span>
          <span className="switch__inner">
            <span className="switch__inner-glare"></span>
          </span>
          <span className="switch__rocker-shadow"></span>
          <span className="switch__rocker-sides">
            <span className="switch__rocker-sides-glare"></span>
          </span>
          <span className="switch__rocker">
            <span className="switch__rocker-glare"></span>
          </span>
          <span className="switch__light">
            <span className="switch__light-inner"></span>
          </span>
        </span>
        <span className="sr">Dark Switch</span>
      </label>
    </div>
  );
};

export default Switch;
