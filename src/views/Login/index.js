import { Link } from 'react-router-dom';

const Login = () => {
  return (<form>
      <input type="text" placeholder="Usuário/Email" />
      <input type="text" placeholder="Password" />
      <Link to="/dashboard" ><button>Sign In</button></Link>
  </form>);
}

export default Login;
