import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className="h-full flex flex-col space-y-4">
      <Link to="/">Start</Link>
      <Link to="/tasks/new">Dodaj zadanie</Link>
    </nav>
  );
};
