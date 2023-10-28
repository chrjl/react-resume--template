import React from 'react';
import { ResumeEntry } from '@reactresume/jsonresume-parser';
import { DefinitionTable } from '@reactresume/components';

export interface TemplateComponentProps {
  data: ResumeEntry[];
}

export const Skills = ({ data }: TemplateComponentProps) => {
  return (
    <>
      <h1>Skills</h1>
      <DefinitionTable data={data} />
    </>
  );
};

export const Languages = ({ data }: TemplateComponentProps) => (
  <>
    <h1>Languages</h1>
    <DefinitionTable data={data} />
  </>
);
