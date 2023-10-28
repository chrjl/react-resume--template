import React from 'react';
import { ResumeEntry } from 'jsonresume-parser';

export interface TemplateComponentProps {
  data: ResumeEntry[];
}

export const Skills = ({ data }: TemplateComponentProps) => {
  return (
    <>
      <h1>Skills</h1>
      {data.map(({ title, keywords }, index) => (
        <dl key={index}>
          <dt>{title}</dt>
          <dl>{keywords}</dl>
        </dl>
      ))}
    </>
  );
};

export const Languages = ({ data }: TemplateComponentProps) => (
  <>
    <h1>Languages</h1>
    {data.map(({ title, keywords }, index) => (
      <dl key={index}>
        <dt>{title}</dt>
        <dl>{keywords}</dl>
      </dl>
    ))}
  </>
);
