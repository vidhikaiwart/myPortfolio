// components/BlurBlob.jsx
import React from 'react';
import PropTypes from 'prop-types';

const BlurBlob = ({ position, size }) => {
  const { top, left } = position;
  const { width, height } = size;

  return (
    <div
      className="absolute pointer-events-none"
      style={{
        top: top,
        left: left,
        width: width,
        height: height,
      }}
    >
      {/* Rose blob — top-left region */}
      <div
        className="absolute rounded-full bg-[#f43f5e] opacity-[0.12] blur-[120px] animate-blob"
        style={{ top: '10%', left: '5%', width: '45%', height: '60%' }}
      />
      {/* Teal blob — bottom-right region */}
      <div
        className="absolute rounded-full bg-[#0d9488] opacity-[0.12] blur-[120px] animate-blob"
        style={{ bottom: '10%', right: '5%', width: '40%', height: '55%', animationDelay: '3s' }}
      />
    </div>
  );
};

BlurBlob.propTypes = {
  position: PropTypes.shape({
    top: PropTypes.string,
    left: PropTypes.string,
  }),
  size: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
  }),
};

export default BlurBlob;
