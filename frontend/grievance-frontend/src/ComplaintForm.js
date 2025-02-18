import React, { useState } from 'react';

function ComplaintForm() {
  const [complaint, setComplaint] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle complaint submission logic
  };

  return (
    <div>
      <h1>Complaint Submission</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={complaint}
          onChange={(e) => setComplaint(e.target.value)}
          placeholder="Describe your complaint"
        />
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <button type="submit">Submit Complaint</button>
      </form>
    </div>
  );
}

export default ComplaintForm;
