import React from 'react';

import {
  Basics,
  Skills,
  Languages,
  Education,
  Certificates,
  Projects,
  Experience,
  Work,
  TemplateComponentProps,
} from './sections';

const basics = { id: 'basics', Component: Basics };

const sections: TemplateSection[] = [
  { id: 'skills', Component: Skills },
  { id: 'languages', Component: Languages },
  { id: 'work', Component: Work },
  { id: 'projects', Component: Projects },
  { id: 'experience', Component: Experience },
  { id: 'education', Component: Education },
  { id: 'certificates', Component: Certificates },
];

export default [basics, ...sections];

interface TemplateSection {
  id: string;
  Component: ({ data }: TemplateComponentProps) => React.ReactElement;
}
