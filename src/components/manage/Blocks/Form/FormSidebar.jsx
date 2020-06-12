import React from 'react';
import { Segment } from 'semantic-ui-react';
import { FormattedMessage } from 'react-intl';
import Toolbar from './toolbar';

const FormSidebar = (properties) => {
  const toolbarProps = {};
  if (properties.toolbarItems) {
    toolbarProps.items = properties.toolbarItems;
  }
  return (
    <Segment.Group raised>
      <header className="header pulled">
        <h2>
          <FormattedMessage id="Form" defaultMessage="Form" />
        </h2>
      </header>
      <Toolbar {...toolbarProps} />
    </Segment.Group>
  );
};

export default FormSidebar;
