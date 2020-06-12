import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SidebarPortal } from '@plone/volto/components';
import FormSidebar from './FormSidebar';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { injectIntl } from 'react-intl';

/**
 * Edit video block class.
 * @class Edit
 * @extends Component
 */

class Edit extends Component {
  /**
   * Property types.
   * @property {Object} propTypes Property types.
   * @static
   */
  static propTypes = {
    selected: PropTypes.bool.isRequired,
    block: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    data: PropTypes.objectOf(PropTypes.any).isRequired,
    onChangeBlock: PropTypes.func.isRequired,
    onSelectBlock: PropTypes.func.isRequired,
    onDeleteBlock: PropTypes.func.isRequired,
    onFocusPreviousBlock: PropTypes.func.isRequired,
    onFocusNextBlock: PropTypes.func.isRequired,
    handleKeyDown: PropTypes.func.isRequired,
  };

  /**
   * Constructor
   * @method constructor
   * @param {Object} props Component properties
   * @constructs WysiwygEditor
   */

  /**
   * Render method.
   * @method render
   * @returns {string} Markup for the component.
   */
  render() {
    const { data } = this.props;
    return (
      <>
        <div className="react-form-builder clearfix">
          <div>Preview here later on</div>
        </div>
        <SidebarPortal selected={this.props.selected}>
          <FormSidebar
            data={data}
            block={this.props.block}
            onChangeBlock={this.props.onChangeBlock}
          />
        </SidebarPortal>
      </>
    );
  }
}

export default injectIntl(Edit);
