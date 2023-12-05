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

export const Basics = ({ data }: { data: ResumeEntry }) => {
  return <Card entry={data} />;
};

export const Skills = ({ data }: TemplateComponentProps) => {
  return <DefinitionTable firstColumnWidth="10.5em" data={data} />;
};

export const Languages = ({ data }: TemplateComponentProps) => (
  <DefinitionTable firstColumnWidth="10.5em" data={data} />
);

export const Education = ({ data }: TemplateComponentProps) => (
  <>
    <h1>Education</h1>
    <GridCards data={data} rowGap="1em" />
  </>
);

export const Certificates = ({ data }: TemplateComponentProps) => (
  <>
    <h1>Certificates</h1>
    <GridCards data={data} rowGap="1em" />
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
    <StackedCards data={data} rowGap="0.5em" />
  </>
);
