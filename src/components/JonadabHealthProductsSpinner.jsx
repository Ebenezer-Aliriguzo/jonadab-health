// JonadabHealthProductsSpinner.jsx
import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import './JonadabHealthProductsSpinner.css';

export default function JonadabSpinner() {
  return (
    <div className="spinner-wrap">
      <CircularProgress />
      <p>Loading products…</p>
    </div>
  );
}
