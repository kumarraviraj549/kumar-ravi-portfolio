import React from 'react';
import PropTypes from 'prop-types';

const SectionHeader = ({ title, subtitle, className = '' }) => {
  return (
    <div className={`section-header ${className}`}>
      <h2 className="section-title">{title}</h2>
      {subtitle && (
        <p className="section-subtitle">{subtitle}</p>
      )}
    </div>
  );
};

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  className: PropTypes.string
};

export default SectionHeader;
