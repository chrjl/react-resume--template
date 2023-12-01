import React from 'react';

import { ResumeEntry } from '@reactresume/types';
import {
  DefinitionTable,
  DebugComponent,
  StackedCards,
  GridCards,
} from '@reactresume/components';

export * from './basics';

export interface TemplateComponentProps {
  data: ResumeEntry[];
}

export const Skills = ({ data }: TemplateComponentProps) => {
  return <DefinitionTable firstColumnWidth="10em" data={data} />;
};

export const Languages = ({ data }: TemplateComponentProps) => (
  <DefinitionTable firstColumnWidth="10em" data={data} />
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
    <h1>Web development</h1>
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
    <h1>Other work experience</h1>
    <StackedCards data={data} rowGap="0.5em" />
  </>
);
