import React from 'react';
import PropTypes from 'prop-types';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Storyblok from '../../../../../../utils/Storyblok';
import { validComponents } from '../../../../../../utils/customProps';
import MuiIconButtonRedirect from '../../../../../MuiIconButtonRedirect/MuiIconButtonRedirect';
import MuiIconButtonHref from '../../../../../MuiIconButtonHref/MuiIconButtonHref';
import MuiIconButtonDownload from '../../../../../MuiIconButtonDownload/MuiIconButtonDownload';
import MuiIconButtonDialog from '../../../../../MuiIconButtonDialog/MuiIconButtonDialog';
import { renderComponents } from '../../../../../../utils/customComponents';
import MuiAccordion from '../../../../../MuiAccordion/MuiAccordion';
import GoogleConversion from '../../../../../GoogleConversions/GoogleConversions';

/**
 * MuiListItemSecondaryAction is used in storyblok redirect to react routes
 */

export const MuiListItemSecondaryAction = ({
  content,
  rootClass,
}) => {
  const components = {
    MuiIconButtonRedirect,
    MuiIconButtonHref,
    MuiIconButtonDownload,
    MuiIconButtonDialog,
    MuiAccordion,
    GoogleConversion,
  };

  const styles = Storyblok.arrayToMuiStyles(rootClass);

  return (
    <ListItemSecondaryAction className={styles.root}>
      {content.map((component, key) => renderComponents(components, component, key))}
    </ListItemSecondaryAction>
  );
};

export default MuiListItemSecondaryAction;

MuiListItemSecondaryAction.propTypes = {
  /**
   * stroyblok multiselect of css classes
   * Override or extend the styles applied to the component
   * */
  rootClass: PropTypes.arrayOf(PropTypes.string),

  /**
   * components:
   * MuiIconButtonRedirect,
    MuiIconButtonHref,
    MuiIconButtonDownload,
    MuiIconButtonDialog,
    GoogleConversion,
   *  Allowed maximum: 1 */
  content(props, propName, componentName) {
    const components = [
      'MuiIconButtonRedirect',
      'MuiIconButtonHref',
      'MuiIconButtonDownload',
      'MuiIconButtonDialog',
      'GoogleConversion',
      'MuiAccordion',
    ];
    return validComponents(props, propName, componentName, components, 1);
  },
};

MuiListItemSecondaryAction.defaultProps = {
  rootClass: [],
  content: [],
};
