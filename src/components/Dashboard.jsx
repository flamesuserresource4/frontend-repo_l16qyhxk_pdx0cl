import React, { useState } from 'react';

export default function Dashboard() {
  const [signedIn, setSignedIn] = useState(false);

  if (!signedIn) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="w-full max-w-sm border border-black/10 rounded-lg p-6 bg-white shadow-sm">
          <h1 className="text-2xl font-semibold tracking-tight mb-6">Sign In</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSignedIn(true);
            }}
            className="space-y-4"
          >
            <div className="space-y-2">
              <label className="text-sm" htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                required
                className="w-full border border-black rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-0"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm" htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                required
                className="w-full border border-black rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-0"
              />
            </div>
            <button type="submit" className="w-full px-4 py-2 border border-black rounded-md hover:opacity-70 transition-opacity">
              Sign In
            </button>
            <div>
              <a href="#forgot" className="text-sm hover:opacity-70">Forgot Password</a>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white px-4">
      <div className="mx-auto max-w-6xl py-10">
        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">CRM Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-black/10 rounded-lg p-6 bg-white shadow-sm">
            <p className="text-sm text-black/60">Active Patients</p>
            <p className="text-3xl font-medium mt-2">3,482</p>
          </div>
          <div className="border border-black/10 rounded-lg p-6 bg-white shadow-sm">
            <p className="text-sm text-black/60">This Month Production</p>
            <p className="text-3xl font-medium mt-2">$214k</p>
          </div>
          <div className="border border-black/10 rounded-lg p-6 bg-white shadow-sm">
            <p className="text-sm text-black/60">No-Show Rate</p>
            <p className="text-3xl font-medium mt-2">3.8%</p>
          </div>
        </div>
      </div>
    </div>
  );
}
