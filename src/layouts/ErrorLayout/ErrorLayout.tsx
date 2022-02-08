import React from 'react'
import { Link } from "react-router-dom";

const ErrorLayout: React.FC = () => {
  return (
    <div>
      Page Not Found! Go to <Link to="/">Home Page</Link>
    </div>
  )
}

export default ErrorLayout
