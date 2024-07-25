import React, { useState } from 'react';
import { auth } from '../firebaseConfig'; // Import your Firebase configuration

const CreateAccountForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      await auth.createUserWithEmailAndPassword(email, password);
      // Redirect or show success message
      alert('Account created successfully');
    } catch (error) {
      console.error('Error creating account:', error);
      setError('Failed to create account. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <div className="text-center mb-8">
          <img src="/devlinks-logo.png" alt="Devlinks" className="mx-auto h-12 mb-4" />
          <h1 className="text-2xl font-semibold">Create Account</h1>
          <p className="text-gray-600">Let’s get you started sharing your links!</p>
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
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="password">Create password</label>
            <input 
              type="password" 
              id="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="At least 8 characters" 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600" 
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="confirm-password">Confirm password</label>
            <input 
              type="password" 
              id="confirm-password" 
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="At least 8 characters" 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600" 
              required
            />
          </div>
          {error && <p className="text-red-600 mb-4">{error}</p>}
          <button 
            type="submit" 
            className="w-full py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          >
            Create new account
          </button>
        </form>
        <p className="text-center mt-4">
          Already have an account? <a href="/login" className="text-indigo-600">Login</a>
        </p>
      </div>
    </div>
  );
};

export default CreateAccountForm;
