import React, { useState } from 'react';
import { Bitcoin, Globe, Shield, HelpCircle, Terminal, Info } from 'lucide-react';

export const BitcoinGateway: React.FC = () => {
  const [connectionMethod, setConnectionMethod] = useState<'electrum' | 'core' | 'node'>('electrum');
  const [status, setStatus] = useState<'disconnected' | 'connecting' | 'connected'>('disconnected');

  const handleConnect = () => {
    setStatus('connecting');
    setTimeout(() => setStatus('connected'), 2500);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500 max-w-5xl">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-black uppercase tracking-tighter text-white">Bitcoin Network Gateway</h2>
          <p className="text-[10px] text-cyber-blue font-bold uppercase tracking-widest">Connect, Bridge & Monitor BTC Assets</p>
        </div>
        <div className={`px-4 py-1.5 rounded border flex items-center gap-2 ${
          status === 'connected' ? 'bg-green-500/10 border-green-500/30 text-green-500' : 
          status === 'connecting' ? 'bg-cyber-orange/10 border-cyber-orange/30 text-cyber-orange' : 
          'bg-cyber-gray border-cyber-border text-gray-500'
        }`}>
          <div className={`w-1.5 h-1.5 rounded-full ${
            status === 'connected' ? 'bg-green-500 shadow-[0_0_5px_rgba(34,197,94,0.5)]' : 
            status === 'connecting' ? 'bg-cyber-orange animate-pulse' : 'bg-gray-600'
          }`} />
          <span className="text-[9px] font-black uppercase tracking-widest">
            {status === 'connected' ? 'BTC Mainnet Active' : status === 'connecting' ? 'Handshaking...' : 'Disconnected'}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2 space-y-6">
          <div className="glass border border-cyber-border rounded-xl p-8 space-y-8">
            <div className="space-y-6">
              <h3 className="text-sm font-black uppercase tracking-widest text-white border-b border-cyber-border pb-4 flex items-center gap-2">
                <Globe size={18} className="text-cyber-blue" /> Select Connection Protocol
              </h3>
              
              <div className="grid grid-cols-3 gap-4">
                {[
                  { id: 'electrum', name: 'Electrum RPC', desc: 'Fast, lightweight public servers.' },
                  { id: 'core', name: 'Bitcoin Core', desc: 'Full node local RPC connection.' },
                  { id: 'node', name: 'Dedicated Node', desc: 'Private high-speed BTC infra.' },
                ].map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setConnectionMethod(m.id as any)}
                    className={`p-4 text-left border rounded-xl transition-all ${
                      connectionMethod === m.id ? 'border-cyber-blue bg-cyber-blue/5' : 'border-cyber-border bg-cyber-charcoal hover:border-gray-600'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-3 ${
                      connectionMethod === m.id ? 'bg-cyber-blue text-cyber-charcoal' : 'bg-cyber-gray text-cyber-blue'
                    }`}>
                      <Bitcoin size={16} />
                    </div>
                    <h4 className="text-[10px] font-black uppercase mb-1">{m.name}</h4>
                    <p className="text-[9px] text-gray-500 leading-tight">{m.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
               <div className="space-y-2">
                 <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Host / Endpoint</label>
                 <input 
                  type="text" 
                  placeholder={connectionMethod === 'electrum' ? "e.g. electrum.blockstream.info" : "e.g. 127.0.0.1:8332"}
                  className="w-full bg-cyber-charcoal border border-cyber-border rounded px-4 py-3 text-sm font-mono focus:border-cyber-blue outline-none text-white" 
                 />
               </div>
               <button 
                onClick={handleConnect}
                disabled={status === 'connecting' || status === 'connected'}
                className="w-full py-4 bg-cyber-blue text-cyber-charcoal rounded font-black text-[11px] uppercase tracking-[0.2em] hover:bg-cyan-400 transition-all glow-blue flex items-center justify-center gap-2"
               >
                 {status === 'connecting' ? 'Initiating RPC Handshake...' : status === 'connected' ? 'Connection Established' : 'Authorize BTC Connection'}
               </button>
            </div>
          </div>

          <div className="p-6 bg-cyber-blue/5 border border-cyber-border rounded-xl">
             <div className="flex items-center gap-2 text-cyber-blue mb-4">
               <HelpCircle size={16} />
               <h4 className="text-[10px] font-black uppercase tracking-widest text-white">BTC/ETH Bridge Visualization</h4>
             </div>
             <div className="flex items-center justify-between px-8 py-4 relative">
                <div className="flex flex-col items-center gap-2 z-10">
                   <div className="w-12 h-12 bg-cyber-gray border border-cyber-orange/30 rounded-full flex items-center justify-center text-cyber-orange">
                     <Bitcoin size={24} />
                   </div>
                   <span className="text-[9px] font-black uppercase">Bitcoin</span>
                </div>
                
                <div className="flex-1 h-[1px] bg-gradient-to-r from-cyber-orange/50 to-cyber-blue/50 mx-4 relative">
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cyber-charcoal px-3 py-1 border border-cyber-border rounded text-[8px] font-black uppercase tracking-widest text-gray-500">
                     Atomic Bridge
                   </div>
                   {status === 'connected' && (
                     <div className="absolute top-0 left-0 h-full bg-white/20 animate-progress" />
                   )}
                </div>

                <div className="flex flex-col items-center gap-2 z-10">
                   <div className="w-12 h-12 bg-cyber-gray border border-cyber-blue/30 rounded-full flex items-center justify-center text-cyber-blue">
                     <Bitcoin size={24} className="rotate-12" />
                   </div>
                   <span className="text-[9px] font-black uppercase text-cyber-blue">WBTC / ETH</span>
                </div>
             </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="glass border border-cyber-border rounded-xl p-6 space-y-6">
            <div className="flex items-center gap-2 text-cyber-orange">
              <Shield size={16} />
              <h3 className="text-[11px] font-black uppercase tracking-widest">Help & Setup Guide</h3>
            </div>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="text-[10px] font-black text-white uppercase">1. Prepare Local Client</p>
                <p className="text-[9px] text-gray-500 leading-relaxed italic">Download Electrum or Bitcoin Core. Ensure RPC is enabled in settings.</p>
              </div>
              <div className="space-y-2">
                <p className="text-[10px] font-black text-white uppercase">2. Configure Auth</p>
                <p className="text-[9px] text-gray-500 leading-relaxed italic">Set `rpcuser` and `rpcpassword` in your `.conf` file.</p>
              </div>
              <div className="space-y-2">
                <p className="text-[10px] font-black text-white uppercase">3. Finalize Tunnel</p>
                <p className="text-[9px] text-gray-500 leading-relaxed italic">Enter the local IP and Port above to bridge this dashboard to your node.</p>
              </div>
            </div>
            
            <button className="w-full py-3 border border-cyber-orange/30 text-cyber-orange rounded font-black text-[9px] uppercase tracking-widest hover:bg-cyber-orange/5 transition-all flex items-center justify-center gap-2">
              <Terminal size={14} /> Open CLI Troubleshooter
            </button>
          </div>

          <div className="p-6 bg-black border border-cyber-border rounded-xl border-dashed">
             <div className="flex items-center gap-2 text-cyber-blue mb-2">
               <Info size={16} />
               <h4 className="text-[10px] font-black uppercase tracking-widest">Protocol Support</h4>
             </div>
             <p className="text-[9px] text-gray-400 leading-relaxed italic">
               "This gateway supports Taproot, SegWit, and Legacy address formats. Integrated with Ordinals and BRC-20 scanning engines."
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};
