import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';

function Note() {
  const [mdNoteSrc, setMdNoteSrc] = useState(
    'Click to start writing'
  );

  return (
    <div>
      <div>
        <Typography variant="body1" gutterBottom>
          {mdNoteSrc}
        </Typography>
      </div>
    </div>
  );
}

export default Note;
