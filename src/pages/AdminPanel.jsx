import React, { useState } from 'react';
import portfolioData from '../data/portfolioData.json';
import { Save, CheckCircle, AlertCircle, ArrowLeft, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AdminPanel() {
  const [data, setData] = useState(portfolioData);
  const [jsonText, setJsonText] = useState(JSON.stringify(portfolioData, null, 2));
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');
  const [isAdvancedMode, setIsAdvancedMode] = useState(false);

  const handleHeroChange = (e) => {
    const { name, value } = e.target;
    const newData = {
      ...data,
      hero: { ...data.hero, [name]: value }
    };
    setData(newData);
    setJsonText(JSON.stringify(newData, null, 2));
  };

  const handleJsonChange = (e) => {
    setJsonText(e.target.value);
    try {
      const parsed = JSON.parse(e.target.value);
      setData(parsed); // Keep state in sync if JSON is valid
    } catch (e) {
      // Ignore parse errors while typing
    }
  };

  const handleSave = async () => {
    setStatus('saving');
    try {
      // If in advanced mode, validate JSON before sending
      let payload = data;
      if (isAdvancedMode) {
        payload = JSON.parse(jsonText);
      }

      const response = await fetch('/api/save-portfolio', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      
      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setMessage('Portfolio updated successfully!');
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        throw new Error(result.error);
      }
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof SyntaxError ? 'Invalid JSON format.' : 'Failed to save data. Ensure Vite is running.');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-primary transition-colors duration-300">
      
      <nav className="bg-white dark:bg-primary-light border-b border-slate-200 dark:border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="p-2 bg-slate-100 dark:bg-primary rounded-lg text-slate-600 dark:text-slate-300 hover:text-secondary transition-colors">
              <ArrowLeft size={20} />
            </Link>
            <h1 className="text-xl font-bold text-slate-800 dark:text-white">Admin Dashboard</h1>
          </div>
          
          <div className="flex items-center gap-4">
            {status === 'success' && (
              <span className="flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400 font-medium">
                <CheckCircle size={16} /> {message}
              </span>
            )}
            {status === 'error' && (
              <span className="flex items-center gap-2 text-sm text-red-600 dark:text-red-400 font-medium">
                <AlertCircle size={16} /> {message}
              </span>
            )}
            <button
              onClick={handleSave}
              disabled={status === 'saving'}
              className="px-6 py-2 bg-secondary hover:bg-blue-600 text-white rounded-lg font-medium flex items-center gap-2 transition-all disabled:opacity-70"
            >
              <Save size={18} />
              {status === 'saving' ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        
        {/* View Toggle */}
        <div className="flex items-center justify-end">
          <button 
            onClick={() => setIsAdvancedMode(!isAdvancedMode)}
            className={`px-4 py-2 rounded-lg font-medium text-sm flex items-center gap-2 transition-colors ${isAdvancedMode ? 'bg-secondary text-white' : 'bg-white dark:bg-primary-light text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10'}`}
          >
            <Code size={16} />
            {isAdvancedMode ? 'Standard Mode' : 'Advanced JSON Mode'}
          </button>
        </div>

        {!isAdvancedMode ? (
          /* Standard UI Forms */
          <>
            <section className="bg-white dark:bg-primary-light border border-slate-200 dark:border-white/10 rounded-2xl p-6 lg:p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 border-b border-slate-100 dark:border-white/5 pb-4">
                Hero Section
              </h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Display Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={data.hero.name}
                    onChange={handleHeroChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-primary border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Tagline</label>
                  <textarea 
                    rows="3"
                    name="tagline"
                    value={data.hero.tagline}
                    onChange={handleHeroChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-primary border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all resize-none"
                  />
                </div>
              </div>
            </section>
            <div className="p-4 bg-blue-50 dark:bg-secondary/10 border border-blue-100 dark:border-secondary/20 rounded-xl">
              <p className="text-sm text-blue-800 dark:text-blue-200 font-medium">
                Switch to <strong>Advanced JSON Mode</strong> to edit Experiences, Skills, and Contact details instantly.
              </p>
            </div>
          </>
        ) : (
          /* Advanced JSON Editor */
          <section className="bg-white dark:bg-primary-light border border-slate-200 dark:border-white/10 rounded-2xl p-6 lg:p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">
              Advanced Editor
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
              Edit the raw portfolio configuration. Ensure you use valid JSON syntax (double quotes around keys).
            </p>
            <textarea
              value={jsonText}
              onChange={handleJsonChange}
              className="w-full h-[600px] font-mono text-sm px-4 py-4 rounded-xl bg-slate-900 text-slate-200 border border-slate-800 focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
              spellCheck="false"
            />
          </section>
        )}

      </main>
    </div>
  );
}
