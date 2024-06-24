import React from 'react';

import { ResumeEntry } from '@reactresume/types';
import {
  DefinitionTable,
  DebugComponent,
  Card,
  StackedCards,
  GridCards,
} from '@reactresume/components';

export interface TemplateComponentProps {
  data: ResumeEntry[];
}

export const Basics = ({ data }: TemplateComponentProps) => {
  return <Card entry={data[0]} />;
};

export const Skills = ({ data }: TemplateComponentProps) => {
  return <DefinitionTable data={data} />;
};

export const Languages = ({ data }: TemplateComponentProps) => (
  <DefinitionTable data={data} />
);

export const Education = ({ data }: TemplateComponentProps) => (
  <>
    <h1>Education</h1>
    <GridCards data={data} />
  </>
);

export const Certificates = ({ data }: TemplateComponentProps) => (
  <>
    <h1>Certificates</h1>
    <GridCards data={data} />
  </>
);

export const Projects = ({ data }: TemplateComponentProps) => (
  <>
    <h1>Projects</h1>
    <GridCards data={data} />
  </>
);

export const Work = ({ data }: TemplateComponentProps) => (
  <>
    <h1>Work</h1>
    <StackedCards data={data} />
  </>
);

export const Experience = ({ data }: TemplateComponentProps) => (
  <>
    <h1>Experience</h1>
    <StackedCards data={data} />
  </>
);
