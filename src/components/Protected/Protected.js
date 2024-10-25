import { Navigate } from "react-router-dom";

export const Protected = ({ IsAuth, children }) => {
  if (!IsAuth) {
    return <Navigate to="/" />;
  }
  return children;
};
