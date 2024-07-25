import React, { useState } from 'react';
import { auth } from '../firebaseConfig'; // Import your Firebase configuration

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      // Redirect or show success message
      alert('Logged in successfully');
    } catch (error) {
      console.error('Error logging in:', error);
      setError('Failed to login. Please check your email and password.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <div className="text-center mb-8">
          <img src="/devlinks-logo.png" alt="Devlinks" className="mx-auto h-12 mb-4" />
          <h1 className="text-2xl font-semibold">Login</h1>
          <p className="text-gray-600">Add your details below to get back into the app</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="email">Email address</label>
            <input 
              type="email" 
              id="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g. alex@email.com" 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600" 
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700" htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password" 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600" 
              required
            />
          </div>
          {error && <p className="text-red-600 mb-4">{error}</p>}
          <button 
            type="submit" 
            className="w-full py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          >
            Login
          </button>
        </form>
        <p className="text-center mt-4">
          Don’t have an account? <a href="/create-account" className="text-indigo-600">Create account</a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
