import React, { useState } from 'react';
import { Code2, CheckCircle2, ArrowRight, Layers } from 'lucide-react';

export const ContractWizard: React.FC = () => {
  const [step, setStep] = useState(1);
  const [contractType, setContractType] = useState('');

  const types = [
    { id: 'token', name: 'Standard Token (ERC-20)', desc: 'Create your own cryptocurrency for governance or utility.' },
    { id: 'nft', name: 'Digital Asset (ERC-721)', desc: 'Deploy a unique collection of non-fungible tokens.' },
    { id: 'dao', name: 'DAO Governance', desc: 'Establish a decentralized autonomous organization.' },
    { id: 'escrow', name: 'Secure Escrow', desc: 'Hold funds in trust for multi-party agreements.' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500 max-w-4xl">
      <div>
        <h2 className="text-2xl font-black uppercase tracking-tighter text-white">Smart Contract Wizard</h2>
        <p className="text-[10px] text-cyber-blue font-bold uppercase tracking-widest">Guided, No-Code Infrastructure Creation</p>
      </div>

      {/* Stepper */}
      <div className="flex items-center gap-4">
        {[1, 2, 3, 4, 5].map((s) => (
          <React.Fragment key={s}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-black text-xs border-2 transition-all ${
              step === s ? 'bg-cyber-blue border-cyber-blue text-cyber-charcoal shadow-[0_0_10px_rgba(0,242,255,0.5)]' : 
              step > s ? 'border-cyber-blue text-cyber-blue' : 'border-cyber-border text-gray-600'
            }`}>
              {step > s ? <CheckCircle2 size={16} /> : s}
            </div>
            {s < 5 && <div className={`h-[1px] w-12 ${step > s ? 'bg-cyber-blue' : 'bg-cyber-border'}`} />}
          </React.Fragment>
        ))}
        <span className="ml-4 text-[10px] font-black uppercase tracking-widest text-cyber-blue">
          {step === 1 ? 'Architecture' : step === 2 ? 'Requirements' : step === 3 ? 'AI Drafting' : step === 4 ? 'Sandbox Audit' : 'Final Review'}
        </span>
      </div>

      <div className="glass border border-cyber-border rounded-xl p-8 min-h-[400px] flex flex-col">
        {step === 1 && (
          <div className="space-y-6 animate-in slide-in-from-right-4">
            <h3 className="text-lg font-bold text-white">Select Contract Architecture</h3>
            <div className="grid grid-cols-2 gap-4">
              {types.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setContractType(t.id)}
                  className={`p-6 text-left border rounded-xl transition-all group ${
                    contractType === t.id ? 'border-cyber-blue bg-cyber-blue/5' : 'border-cyber-border bg-cyber-gray hover:border-gray-500'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 transition-colors ${
                    contractType === t.id ? 'bg-cyber-blue text-cyber-charcoal' : 'bg-black text-cyber-blue group-hover:bg-cyber-blue group-hover:text-cyber-charcoal'
                  }`}>
                    <Layers size={20} />
                  </div>
                  <h4 className="text-sm font-black uppercase tracking-tight mb-2">{t.name}</h4>
                  <p className="text-[11px] text-gray-500 leading-relaxed italic">{t.desc}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6 animate-in slide-in-from-right-4">
            <h3 className="text-lg font-bold text-white">Business Requirements</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Total Supply</label>
                <input type="text" placeholder="e.g. 1,000,000" className="w-full bg-cyber-charcoal border border-cyber-border rounded px-4 py-3 text-sm focus:border-cyber-blue outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Initial Distribution Strategy</label>
                <textarea rows={3} placeholder="Describe who receives the tokens and why..." className="w-full bg-cyber-charcoal border border-cyber-border rounded px-4 py-3 text-sm focus:border-cyber-blue outline-none" />
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="flex-1 flex flex-col items-center justify-center text-center space-y-6 animate-in zoom-in-95">
            <div className="w-20 h-20 bg-cyber-blue/10 rounded-full flex items-center justify-center text-cyber-blue animate-pulse">
              <Code2 size={40} />
            </div>
            <div>
              <h3 className="text-lg font-black uppercase text-white tracking-widest">Generating Infrastructure</h3>
              <p className="text-[11px] text-gray-500 mt-2 uppercase font-bold tracking-[0.2em]">Assembling logic, security hooks, and monitoring loops...</p>
            </div>
            <div className="w-full max-w-md bg-cyber-gray rounded-full h-1 overflow-hidden">
              <div className="bg-cyber-blue h-full animate-progress" />
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-6 animate-in slide-in-from-right-4">
             <h3 className="text-lg font-bold text-white">Sandbox Simulation & Security Audit</h3>
             <div className="p-6 bg-black/40 border border-cyber-border rounded-xl space-y-4">
                <div className="flex items-center justify-between">
                   <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Formal Verification</span>
                   <span className="text-green-500 text-[10px] font-black uppercase">Passed</span>
                </div>
                <div className="flex justify-between">
                   <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Slippage Tolerance Test</span>
                   <span className="text-cyber-blue text-[10px] font-black uppercase italic">Optimized (0.01%)</span>
                </div>
                <div className="pt-4 border-t border-cyber-border text-[10px] text-gray-400 italic">
                  "The AI is currently stress-testing the 'Transfer' logic against reentrancy vectors in a sandboxed fork of Mainnet."
                </div>
             </div>
          </div>
        )}

        {step === 5 && (
          <div className="space-y-6 animate-in zoom-in-95">
             <h3 className="text-lg font-bold text-white text-center">Ready for Deployment</h3>
             <div className="p-8 border border-cyber-blue/30 bg-cyber-blue/5 rounded-xl flex flex-col items-center gap-4">
                <CheckCircle2 size={48} className="text-cyber-blue" />
                <div className="text-center">
                   <p className="text-sm font-black uppercase text-white tracking-tight">Contract Hash Generated</p>
                   <p className="text-[10px] font-mono text-cyber-blue mt-1">0x8f2a...c9d4</p>
                </div>
                <p className="text-[11px] text-gray-400 text-center max-w-sm">
                  "Your contract is fully optimized, audited, and ready to be pushed to the Deployment Center. Gas estimation: ~45,000 gwei."
                </p>
             </div>
          </div>
        )}

        <div className="mt-auto pt-8 flex justify-between">
          <button 
            disabled={step === 1}
            onClick={() => setStep(s => s - 1)}
            className="px-6 py-2 border border-cyber-border rounded text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-white disabled:opacity-0 transition-all"
          >
            Back
          </button>
          <button 
            onClick={() => step < 5 ? setStep(s => s + 1) : null}
            disabled={step === 1 && !contractType}
            className="px-8 py-3 bg-cyber-blue text-cyber-charcoal rounded text-[11px] font-black uppercase tracking-[0.2em] hover:bg-cyan-400 transition-all glow-blue flex items-center gap-2"
          >
            {step === 5 ? 'Finalize & Deploy' : 'Next Step'} <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};
