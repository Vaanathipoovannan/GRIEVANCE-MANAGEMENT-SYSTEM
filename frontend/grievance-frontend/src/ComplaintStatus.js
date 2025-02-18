import React, { useState, useEffect } from 'react';

function ComplaintStatus() {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    // Fetch complaint status from the backend
  }, []);

  return (
    <div>
      <h1>Complaint Status</h1>
      <p>{status ? `Your complaint is: ${status}` : 'Loading...'}</p>
    </div>
  );
}

export default ComplaintStatus;
