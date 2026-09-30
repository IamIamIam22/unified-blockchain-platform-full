import React from 'react';
import { ShieldCheck, ShieldAlert, Lock, Search, Eye, RefreshCw, Zap } from 'lucide-react';

export const SecurityCenter: React.FC = () => {
  const audits = [
    { name: 'Core Liquidity Pool', score: 98, status: 'Secure', flaws: 0 },
    { name: 'Governance Token', score: 84, status: 'Warning', flaws: 2 },
    { name: 'Treasury Multi-sig', score: 92, status: 'Secure', flaws: 1 },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-black uppercase tracking-tighter text-white">Security Center</h2>
          <p className="text-[10px] text-cyber-blue font-bold uppercase tracking-widest">Automated Auditing & Vulnerability Patching</p>
        </div>
        <button className="px-6 py-2 bg-cyber-blue/10 border border-cyber-blue/30 rounded text-[10px] font-black uppercase tracking-widest text-cyber-blue hover:bg-cyber-blue/20 transition-all flex items-center gap-2">
          <RefreshCw size={14} /> Scan Entire Workspace
        </button>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 space-y-6">
          <div className="glass border border-cyber-border rounded-xl overflow-hidden">
            <div className="p-4 border-b border-cyber-border bg-white/5 flex items-center gap-2 text-cyber-blue">
              <Eye size={16} />
              <h3 className="text-[11px] font-black uppercase tracking-widest">Active Audit Engine</h3>
            </div>
            <div className="p-0">
              {audits.map((audit, i) => (
                <div key={i} className="p-6 border-b border-cyber-border/50 flex items-center justify-between hover:bg-white/5 transition-all">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg ${audit.score > 90 ? 'bg-green-500/10 text-green-500' : 'bg-cyber-orange/10 text-cyber-orange'}`}>
                      {audit.score > 90 ? <ShieldCheck size={20} /> : <ShieldAlert size={20} />}
                    </div>
                    <div>
                      <h4 className="text-sm font-black uppercase tracking-tight">{audit.name}</h4>
                      <p className="text-[10px] text-gray-500 font-bold uppercase">{audit.flaws} Potential Vulnerabilities Detected</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`text-lg font-black ${audit.score > 90 ? 'text-green-500' : 'text-cyber-orange'}`}>{audit.score}%</p>
                    <button className="text-[9px] font-black uppercase tracking-widest text-cyber-blue hover:underline">View Breakdown</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 bg-cyber-blue/5 border border-cyber-blue/20 rounded-xl flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Zap className="text-cyber-blue" size={24} />
              <div>
                <h4 className="text-[11px] font-black uppercase tracking-widest text-white">One-Click Security Patching</h4>
                <p className="text-[10px] text-gray-500 uppercase font-bold mt-1 italic">Automatically resolve Reentrancy and Access Control flaws.</p>
              </div>
            </div>
            <button className="px-6 py-3 bg-cyber-blue text-cyber-charcoal rounded font-black text-[10px] uppercase tracking-widest hover:bg-cyan-400 transition-all shadow-lg shadow-cyber-blue/20">
              Apply All Patches
            </button>
          </div>
        </div>

        <div className="space-y-6">
          <div className="glass border border-cyber-border rounded-xl p-6 space-y-4">
            <div className="flex items-center gap-2 text-cyber-blue mb-2">
              <Lock size={16} />
              <h3 className="text-[11px] font-black uppercase tracking-widest">Vulnerability Scanner</h3>
            </div>
            <div className="relative">
              <input 
                type="text" 
                placeholder="Scan contract address..."
                className="w-full bg-cyber-charcoal border border-cyber-border rounded px-4 py-3 text-[11px] focus:border-cyber-blue outline-none"
              />
              <Search className="absolute right-4 top-3 text-gray-600" size={14} />
            </div>
            <div className="pt-4 space-y-2">
              <div className="flex justify-between text-[10px] font-bold uppercase text-gray-500">
                <span>Recent Scan: 0x4f...a2</span>
                <span className="text-green-500">Passed</span>
              </div>
              <div className="flex justify-between text-[10px] font-bold uppercase text-gray-500">
                <span>Recent Scan: 0x9e...1b</span>
                <span className="text-cyber-orange">Critical</span>
              </div>
            </div>
          </div>

          <div className="p-6 bg-black border border-cyber-border rounded-xl space-y-4 border-dashed">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-500">Audit Methodology</h4>
            <p className="text-[10px] text-gray-400 leading-relaxed italic">
              "We utilize static analysis combined with AI heuristic matching to detect top-10 OWASP vulnerabilities including reentrancy, integer overflow, and logic manipulation."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
