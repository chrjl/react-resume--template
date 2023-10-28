import React from 'react';

import { Skills, Languages, TemplateComponentProps } from './sections';

const sections: TemplateSection[] = [
  { id: 'skills', Component: Skills },
  { id: 'languages', Component: Languages },
];

export default sections;

interface TemplateSection {
  id: string;
  Component: ({ data }: TemplateComponentProps) => React.ReactElement;
}
