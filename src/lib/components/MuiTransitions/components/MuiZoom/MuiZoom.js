import React from 'react';
import PropTypes from 'prop-types';
import { Zoom } from '@material-ui/core';
import useTransitionIn from '../../customHooks/useTransitionIn';
import StoryBlok from '../../../../utils/Storyblok';
import Blok from '../../../StoryBlokPage/components/Blok/Blok';
import { validComponentsRequired } from '../../../../utils/customProps';

const MuiZoom = ({
  rootClass,
  content,
  enter,
  exit,
  zoomIn,
}) => {
  const styles = StoryBlok.arrayToMuiStyles(rootClass);
  const transTime = useTransitionIn(zoomIn);
  return (
    <div className={styles.root}>
      <Zoom
        in={transTime}
        timeout={{
          enter: +enter,
          exit: +exit,
        }}
      >
        <div>
          {content.map((item, index) => (
            <Blok {...item} key={index} />
          ))}
        </div>
      </Zoom>
    </div>
  );
};

export default MuiZoom;

MuiZoom.propTypes = {
  /**
   * stroyblok multiselect of css classes
   * Mui Override or extend the styles applied to the component.
   */
  rootClass: PropTypes.arrayOf(PropTypes.string),
  /**
   * mui props: number
   * Number of milliseconds for component to transition in.
   */
  zoomIn: PropTypes.string,
  /**
   * mui props: number
   * Number of milliseconds for component to effect on screen.
   */
  enter: PropTypes.string,
  /**
   * mui props: number
   * Number of milliseconds for component to effect off screen.
   */
  exit: PropTypes.string,
  /**
   * Content passed to render
   * components: Blok
   */
  content(props, propName, componentName) {
    return validComponentsRequired(props, propName, componentName, ['Blok'], 1);
  },
};

MuiZoom.defaultProps = {
  zoomIn: 500,
  enter: 1000,
  exit: 1000,
  rootClass: [],
  content: [],
};
