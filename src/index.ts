import React from 'react';

import {
  Skills,
  Languages,
  Education,
  Certificates,
  Projects,
  Experience,
  Work,
  TemplateComponentProps,
} from './sections';

const sections: TemplateSection[] = [
  { id: 'skills', Component: Skills },
  { id: 'languages', Component: Languages },
  { id: 'education', Component: Education },
  { id: 'certificates', Component: Certificates },
  { id: 'projects', Component: Projects },
  { id: 'experience', Component: Experience },
  { id: 'work', Component: Work },
];

export default sections;

interface TemplateSection {
  id: string;
  Component: ({ data }: TemplateComponentProps) => React.ReactElement;
}
