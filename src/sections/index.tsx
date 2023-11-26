import React from 'react';

import { ResumeEntry } from '@reactresume/types';
import { DefinitionTable, DebugComponent } from '@reactresume/components';

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

export const Education = ({ data }: TemplateComponentProps) => (
  <>
    <h1>Education</h1>
    <DebugComponent data={data} />
  </>
);

export const Certificates = ({ data }: TemplateComponentProps) => (
  <>
    <h1>Certificates</h1>
    <DebugComponent data={data} />
  </>
);

export const Projects = ({ data }: TemplateComponentProps) => (
  <>
    <h1>Projects</h1>
    <DebugComponent data={data} />
  </>
);

export const Work = ({ data }: TemplateComponentProps) => (
  <>
    <h1>Work</h1>
    <DebugComponent data={data} />
  </>
);

export const Experience = ({ data }: TemplateComponentProps) => (
  <>
    <h1>Experience</h1>
    <DebugComponent data={data} />
  </>
);
