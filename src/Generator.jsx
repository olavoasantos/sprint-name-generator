import React from 'react';
import nouns from './nouns';
import adjectives from './adjectives';

const random = (arr) => arr[Math.floor(Math.random()*arr.length)];

export default ({ names = '' }) => {
  const noun = random(nouns);
  const adjective = random(adjectives);
  const name = random(names.replace(', ', ',').split(','));
  return (
    <h1>
      {Boolean(name) ? `${name}'s ` : ''}
      {`${adjective} `}
      {noun}
    </h1>
  )
}
