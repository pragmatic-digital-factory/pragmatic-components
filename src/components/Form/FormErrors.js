import React from 'react';

export default ({ errors }) => <div className="error-form-wrapper">{errors.map(err => <p key={err}>{err}</p>)}</div>;
