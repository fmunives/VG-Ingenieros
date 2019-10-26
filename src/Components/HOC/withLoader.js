import React from 'react';

const withLoader = propValue => WrapperComponent => {
  return class WidthLoader extends React.Component {
    render() {
      return this.props[propValue].length === 0 ? (
        <h1 className='ed-grid t3'>Cargando...</h1>
      ) : (
        <WrapperComponent {...this.props} />
      );
    }
  };
};

export default withLoader;
