import { useState } from 'react';
import { LogOut, Eye, EyeOff, BarChart3, Users, FileText, Settings } from 'lucide-react';

import { Service } from '../App';

interface AdminPanelProps {
  setAdminLoggedIn: (value: boolean) => void;
  services?: Service[];
}

export default function AdminPanel({ setAdminLoggedIn, services = [] }: AdminPanelProps) {
  const [loginStep, setLoginStep] = useState<'login' | 'dashboard'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [activeTab, setActiveTab] = useState('projects');

  // Correct credentials
  const ADMIN_EMAIL = 'samd95210@gmail.com';
  const ADMIN_PASSWORD = 'Shyam 100';

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      setLoginStep('dashboard');
      setAdminLoggedIn(true);
    } else {
      setErrorMessage('❌ Invalid email or password');
      setPassword('');
    }
  };

  const handleLogout = () => {
    setLoginStep('login');
    setEmail('');
    setPassword('');
    setErrorMessage('');
    setAdminLoggedIn(false);
  };

  // Mock data
  const projects = [
    {
      id: 1,
      name: 'The Spice Kitchen',
      client: 'Rajesh Kumar',
      status: 'Completed',
      amount: '₹15,000',
      date: '2024-01-15',
    },
    {
      id: 2,
      name: 'Learn English Fluently',
      client: 'Priya Sharma',
      status: 'In Progress',
      amount: '₹12,000',
      date: '2024-02-20',
    },
    {
      id: 3,
      name: 'TechGadgets Store',
      client: 'Amit Patel',
      status: 'In Progress',
      amount: '₹35,000',
      date: '2024-02-10',
    },
  ];

  const messages = [
    { id: 1, from: 'Rajesh Kumar', subject: 'Website looks amazing!', time: '2 hours ago', read: true },
    { id: 2, from: 'Priya Sharma', subject: 'Need some modifications', time: '5 hours ago', read: false },
    { id: 3, from: 'New Client', subject: 'Project Inquiry', time: '1 day ago', read: false },
  ];

  const stats = [
    { label: 'Total Projects', value: '50', icon: '📊' },
    { label: 'Active Projects', value: '3', icon: '🚀' },
    { label: 'Total Revenue', value: '₹4,85,000', icon: '💰' },
    { label: 'Client Satisfaction', value: '99%', icon: '⭐' },
  ];

  if (loginStep === 'login') {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-slate-950 to-slate-900">
        <div className="max-w-md w-full">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-400 to-cyan-300 rounded-lg flex items-center justify-center font-bold text-slate-950 text-2xl">
              W
            </div>
            <h1 className="text-3xl font-bold text-white">WebCraft</h1>
            <p className="text-slate-400 mt-2">Admin Dashboard</p>
          </div>

          {/* Login card */}
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Admin Login</h2>

            <form onSubmit={handleLogin} className="space-y-4">
              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-slate-900/50 border border-slate-700/50 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 transition-colors"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg bg-slate-900/50 border border-slate-700/50 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 transition-colors"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-300"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {/* Error message */}
              {errorMessage && (
                <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                  {errorMessage}
                </div>
              )}

              {/* Submit button */}
              <button
                type="submit"
                className="w-full py-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-slate-950 rounded-lg font-bold hover:from-blue-600 hover:to-cyan-500 transition-all mt-6"
              >
                Login
              </button>
            </form>

            {/* Demo credentials hint */}
            <div className="mt-6 pt-6 border-t border-slate-700/50">
              <p className="text-xs text-slate-400 mb-2">Demo Credentials:</p>
              <p className="text-xs text-slate-300 mb-1">📧 <code className="bg-slate-900/50 px-2 py-1 rounded">samd95210@gmail.com</code></p>
              <p className="text-xs text-slate-300">🔐 <code className="bg-slate-900/50 px-2 py-1 rounded">Shyam 100</code></p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Header */}
      <div className="bg-slate-900 border-b border-slate-800 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-cyan-300 rounded-lg flex items-center justify-center font-bold text-slate-950">
              W
            </div>
            <div>
              <h1 className="text-lg font-bold text-white">WebCraft Admin</h1>
              <p className="text-xs text-slate-400">Welcome back, Shyam!</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-red-400 border border-red-500/50 rounded-lg hover:bg-red-500/10 transition-colors"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="rounded-xl bg-slate-800/50 border border-slate-700/50 p-6"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <p className="text-slate-400 text-sm mb-1">{stat.label}</p>
              <p className="text-2xl font-bold text-white">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-6 border-b border-slate-800">
          <button
            onClick={() => setActiveTab('projects')}
            className={`px-4 py-3 font-medium transition-colors border-b-2 ${
              activeTab === 'projects'
                ? 'text-blue-400 border-blue-500'
                : 'text-slate-400 border-transparent hover:text-slate-200'
            }`}
          >
            <span className="flex items-center gap-2">
              <FileText size={18} />
              Projects
            </span>
          </button>
          <button
            onClick={() => setActiveTab('messages')}
            className={`px-4 py-3 font-medium transition-colors border-b-2 ${
              activeTab === 'messages'
                ? 'text-blue-400 border-blue-500'
                : 'text-slate-400 border-transparent hover:text-slate-200'
            }`}
          >
            <span className="flex items-center gap-2">
              <Users size={18} />
              Messages
            </span>
          </button>
          <button
            onClick={() => setActiveTab('analytics')}
            className={`px-4 py-3 font-medium transition-colors border-b-2 ${
              activeTab === 'analytics'
                ? 'text-blue-400 border-blue-500'
                : 'text-slate-400 border-transparent hover:text-slate-200'
            }`}
          >
            <span className="flex items-center gap-2">
              <BarChart3 size={18} />
              Analytics
            </span>
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            className={`px-4 py-3 font-medium transition-colors border-b-2 ${
              activeTab === 'settings'
                ? 'text-blue-400 border-blue-500'
                : 'text-slate-400 border-transparent hover:text-slate-200'
            }`}
          >
            <span className="flex items-center gap-2">
              <Settings size={18} />
              Settings
            </span>
          </button>
        </div>

        {/* Tab content */}
        {activeTab === 'projects' && (
          <div className="rounded-xl bg-slate-800/50 border border-slate-700/50 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-900/50 border-b border-slate-700/50">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-bold text-white">Project Name</th>
                    <th className="px-6 py-3 text-left text-sm font-bold text-white">Client</th>
                    <th className="px-6 py-3 text-left text-sm font-bold text-white">Status</th>
                    <th className="px-6 py-3 text-left text-sm font-bold text-white">Amount</th>
                    <th className="px-6 py-3 text-left text-sm font-bold text-white">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700/50">
                  {projects.map((project) => (
                    <tr key={project.id} className="hover:bg-slate-800/50 transition-colors">
                      <td className="px-6 py-4 text-sm text-white font-medium">{project.name}</td>
                      <td className="px-6 py-4 text-sm text-slate-300">{project.client}</td>
                      <td className="px-6 py-4 text-sm">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-bold ${
                            project.status === 'Completed'
                              ? 'bg-green-500/20 text-green-300'
                              : 'bg-blue-500/20 text-blue-300'
                          }`}
                        >
                          {project.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-300 font-bold">{project.amount}</td>
                      <td className="px-6 py-4 text-sm text-slate-400">{project.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'messages' && (
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className="rounded-xl bg-slate-800/50 border border-slate-700/50 p-4 hover:border-blue-500/50 transition-all cursor-pointer"
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-bold text-white">{message.from}</h3>
                    <p className="text-slate-400 text-sm mt-1">{message.subject}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-slate-500">{message.time}</p>
                    {!message.read && (
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="rounded-xl bg-slate-800/50 border border-slate-700/50 p-6">
              <h3 className="text-lg font-bold text-white mb-4">Monthly Revenue</h3>
              <div className="h-40 bg-slate-900/50 rounded-lg flex items-end justify-between p-4">
                {[40, 65, 48, 72, 85, 90].map((height, i) => (
                  <div
                    key={i}
                    className="flex-1 mx-1 bg-gradient-to-t from-blue-500 to-cyan-400 rounded-t"
                    style={{ height: `${height}%` }}
                  ></div>
                ))}
              </div>
            </div>
            <div className="rounded-xl bg-slate-800/50 border border-slate-700/50 p-6">
              <h3 className="text-lg font-bold text-white mb-4">Service Breakdown</h3>
              <ul className="space-y-3">
                <li className="flex justify-between items-center">
                  <span className="text-slate-300">Landing Pages</span>
                  <span className="font-bold text-cyan-400">15 projects</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-slate-300">Business Websites</span>
                  <span className="font-bold text-cyan-400">22 projects</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-slate-300">E-Commerce</span>
                  <span className="font-bold text-cyan-400">8 projects</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-slate-300">Portfolios</span>
                  <span className="font-bold text-cyan-400">5 projects</span>
                </li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="space-y-6">
            {/* Account Settings */}
            <div className="rounded-xl bg-slate-800/50 border border-slate-700/50 p-6">
              <h3 className="text-lg font-bold text-white mb-6">Account Settings</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                  <input
                    type="email"
                    value={ADMIN_EMAIL}
                    disabled
                    className="w-full px-4 py-2 rounded-lg bg-slate-900/50 border border-slate-700/50 text-slate-400 cursor-not-allowed"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Password</label>
                  <button className="px-4 py-2 text-sm font-medium text-blue-400 border border-blue-500/50 rounded-lg hover:bg-blue-500/10 transition-colors">
                    Change Password
                  </button>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">WhatsApp Number</label>
                  <input
                    type="tel"
                    value="9093730488"
                    disabled
                    className="w-full px-4 py-2 rounded-lg bg-slate-900/50 border border-slate-700/50 text-slate-400 cursor-not-allowed"
                  />
                </div>
              </div>
            </div>

            {/* Services Management */}
            <div className="rounded-xl bg-slate-800/50 border border-slate-700/50 p-6">
              <h3 className="text-lg font-bold text-white mb-6">Services Management</h3>
              <p className="text-slate-400 mb-4">Manage which services are available to customers</p>
              <div className="space-y-4">
                {services && services.length > 0 ? (
                  services.map((service) => (
                    <div key={service.id} className="flex items-center justify-between p-4 rounded-lg bg-slate-900/50 border border-slate-700/50">
                      <div className="flex items-center gap-3 flex-1">
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <div>
                          <p className="font-bold text-white">{service.name}</p>
                          <p className="text-xs text-slate-400">{service.price} • {service.deliveryTime}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                          service.active 
                            ? 'bg-green-500/20 text-green-300' 
                            : 'bg-red-500/20 text-red-300'
                        }`}>
                          {service.active ? 'ACTIVE' : 'INACTIVE'}
                        </span>
                        <button className="px-3 py-1 text-xs font-bold text-blue-400 border border-blue-500/50 rounded hover:bg-blue-500/10 transition-colors">
                          Edit
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-slate-400 text-sm">No services available. Add services from Firebase.</p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
