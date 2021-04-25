import PropTypes from 'prop-types';
import React from 'react';

const Logo = ({ width }) => (
  <svg width={width} viewBox="0 0 90 96" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d-506758)">
      <path d="M72.1572 29.4C63.4994 14.502 44.3033 9.393 29.3382 17.973C23.8144 21.171 19.6226 25.773 16.9587 31.116C16.4494 22.536 17.8206 13.956 20.9546 6H12.6494C6.61631 23.511 7.86994 43.362 17.8597 60.6C19.9148 64.1492 22.6551 67.2585 25.9228 69.7485C29.1905 72.2385 32.921 74.06 36.8991 75.108C44.6559 77.175 53.1962 76.317 60.6787 72.027C66.2025 68.829 70.3943 64.227 73.0583 58.884C73.5675 67.464 72.2356 76.044 69.1015 84H77.3676C83.3615 66.489 82.147 46.638 72.1572 29.4ZM56.7612 65.28C51.3563 68.3739 44.9396 69.2081 38.9178 67.5998C32.896 65.9914 27.7605 62.0717 24.6371 56.7C24.2062 55.92 23.8144 55.14 23.4619 54.36C18.7608 43.596 22.7959 30.726 33.2558 24.72C44.46 18.285 58.8767 22.107 65.3798 33.3C65.8108 34.08 66.2025 34.86 66.5551 35.64C71.2562 46.404 67.2211 59.274 56.7612 65.28ZM45.0085 37.2C49.3178 37.2 52.8436 40.71 52.8436 45C52.8436 49.29 49.3178 52.8 45.0085 52.8C40.6991 52.8 37.1733 49.29 37.1733 45C37.1733 40.71 40.6991 37.2 45.0085 37.2ZM45.0085 29.4C36.3506 29.4 29.3382 36.381 29.3382 45C29.3382 53.619 36.3506 60.6 45.0085 60.6C53.6663 60.6 60.6787 53.619 60.6787 45C60.6787 36.381 53.6663 29.4 45.0085 29.4Z" fill="#202020" />
    </g>
    <defs>
      <filter id="filter0_d-506758" x="0" y="0" width="90" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
        <feOffset dy="3" />
        <feGaussianBlur stdDeviation="4.5" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.13 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
      </filter>
    </defs>
  </svg>
);

Logo.propTypes = {
  width: PropTypes.number.isRequired,
};

export default Logo;
