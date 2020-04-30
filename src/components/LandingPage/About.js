import React from 'react';
import { Typography, Link } from '@material-ui/core';

export default function About() {
  return (
    <div>
      <Typography>About</Typography>
      <Typography>
        Daily play is a <span>open-source</span> website game.That you can
        submit your games to our github <Link>repository</Link>.
      </Typography>
    </div>
  );
}
