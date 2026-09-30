import React, { useState } from 'react';
import { Rocket, Globe, ShieldCheck, ArrowRight, CheckCircle2, AlertTriangle } from 'lucide-react';

export const DeploymentCenter: React.FC = () => {
  const [step, setStep] = useState(1);

  const networks = [
    { name: 'Ethereum Mainnet', id: 'eth', icon: '⟠', status: 'Optimal' },
    { name: 'Polygon Pos', id: 'poly', icon: '⚛', status: 'Fast' },
    { name: 'Arbitrum One', id: 'arb', icon: '🔵', status: 'Optimal' },
    { name: 'Base', id: 'base', icon: '🔵', status: 'Congested' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500 max-w-5xl">
      <div>
        <h2 className="text-2xl font-black uppercase tracking-tighter text-white">Deployment Center</h2>
        <p className="text-[10px] text-cyber-blue font-bold uppercase tracking-widest">Guided Multi-Network Launch Controls</p>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {['Network Selection', 'Fee Estimation', 'Security Verification', 'Signing & Launch'].map((s, i) => (
          <div key={i} className={`p-4 border-b-2 transition-all ${step === i + 1 ? 'border-cyber-blue bg-cyber-blue/5' : 'border-cyber-border opacity-50'}`}>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Step 0{i + 1}</p>
            <p className="text-xs font-bold text-white mt-1">{s}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2 glass border border-cyber-border rounded-xl p-8 min-h-[400px]">
          {step === 1 && (
            <div className="space-y-6 animate-in slide-in-from-right-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Globe size={20} className="text-cyber-blue" /> Choose Target Ecosystem
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {networks.map((n) => (
                  <button key={n.id} className="p-6 bg-cyber-gray border border-cyber-border rounded-xl hover:border-cyber-blue transition-all text-left group">
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-2xl">{n.icon}</span>
                      <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded border ${
                        n.status === 'Optimal' ? 'border-green-500/30 text-green-500 bg-green-500/5' : 'border-cyber-orange/30 text-cyber-orange bg-cyber-orange/5'
                      }`}>{n.status}</span>
                    </div>
                    <h4 className="text-sm font-black uppercase tracking-tight text-white">{n.name}</h4>
                    <p className="text-[10px] text-gray-500 mt-1 uppercase font-bold tracking-widest">ID: {n.id}_mainnet_v1</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step > 1 && (
            <div className="flex flex-col items-center justify-center h-full text-center space-y-4 opacity-50">
              <Rocket size={48} className="text-cyber-blue animate-bounce" />
              <p className="text-xs font-black uppercase tracking-[0.2em]">Configuring Launch sequence...</p>
            </div>
          )}

          <div className="mt-8 flex justify-between pt-8 border-t border-cyber-border/50">
            <button 
              disabled={step === 1}
              onClick={() => setStep(s => s - 1)}
              className="px-6 py-2 border border-cyber-border rounded text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-white disabled:opacity-0"
            >
              Back
            </button>
            <button 
              onClick={() => setStep(s => s + 1)}
              className="px-8 py-3 bg-cyber-blue text-cyber-charcoal rounded text-[11px] font-black uppercase tracking-[0.2em] hover:bg-cyan-400 transition-all glow-blue flex items-center gap-2"
            >
              Proceed to Fee Estimation <ArrowRight size={14} />
            </button>
          </div>
        </div>

        <div className="space-y-6">
          <div className="p-6 bg-cyber-gray border border-cyber-border rounded-xl space-y-4">
            <div className="flex items-center gap-2 text-cyber-blue mb-2">
              <ShieldCheck size={16} />
              <h3 className="text-[11px] font-black uppercase tracking-widest">Pre-Launch Checklist</h3>
            </div>
            <div className="space-y-3">
              {[
                { label: 'Security Audit Passed', status: true },
                { label: 'Sandbox Simulation Verified', status: true },
                { label: 'Multi-sig Authorized', status: true },
                { label: 'Slippage Protection Active', status: false },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{item.label}</span>
                  {item.status ? <CheckCircle2 size={14} className="text-green-500" /> : <AlertTriangle size={14} className="text-cyber-orange" />}
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 bg-black border border-cyber-border rounded-xl border-dashed">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-500">Deployment Intelligence</h4>
            <p className="text-[10px] text-gray-400 leading-relaxed italic mt-2">
              "Current recommendation: Deploying to Polygon will save 85% in gas costs with 12s finality for this specific contract type."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
