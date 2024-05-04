import { NavLink } from 'react-router-dom';

const WelcomePage = () => {
  return (
    <>
      {/* Це лише заглушка. Можна буде прибрати/коригувати */}

      <h1>WelcomePage</h1>
      <button>
        <NavLink to="/home">Home</NavLink>
      </button>
      <button>
        <NavLink to="/auth/register">Register</NavLink>
      </button>
      <button>
        <NavLink to="/auth/login">Login</NavLink>
      </button>
    </>
  );
};

export default WelcomePage;
