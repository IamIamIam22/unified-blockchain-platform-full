import React from 'react';
import { Globe, ShieldAlert, Cpu, Zap, ArrowRight, ExternalLink } from 'lucide-react';

export const BlockchainIntel: React.FC = () => {
  const updates = [
    { title: 'Ethereum Pectra Upgrade', date: 'Oct 24, 2026', type: 'Protocol', impact: 'Medium' },
    { title: 'New MEV Vector: L2 Sequencing', date: 'Oct 22, 2026', type: 'Threat', impact: 'High' },
    { title: 'Solana 1.18 Stable Release', date: 'Oct 20, 2026', type: 'Protocol', impact: 'Low' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-black uppercase tracking-tighter text-white">Blockchain Intelligence</h2>
          <p className="text-[10px] text-cyber-blue font-bold uppercase tracking-widest">Protocol Updates & Threat Tracking</p>
        </div>
        <div className="flex gap-4">
          <div className="p-3 bg-cyber-blue/10 border border-cyber-blue/30 rounded flex items-center gap-3">
            <Globe size={16} className="text-cyber-blue" />
            <span className="text-[10px] font-black uppercase text-cyber-blue">Scanning 14 Networks</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2 space-y-6">
          <div className="glass border border-cyber-border rounded-xl overflow-hidden">
            <div className="p-4 border-b border-cyber-border bg-white/5 flex items-center gap-2 text-cyber-blue">
              <Zap size={16} />
              <h3 className="text-[11px] font-black uppercase tracking-widest">Global Ecosystem Feed</h3>
            </div>
            <div className="p-0">
              {updates.map((update, i) => (
                <div key={i} className="p-6 border-b border-cyber-border/50 flex items-center justify-between hover:bg-white/5 transition-all group cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg ${update.type === 'Threat' ? 'bg-cyber-orange/10 text-cyber-orange' : 'bg-cyber-blue/10 text-cyber-blue'}`}>
                      {update.type === 'Threat' ? <ShieldAlert size={20} /> : <Cpu size={20} />}
                    </div>
                    <div>
                      <h4 className="text-sm font-black uppercase tracking-tight text-white">{update.title}</h4>
                      <p className="text-[10px] text-gray-500 font-bold uppercase">{update.date} — {update.type}</p>
                    </div>
                  </div>
                  <div className="text-right flex items-center gap-6">
                    <div>
                      <p className="text-[10px] text-gray-500 font-bold uppercase">Impact</p>
                      <p className={`text-xs font-black uppercase ${update.impact === 'High' ? 'text-cyber-orange' : 'text-cyber-blue'}`}>{update.impact}</p>
                    </div>
                    <ArrowRight size={16} className="text-gray-600 group-hover:text-cyber-blue transition-all group-hover:translate-x-1" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 bg-black border border-cyber-border rounded-xl relative overflow-hidden group border-dashed">
            <div className="absolute top-0 right-0 p-4 opacity-5">
              <ShieldAlert size={120} className="text-cyber-orange" />
            </div>
            <h4 className="text-[11px] font-black uppercase tracking-widest text-cyber-orange mb-2 flex items-center gap-2">
              <ShieldAlert size={14} /> Emerging Threat Vector Detected
            </h4>
            <p className="text-xs text-white font-bold leading-relaxed max-w-lg">
              Potential for atomic-level reentrancy detected in new AMM liquidity hooks. AI analysis recommends disabling swap-path 'Delta' until patch release.
            </p>
            <button className="mt-4 px-6 py-2 bg-cyber-orange/10 border border-cyber-orange/30 text-cyber-orange rounded font-black text-[10px] uppercase tracking-widest hover:bg-cyber-orange/20 transition-all">
              Initialize Preventive Sandbox
            </button>
          </div>
        </div>

        <div className="space-y-6">
          <div className="glass border border-cyber-border rounded-xl p-6 space-y-4">
            <h3 className="text-[11px] font-black uppercase tracking-widest text-cyber-blue">Monitored Protocols</h3>
            <div className="space-y-2">
              {['Uniswap', 'Aave', 'Curve', 'Lido', 'Compound'].map((p) => (
                <div key={p} className="flex items-center justify-between p-3 bg-cyber-gray/50 rounded border border-cyber-border/50 group hover:border-cyber-blue transition-all cursor-pointer">
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 group-hover:text-white">{p}</span>
                  <ExternalLink size={12} className="text-gray-600 group-hover:text-cyber-blue" />
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 bg-cyber-blue/5 border border-cyber-blue/20 rounded-xl">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-cyber-blue mb-4">Intel Summary</h4>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-bold text-gray-500 uppercase">New LPs (24h)</span>
                <span className="text-xs font-black text-white">412</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-bold text-gray-500 uppercase">Governance Props</span>
                <span className="text-xs font-black text-white">24</span>
              </div>
              <div className="pt-4 border-t border-cyber-border flex justify-between items-center">
                <span className="text-[10px] font-black uppercase text-cyber-blue">Safety Index</span>
                <span className="text-xs font-black text-green-500 uppercase tracking-widest">Optimized</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
