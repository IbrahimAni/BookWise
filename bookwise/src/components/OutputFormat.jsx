import React from 'react';
import Modal from 'react-modal';

const OutputFormat = ({ isOpen, onClose, onSelectFormat }) => {
  const handleClose = () => {
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto"
      overlayClassName="fixed inset-0 bg-gray-500 opacity-75"
      ariaHideApp={false}
    >
      <div className="bg-white rounded-lg z-50" style={{ backgroundColor: 'rgba(255, 255, 255, 99)' }}>
        <div className="flex justify-end pt-4 pr-4">
          <button
            className="focus:outline-none"
            onClick={handleClose}
            aria-label="Close modal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-500 hover:text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Select Data Output Format</h2>
          <div className="flex justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => onSelectFormat('json')}
            >
              JSON
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => onSelectFormat('json')}
            >
              XML
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => onSelectFormat('json')}
            >
              Text
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default OutputFormat;
