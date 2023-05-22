import { useContext } from 'react';
import AuthDiv from './styled/SubmitDiv';
import { Link, useNavigate } from 'react-router-dom';
import Form from './styled/Form';
import { StoreContext } from '../store';

function Login() {
	const { user, setUser } = useContext(StoreContext);
	const navigate = useNavigate();

	function handleSubmit(e) {
		e.preventDefault();
		setUser(e.target[0].value);
		navigate('/dashboard');
	}

	return (
		<>
			<h2>Login</h2>
			<AuthDiv>
				<Form onSubmit={handleSubmit}>
					<input type='text' placeholder='username' required />
					<input type='text' placeholder='password' required />
					<button type='submit'>Login</button>
				</Form>
			</AuthDiv>

			<Link to='/signup'>Sign-up</Link>
			<Link to='/dashboard'>
				<p> To Dashboard </p>
			</Link>
		</>
	);
}

export default Login;
