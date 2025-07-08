import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // contexto personalizado

export default function ProtectedRoute({ children, adminOnly = false }) {
  const { user, role } = useAuth();

  if (!user) return <Navigate to="/login" />;

  if (adminOnly && role !== "admin") return <Navigate to="/unauthorized" />;

  return children;
}