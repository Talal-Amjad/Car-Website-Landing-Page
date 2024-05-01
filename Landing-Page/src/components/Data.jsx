import React from 'react';
import PropTypes from 'prop-types';

export default function Data({ feature1, description1, feature2, description2 }) {
  return (
    <div className="col-span-5 md:col-span-5 bg-white flex justify-center items-center border-b border-gray-400">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full py-4">
        <div className="flex flex-col items-center">
          <span className="text-2xl lg:text-2xl font-medium text-gray-500">{feature1}</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-base md:text-lg lg:text-xl font-medium text-gray-500 mt-1">{description1}</span>
        </div>
        {feature2 && (
          <div className="flex flex-col items-center">
            <span className="text-2xl lg:text-2xl font-medium text-gray-500">{feature2}</span>
          </div>
        )}
        {description2 && (
          <div className="flex flex-col items-center">
            <span className="text-base md:text-lg lg:text-xl font-medium text-gray-500 mt-1">{description2}</span>
          </div>
        )}
      </div>
    </div>
  );
}

Data.propTypes = {
  feature1: PropTypes.string.isRequired,
  description1: PropTypes.string.isRequired,
  feature2: PropTypes.string,
  description2: function(props, propName, componentName) {
    if (props.feature2 && !props[propName]) {
      return new Error(`The prop \`${propName}\` is marked as required if \`feature2\` is provided in \`${componentName}\`.`);
    }
  },
};
