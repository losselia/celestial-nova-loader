# celestial-nova-loader

CelestialNovaLoader is a customizable loading spinner component for React applications.

## Installation

You can install the celestial-nova-loader package via npm or yarn:

```bash
npm install celestial-nova-loader
```

or

```bash
yarn add celestial-nova-loader
```

## Usage

```jsx
import React from 'react';
import CelestialNovaLoader from 'celestial-nova-loader';

const MyComponent = () => {
  return (
    <div>
      <h1>Welcome to my app!</h1>
      <CelestialNovaLoader />
    </div>
  );
};

export default MyComponent;
```

## Props

- `type` (string, optional): Type of loader animation. Supported values are: "Audio", "BallTriangle", "Bars", "Circles", "Grid", "Hearts", "Oval", "Puff", "Rings", "TailSpin", "ThreeDots". Default value is "TailSpin".
- `color` (string, optional): Color of the loader animation. Default value is "#00BFFF".
- `height` (number, optional): Height of the loader animation. Default value is 80.
- `width` (number, optional): Width of the loader animation. Default value is 80.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
