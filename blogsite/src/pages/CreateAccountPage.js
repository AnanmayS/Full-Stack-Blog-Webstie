import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const CreateAccountPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const createAccount = async () => {
        try {
            if (password !== confirmPassword){
                setError('Passwords do not match');
                return;
            }   
            await createUserWithEmailAndPassword(getAuth(), email, password);
            navigate('/articles');
        } catch (e) {
            setError(e.message);
        }
    }

    return (
        <>
        <h1>Create Account</h1>
        {error && <p className="error">{error}</p>}
        <input 
            placeholder="email@gmail.com"
            value={email}
            onChange={e => setEmail(e.target.value)}/>
        <input 
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)} />
        <input 
            type="password"
            placeholder="Re-enter password"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)} />
        <button onClick={createAccount}>Create Account</button>
        <Link to="/login">Login</Link>
        </>
    );
}

export default CreateAccountPage;