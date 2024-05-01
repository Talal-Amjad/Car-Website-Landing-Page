import React from 'react';
import PropTypes from 'prop-types';
import pdfIcon from '../Assests/Images/pdf.png';

const UploadedFiles = ({ files }) => {
  return (
    <div>
      {files.map((file, index) => (
        <div key={index} className="flex items-center justify-between border-b border-gray-400 p-4">
          <div className="flex items-center space-x-2">
            <img src={pdfIcon} alt="PDF Icon" className="w-8 h-8" />
            <span className="truncate">{file.filename}</span>
          </div>
          <button className="bg-[#f7f8f9] text-gray-400 text-sm px-4 py-2 border border-gray-400 rounded-md">View</button>
        </div>
      ))}
    </div>
  );
};

UploadedFiles.propTypes = {
  files: PropTypes.arrayOf(
    PropTypes.shape({
      filename: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default UploadedFiles;
