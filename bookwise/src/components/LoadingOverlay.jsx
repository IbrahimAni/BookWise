import React from 'react'

const LoadingOverlay = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-50 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-white"></div>
    </div>
  )
}

export default LoadingOverlay