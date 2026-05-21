import React, { useState } from 'react';
import portfolioData from '../data/portfolioData.json';
import { Save, CheckCircle, AlertCircle, ArrowLeft, Plus, Trash2, LayoutDashboard, User, Briefcase, Code, Phone, FileJson } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AdminPanel() {
  const [data, setData] = useState(portfolioData);
  const [jsonText, setJsonText] = useState(JSON.stringify(portfolioData, null, 2));
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');
  const [activeTab, setActiveTab] = useState('Hero');

  const tabs = [
    { id: 'Hero', icon: <LayoutDashboard size={18} /> },
    { id: 'About', icon: <User size={18} /> },
    { id: 'Experience', icon: <Briefcase size={18} /> },
    { id: 'Skills', icon: <Code size={18} /> },
    { id: 'Contact', icon: <Phone size={18} /> },
    { id: 'Advanced', icon: <FileJson size={18} /> }
  ];

  // Generic shallow change
  const handleChange = (section, field, value) => {
    setData(prev => ({
      ...prev,
      [section]: { ...prev[section], [field]: value }
    }));
  };

  // Complex Array Changes (Experience)
  const addExperience = () => {
    setData(prev => ({
      ...prev,
      experience: [
        { id: Date.now().toString(), role: "New Role", company: "Company", period: "Year", responsibilities: [""], achievements: "", tools: [] },
        ...prev.experience
      ]
    }));
  };

  const updateExperience = (index, field, value) => {
    const newExp = [...data.experience];
    newExp[index][field] = value;
    setData(prev => ({ ...prev, experience: newExp }));
  };

  const removeExperience = (index) => {
    const newExp = [...data.experience];
    newExp.splice(index, 1);
    setData(prev => ({ ...prev, experience: newExp }));
  };

  // Complex Array Changes (Skills)
  const addDomainSkill = () => {
    setData(prev => ({
      ...prev,
      skills: { ...prev.skills, domain: [...prev.skills.domain, { name: "New Skill", level: 50 }] }
    }));
  };
  const updateDomainSkill = (index, field, value) => {
    const newDomain = [...data.skills.domain];
    newDomain[index][field] = field === 'level' ? Number(value) : value;
    setData(prev => ({ ...prev, skills: { ...prev.skills, domain: newDomain } }));
  };
  const removeDomainSkill = (index) => {
    const newDomain = [...data.skills.domain];
    newDomain.splice(index, 1);
    setData(prev => ({ ...prev, skills: { ...prev.skills, domain: newDomain } }));
  };

  const handleJsonChange = (e) => {
    setJsonText(e.target.value);
    try {
      setData(JSON.parse(e.target.value));
    } catch (e) {}
  };

  const handleSave = async () => {
    setStatus('saving');
    try {
      const payload = activeTab === 'Advanced' ? JSON.parse(jsonText) : data;
      const response = await fetch('/api/save-portfolio', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setMessage('Updated successfully!');
        if (activeTab !== 'Advanced') setJsonText(JSON.stringify(payload, null, 2));
        setTimeout(() => setStatus('idle'), 3000);
      } else throw new Error(result.error);
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof SyntaxError ? 'Invalid JSON.' : 'Failed to save. Run Vite locally.');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-primary transition-colors duration-300 flex flex-col md:flex-row">
      
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 bg-white dark:bg-primary-light border-r border-slate-200 dark:border-white/10 md:min-h-screen flex-shrink-0 sticky top-0 z-40 p-4">
        <div className="flex items-center gap-3 mb-8 px-2">
          <Link to="/" className="p-2 bg-slate-100 dark:bg-primary rounded-lg text-slate-600 dark:text-slate-300 hover:text-secondary">
            <ArrowLeft size={18} />
          </Link>
          <h1 className="text-lg font-bold text-slate-800 dark:text-white">Admin CMS</h1>
        </div>
        <nav className="space-y-2">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                activeTab === tab.id 
                  ? 'bg-secondary text-white shadow-md shadow-secondary/20' 
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5'
              }`}
            >
              {tab.icon} {tab.id}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-h-screen">
        
        {/* Topbar */}
        <header className="h-16 bg-white/80 dark:bg-primary/80 backdrop-blur-md border-b border-slate-200 dark:border-white/10 sticky top-0 z-30 px-6 flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-800 dark:text-white">{activeTab} Manager</h2>
          <div className="flex items-center gap-4">
            {status === 'success' && <span className="text-sm text-emerald-500 font-medium flex items-center gap-1"><CheckCircle size={16}/> Saved</span>}
            {status === 'error' && <span className="text-sm text-red-500 font-medium flex items-center gap-1"><AlertCircle size={16}/> {message}</span>}
            <button onClick={handleSave} disabled={status === 'saving'} className="px-5 py-2 bg-secondary hover:bg-blue-600 text-white rounded-lg text-sm font-medium flex items-center gap-2 transition-all">
              <Save size={16} /> {status === 'saving' ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </header>

        {/* Dynamic Form Area */}
        <div className="p-6 lg:p-8 max-w-5xl mx-auto w-full space-y-6 pb-24">
          
          {/* HERO TAB */}
          {activeTab === 'Hero' && (
            <div className="glass-card p-6 space-y-5">
              <div>
                <label className="block text-sm font-semibold mb-1 dark:text-slate-300">Name</label>
                <input type="text" value={data.hero.name} onChange={e => handleChange('hero', 'name', e.target.value)} className="w-full p-3 rounded-lg bg-slate-50 dark:bg-primary border border-slate-200 dark:border-white/10 dark:text-white" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1 dark:text-slate-300">Tagline</label>
                <textarea rows="3" value={data.hero.tagline} onChange={e => handleChange('hero', 'tagline', e.target.value)} className="w-full p-3 rounded-lg bg-slate-50 dark:bg-primary border border-slate-200 dark:border-white/10 dark:text-white" />
              </div>
            </div>
          )}

          {/* ABOUT TAB */}
          {activeTab === 'About' && (
            <div className="glass-card p-6 space-y-5">
              <div>
                <label className="block text-sm font-semibold mb-1 dark:text-slate-300">Professional Summary</label>
                <textarea rows="5" value={data.about.summary} onChange={e => handleChange('about', 'summary', e.target.value)} className="w-full p-3 rounded-lg bg-slate-50 dark:bg-primary border border-slate-200 dark:border-white/10 dark:text-white" />
              </div>
            </div>
          )}

          {/* EXPERIENCE TAB */}
          {activeTab === 'Experience' && (
            <div className="space-y-6">
              <button onClick={addExperience} className="w-full py-4 border-2 border-dashed border-slate-300 dark:border-white/20 rounded-xl text-slate-500 hover:bg-slate-50 dark:hover:bg-white/5 flex items-center justify-center gap-2 font-medium transition-colors">
                <Plus size={18} /> Add New Experience
              </button>
              
              {data.experience.map((exp, idx) => (
                <div key={idx} className="glass-card p-6 space-y-4 relative group">
                  <button onClick={() => removeExperience(idx)} className="absolute top-4 right-4 p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-lg transition-colors">
                    <Trash2 size={18} />
                  </button>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pr-12">
                    <div>
                      <label className="block text-xs font-semibold mb-1 dark:text-slate-400">Role</label>
                      <input type="text" value={exp.role} onChange={e => updateExperience(idx, 'role', e.target.value)} className="w-full p-2.5 rounded-lg bg-slate-50 dark:bg-primary border border-slate-200 dark:border-white/10 dark:text-white" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-1 dark:text-slate-400">Company</label>
                      <input type="text" value={exp.company} onChange={e => updateExperience(idx, 'company', e.target.value)} className="w-full p-2.5 rounded-lg bg-slate-50 dark:bg-primary border border-slate-200 dark:border-white/10 dark:text-white" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-1 dark:text-slate-400">Period</label>
                      <input type="text" value={exp.period} onChange={e => updateExperience(idx, 'period', e.target.value)} className="w-full p-2.5 rounded-lg bg-slate-50 dark:bg-primary border border-slate-200 dark:border-white/10 dark:text-white" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-1 dark:text-slate-400">Key Achievement</label>
                      <input type="text" value={exp.achievements} onChange={e => updateExperience(idx, 'achievements', e.target.value)} className="w-full p-2.5 rounded-lg bg-slate-50 dark:bg-primary border border-slate-200 dark:border-white/10 dark:text-white" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* SKILLS TAB */}
          {activeTab === 'Skills' && (
            <div className="space-y-6">
              <div className="glass-card p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold dark:text-white">Domain Skills</h3>
                  <button onClick={addDomainSkill} className="p-2 bg-secondary/10 text-secondary rounded-lg hover:bg-secondary hover:text-white transition-colors"><Plus size={16}/></button>
                </div>
                <div className="space-y-3">
                  {data.skills.domain.map((skill, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <input type="text" value={skill.name} onChange={e => updateDomainSkill(idx, 'name', e.target.value)} className="flex-1 p-2.5 rounded-lg bg-slate-50 dark:bg-primary border border-slate-200 dark:border-white/10 dark:text-white" placeholder="Skill Name"/>
                      <input type="number" value={skill.level} onChange={e => updateDomainSkill(idx, 'level', e.target.value)} className="w-24 p-2.5 rounded-lg bg-slate-50 dark:bg-primary border border-slate-200 dark:border-white/10 dark:text-white text-center" placeholder="0-100"/>
                      <button onClick={() => removeDomainSkill(idx)} className="p-2.5 text-red-500 hover:bg-red-50 rounded-lg"><Trash2 size={18}/></button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* CONTACT TAB */}
          {activeTab === 'Contact' && (
            <div className="glass-card p-6 space-y-5">
              <div>
                <label className="block text-sm font-semibold mb-1 dark:text-slate-300">Email Address</label>
                <input type="email" value={data.contact.email} onChange={e => handleChange('contact', 'email', e.target.value)} className="w-full p-3 rounded-lg bg-slate-50 dark:bg-primary border border-slate-200 dark:border-white/10 dark:text-white" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1 dark:text-slate-300">Phone Number</label>
                <input type="text" value={data.contact.phone} onChange={e => handleChange('contact', 'phone', e.target.value)} className="w-full p-3 rounded-lg bg-slate-50 dark:bg-primary border border-slate-200 dark:border-white/10 dark:text-white" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1 dark:text-slate-300">Location</label>
                <input type="text" value={data.contact.location} onChange={e => handleChange('contact', 'location', e.target.value)} className="w-full p-3 rounded-lg bg-slate-50 dark:bg-primary border border-slate-200 dark:border-white/10 dark:text-white" />
              </div>
            </div>
          )}

          {/* ADVANCED TAB */}
          {activeTab === 'Advanced' && (
            <div className="glass-card p-6">
              <p className="text-sm text-slate-500 mb-4">Edit the raw JSON configuration directly.</p>
              <textarea value={jsonText} onChange={handleJsonChange} className="w-full h-[600px] font-mono text-sm p-4 rounded-xl bg-slate-900 text-slate-200 border border-slate-800 focus:outline-none focus:ring-2 focus:ring-secondary resize-none" spellCheck="false" />
            </div>
          )}

        </div>
      </main>
    </div>
  );
}
