import React from 'react';
import { ResumeEntry } from 'jsonresume-parser';

export function Skills({ data }) {
  return (
    <>
      <h1>Skills</h1>
      {data &&
        data.map(({ title, keywords }) => (
          <>
            <dl>
              <dt>{title}</dt>
              <dl>{keywords.join(', ')}</dl>
            </dl>
          </>
        ))}
    </>
  );
}

export function Languages({ data }) {
  console.log(data);
  return (
    data && (
      <dl>
        <dt>Languages</dt>
        <dd>{data.keywords.join(', ')}</dd>
      </dl>
    )
  );
}
