import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';

/**
 * CelestialNovaLoader component displays a customizable loading spinner.
 *
 * @component
 * @example
 * ```jsx
 * import React from 'react';
 * import CelestialNovaLoader from 'celestial-nova-loader';
 *
 * const MyComponent = () => {
 *   return (
 *     <div>
 *       <h1>Welcome to my app!</h1>
 *       <CelestialNovaLoader />
 *     </div>
 *   );
 * };
 *
 * export default MyComponent;
 * ```
 */
const CelestialNovaLoader = ({ type, color, height, width }) => {
  return (
    <div className="celestial-nova-loader-container">
      <Loader type={type} color={color} height={height} width={width} />
    </div>
  );
};

CelestialNovaLoader.propTypes = {
  /**
   * Type of loader animation. Supported values are: "Audio", "BallTriangle", "Bars", "Circles", "Grid", "Hearts", "Oval", "Puff", "Rings", "TailSpin", "ThreeDots".
   */
  type: PropTypes.oneOf([
    'Audio',
    'BallTriangle',
    'Bars',
    'Circles',
    'Grid',
    'Hearts',
    'Oval',
    'Puff',
    'Rings',
    'TailSpin',
    'ThreeDots',
  ]),
  /** Color of the loader animation. */
  color: PropTypes.string,
  /** Height of the loader animation. */
  height: PropTypes.number,
  /** Width of the loader animation. */
  width: PropTypes.number,
};

CelestialNovaLoader.defaultProps = {
  type: 'TailSpin',
  color: '#00BFFF',
  height: 80,
  width: 80,
};

export default CelestialNovaLoader;
