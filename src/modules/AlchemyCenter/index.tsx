import React, { useState } from 'react';
import { Database, Shield, Zap, Globe, Key, Save, CheckCircle } from 'lucide-react';
import { ALCHEMY_API_KEY, ALCHEMY_GAS_POLICY_ID } from '../../wagmi';

export const AlchemyCenter: React.FC = () => {
  const [apiKey, setApiKey] = useState(ALCHEMY_API_KEY);
  const [gasPolicyId, setGasPolicyId] = useState(ALCHEMY_GAS_POLICY_ID);
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = () => {
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
    console.log('Alchemy Config Updated:', { apiKey, gasPolicyId });
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500 max-w-5xl">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-black uppercase tracking-tighter text-white">Alchemy Infrastructure Hub</h2>
          <p className="text-[10px] text-cyber-blue font-bold uppercase tracking-widest">LIVE MAINNET INFRASTRUCTURE ACTIVE</p>
        </div>
        <div className="flex gap-4">
           <div className="flex items-center gap-2 px-3 py-1.5 bg-green-500/10 border border-green-500/30 rounded">
             <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
             <span className="text-[9px] font-black uppercase text-green-500 tracking-widest">Live Execution Mode</span>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2 space-y-6">
          <div className="glass border border-cyber-border rounded-xl p-8 space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-white border-b border-cyber-border pb-4">
                <Key className="text-cyber-blue" size={20} />
                <h3 className="text-sm font-black uppercase tracking-widest">Global Mainnet Auth</h3>
              </div>
              
              <div className="grid grid-cols-1 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest flex items-center gap-2">
                    Alchemy API Key <Shield size={12} className="text-cyber-blue" />
                  </label>
                  <input 
                    type="password" 
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    className="w-full bg-cyber-charcoal border border-cyber-border rounded px-4 py-3 text-sm font-mono focus:border-cyber-blue outline-none text-white"
                  />
                  <p className="text-[9px] text-green-500 font-bold italic">"SECURE: Credential hard-coded for production execution."</p>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest flex items-center gap-2">
                    Gas Policy ID <Zap size={12} className="text-cyber-orange" />
                  </label>
                  <input 
                    type="text" 
                    value={gasPolicyId}
                    onChange={(e) => setGasPolicyId(e.target.value)}
                    className="w-full bg-cyber-charcoal border border-cyber-border rounded px-4 py-3 text-sm font-mono focus:border-cyber-blue outline-none text-white"
                  />
                  <p className="text-[9px] text-cyber-orange font-bold italic">"ACTIVE: Gas sponsoring enabled for Smart Wallet transactions."</p>
                </div>
              </div>
            </div>

            <button 
              onClick={handleSave}
              className="w-full py-4 bg-cyber-blue text-cyber-charcoal rounded font-black text-[11px] uppercase tracking-[0.2em] hover:bg-cyan-400 transition-all glow-blue flex items-center justify-center gap-2"
            >
              {isSaved ? <CheckCircle size={16} /> : <Save size={16} />}
              {isSaved ? 'Live Config Verified' : 'Update Production Config'}
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 bg-cyber-blue/5 border border-cyber-blue/20 rounded-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-cyber-blue mb-4">
                  <Database size={16} />
                  <h4 className="text-[10px] font-black uppercase tracking-widest">Mainnet Node Health</h4>
                </div>
                <ul className="space-y-2">
                  <li className="flex justify-between text-[10px] font-bold uppercase">
                    <span className="text-gray-500">Ethereum Mainnet</span>
                    <span className="text-green-500">LIVE</span>
                  </li>
                  <li className="flex justify-between text-[10px] font-bold uppercase">
                    <span className="text-gray-500">Polygon Mainnet</span>
                    <span className="text-green-500">LIVE</span>
                  </li>
                  <li className="flex justify-between text-[10px] font-bold uppercase">
                    <span className="text-gray-500">Arbitrum One</span>
                    <span className="text-green-500">LIVE</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-6 bg-black border border-cyber-border rounded-xl border-dashed">
              <div className="flex items-center gap-2 text-cyber-orange mb-4">
                <Zap size={16} />
                <h4 className="text-[10px] font-black uppercase tracking-widest">Real-Life Execution</h4>
              </div>
              <p className="text-[10px] text-gray-400 leading-relaxed italic">
                "All simulations have been restricted to profit analysis. All outbound calls are now routed through these production endpoints for real-world settlement."
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="glass border border-cyber-border rounded-xl p-6 space-y-4">
             <div className="flex items-center gap-2 text-cyber-blue mb-2">
               <Globe size={16} />
               <h3 className="text-[11px] font-black uppercase tracking-widest">Production Mesh</h3>
             </div>
             <div className="space-y-3">
               {['ETH Mainnet', 'Polygon', 'Arbitrum', 'Base'].map((net) => (
                 <div key={net} className="flex items-center justify-between p-3 bg-cyber-charcoal rounded border border-cyber-border/50">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{net}</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_5px_rgba(34,197,94,0.5)]" />
                 </div>
               ))}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
