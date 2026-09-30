import React, { useState } from 'react';
import { UserCheck, Shield, Zap, Layers, Settings, Smartphone } from 'lucide-react';

export const SmartWalletHub: React.FC = () => {
  const [isSmartMode, setIsSmartMode] = useState(false);
  const [isDeploying, setIsDeploying] = useState(false);

  const handleUpgrade = () => {
    setIsDeploying(true);
    setTimeout(() => {
      setIsDeploying(false);
      setIsSmartMode(true);
    }, 3000);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500 max-w-5xl">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-black uppercase tracking-tighter text-white">Smart Wallet Hub</h2>
          <p className="text-[10px] text-cyber-blue font-bold uppercase tracking-widest">ERC-4337 Account Abstraction & Session Management</p>
        </div>
        <div className={`px-4 py-1.5 rounded border flex items-center gap-2 ${
          isSmartMode ? 'bg-cyber-blue/10 border-cyber-blue/30 text-cyber-blue' : 'bg-cyber-gray border-cyber-border text-gray-500'
        }`}>
          <Smartphone size={14} />
          <span className="text-[9px] font-black uppercase tracking-widest">
            {isSmartMode ? 'Smart Mode Active' : 'Standard EOA Mode'}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2 space-y-6">
          <div className="glass border border-cyber-border rounded-xl p-8 flex flex-col items-center justify-center text-center space-y-6 min-h-[400px]">
             {isSmartMode ? (
               <div className="animate-in zoom-in-95 space-y-6">
                  <div className="w-20 h-20 bg-cyber-blue/10 rounded-full flex items-center justify-center text-cyber-blue mx-auto border border-cyber-blue/30 glow-blue">
                    <UserCheck size={40} />
                  </div>
                  <div>
                    <h3 className="text-lg font-black uppercase text-white tracking-widest">Smart Account Operational</h3>
                    <p className="text-[10px] text-gray-500 mt-2 uppercase font-bold">Counterfactual Address: 0x7a...d24b</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                     <button className="px-6 py-3 bg-cyber-gray border border-cyber-border rounded text-[10px] font-black uppercase tracking-widest hover:border-cyber-blue transition-all">
                       Manage Session Keys
                     </button>
                     <button className="px-6 py-3 bg-cyber-gray border border-cyber-border rounded text-[10px] font-black uppercase tracking-widest hover:border-cyber-blue transition-all">
                       Recovery Settings
                     </button>
                  </div>
               </div>
             ) : (
               <div className="space-y-6 max-w-md">
                  <div className="w-16 h-16 bg-cyber-gray rounded-full flex items-center justify-center text-gray-600 mx-auto">
                    <Shield size={32} />
                  </div>
                  <div>
                    <h3 className="text-sm font-black uppercase text-white tracking-widest">Upgrade to Smart Account</h3>
                    <p className="text-[11px] text-gray-500 mt-2 italic leading-relaxed">
                      "Deploy an ERC-4337 compliant smart contract wallet. Enable gasless transactions, batched operations, and enhanced security via Alchemy Account Kit."
                    </p>
                  </div>
                  <button 
                    onClick={handleUpgrade}
                    disabled={isDeploying}
                    className="w-full py-4 bg-cyber-blue text-cyber-charcoal rounded font-black text-[11px] uppercase tracking-[0.2em] hover:bg-cyan-400 transition-all glow-blue flex items-center justify-center gap-2"
                  >
                    {isDeploying ? (
                      <>
                        <div className="w-4 h-4 border-2 border-cyber-charcoal border-t-transparent rounded-full animate-spin" />
                        Deploying Smart Infrastructure...
                      </>
                    ) : 'Initialize Upgrade Sequence'}
                  </button>
               </div>
             )}
          </div>

          <div className="grid grid-cols-2 gap-4">
             <div className="p-6 bg-cyber-gray border border-cyber-border rounded-xl space-y-4">
                <div className="flex items-center gap-2 text-cyber-blue">
                  <Layers size={16} />
                  <h4 className="text-[10px] font-black uppercase tracking-widest">Bundler Details</h4>
                </div>
                <div className="space-y-2">
                   <div className="flex justify-between text-[9px] font-bold uppercase">
                     <span className="text-gray-500">Entry Point</span>
                     <span className="text-white">v0.6.0</span>
                   </div>
                   <div className="flex justify-between text-[9px] font-bold uppercase">
                     <span className="text-gray-500">Provider</span>
                     <span className="text-cyber-blue">Alchemy Bundler</span>
                   </div>
                </div>
             </div>
             <div className="p-6 bg-cyber-gray border border-cyber-border rounded-xl space-y-4">
                <div className="flex items-center gap-2 text-cyber-orange">
                  <Settings size={16} />
                  <h4 className="text-[10px] font-black uppercase tracking-widest">Operational Limits</h4>
                </div>
                <div className="space-y-2">
                   <div className="flex justify-between text-[9px] font-bold uppercase">
                     <span className="text-gray-500">Daily Gas Cap</span>
                     <span className="text-white">0.05 ETH</span>
                   </div>
                   <div className="flex justify-between text-[9px] font-bold uppercase">
                     <span className="text-gray-500">Batch Limit</span>
                     <span className="text-cyber-orange">10 Tx/Batch</span>
                   </div>
                </div>
             </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="glass border border-cyber-border rounded-xl p-6 space-y-4">
            <h3 className="text-[11px] font-black uppercase tracking-widest text-cyber-blue">Smart Features</h3>
            <div className="space-y-2">
              {[
                { label: 'Gasless Execution', status: 'Available' },
                { label: 'Batch Transactions', status: 'Available' },
                { label: 'Session Keys', status: 'Active' },
                { label: 'Social Recovery', status: 'Setup Needed' },
              ].map((f, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-black/40 rounded border border-cyber-border/50">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{f.label}</span>
                  <span className={`text-[8px] font-black uppercase ${f.status === 'Active' ? 'text-cyber-blue' : 'text-gray-500'}`}>{f.status}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 bg-black border border-cyber-border rounded-xl border-dashed">
             <div className="flex items-center gap-2 text-cyber-blue mb-2">
               <Zap size={16} />
               <h4 className="text-[10px] font-black uppercase tracking-widest">Abstraction Intel</h4>
             </div>
             <p className="text-[10px] text-gray-400 leading-relaxed italic">
               "Smart accounts allow for programmatic transaction logic. Our AI can automatically batch multiple MEV swaps into a single UserOperation to save 30% on gas."
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};
