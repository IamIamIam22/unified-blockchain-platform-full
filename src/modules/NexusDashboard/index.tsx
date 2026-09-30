import React from 'react';
import { Wallet, Activity, AlertTriangle, ArrowUpRight, TrendingUp, ShieldAlert } from 'lucide-react';
import { useAccount, useBalance } from 'wagmi';
import { formatEther } from 'viem';

export const NexusDashboard: React.FC = () => {
  const { address, isConnected } = useAccount();
  const { data: ethBalance } = useBalance({
    address,
  });

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-black uppercase tracking-tighter">Nexus Dashboard</h2>
          <p className="text-[10px] text-cyber-blue font-bold uppercase tracking-widest">Ecosystem High-Level Overview</p>
        </div>
        <div className="flex gap-4">
          <div className="text-right">
            <p className="text-[10px] text-gray-500 uppercase font-bold">Network Load</p>
            <p className="text-sm font-black text-cyber-blue">42.8 TPS</p>
          </div>
          <div className="text-right">
            <p className="text-[10px] text-gray-500 uppercase font-bold">Gas (Mainnet)</p>
            <p className="text-sm font-black text-cyber-orange">18 Gwei</p>
          </div>
        </div>
      </div>

      {/* Wallet Status Grid */}
      <section>
        <div className="flex items-center gap-2 mb-4 text-cyber-blue">
          <Wallet size={16} />
          <h3 className="text-[11px] font-black uppercase tracking-widest">Wallet Status</h3>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {isConnected ? (
            <>
              <div className="p-4 bg-cyber-gray border-l-4 border-cyber-blue rounded transition-all cursor-pointer group">
                <p className="text-[10px] text-gray-500 font-bold uppercase mb-1">Ethereum</p>
                <p className="text-lg font-black tracking-tight">
                  {ethBalance ? `${parseFloat(formatEther(ethBalance.value)).toFixed(4)} ${ethBalance.symbol}` : 'Loading...'}
                </p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-[10px] text-cyber-blue font-bold uppercase">Active Wallet</span>
                  <ArrowUpRight size={14} className="text-gray-600 group-hover:text-cyber-blue" />
                </div>
              </div>
              <div className="p-4 bg-cyber-gray border-l-4 border-cyber-border rounded opacity-50 cursor-not-allowed">
                <p className="text-[10px] text-gray-500 font-bold uppercase mb-1">Bitcoin</p>
                <p className="text-lg font-black tracking-tight italic text-gray-600 tracking-[0.2em]">Inert</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-[10px] text-gray-600 font-bold uppercase">Connect BTC Wallet</span>
                  <ArrowUpRight size={14} className="text-gray-600" />
                </div>
              </div>
              <div className="p-4 bg-cyber-gray border-l-4 border-cyber-border rounded opacity-50 cursor-not-allowed">
                <p className="text-[10px] text-gray-500 font-bold uppercase mb-1">Polygon</p>
                <p className="text-lg font-black tracking-tight italic text-gray-600 tracking-[0.2em]">Inert</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-[10px] text-gray-600 font-bold uppercase">Switch Chain</span>
                  <ArrowUpRight size={14} className="text-gray-600" />
                </div>
              </div>
            </>
          ) : (
            <div className="col-span-3 p-12 bg-cyber-gray/30 border border-dashed border-cyber-border rounded-lg flex flex-col items-center justify-center text-center">
              <Wallet size={32} className="mb-4 text-cyber-blue/30" />
              <p className="text-xs font-black uppercase tracking-[0.2em] text-gray-500 mb-2">No Wallet Detected</p>
              <p className="text-[10px] text-gray-600 max-w-xs uppercase font-bold leading-relaxed">
                Connect your professional wallet to view live blockchain assets and network discrepancies.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Blockchain Status & Alerts */}
      <div className="grid grid-cols-2 gap-8">
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-cyber-blue">
            <Activity size={16} />
            <h3 className="text-[11px] font-black uppercase tracking-widest">Network Pulse</h3>
          </div>
          <div className="p-6 bg-black border border-cyber-border rounded-lg relative overflow-hidden group">
            <div className="absolute inset-0 bg-cyber-blue/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10 space-y-4">
              <div className="flex justify-between items-end h-24 gap-1">
                {[40, 70, 45, 90, 65, 80, 55, 75, 95, 60].map((h, i) => (
                  <div 
                    key={i} 
                    className="flex-1 bg-cyber-blue/20 border-t border-cyber-blue/50 rounded-t-sm animate-in slide-in-from-bottom"
                    style={{ transitionDelay: `${i * 50}ms`, height: `${h}%` }}
                  />
                ))}
              </div>
              <div className="flex justify-between text-[10px] font-bold text-gray-500 uppercase">
                <span>Mempool Congestion</span>
                <span className="text-cyber-blue text-sm">Optimal</span>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-center gap-2 text-cyber-orange">
            <AlertTriangle size={16} />
            <h3 className="text-[11px] font-black uppercase tracking-widest">System Alerts</h3>
          </div>
          <div className="space-y-2">
            <div className="p-4 bg-cyber-orange/5 border border-cyber-orange/20 rounded flex items-start gap-3">
              <ShieldAlert className="text-cyber-orange shrink-0" size={18} />
              <div>
                <p className="text-[11px] font-black text-cyber-orange uppercase">Vulnerability Detected</p>
                <p className="text-[10px] text-gray-400 mt-1 italic">"Arbitrage logic in Project 'Alpha' lacks slippage protection."</p>
              </div>
            </div>
            <div className="p-4 bg-cyber-blue/5 border border-cyber-blue/20 rounded flex items-start gap-3 opacity-60">
              <TrendingUp className="text-cyber-blue shrink-0" size={18} />
              <div>
                <p className="text-[11px] font-black text-cyber-blue uppercase">New Opportunity</p>
                <p className="text-[10px] text-gray-400 mt-1">Cross-chain discrepancy detected on Curve Finance.</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Project Hub Placeholder */}
      <section>
        <div className="flex items-center gap-2 mb-4 text-cyber-blue">
          <TrendingUp size={16} />
          <h3 className="text-[11px] font-black uppercase tracking-widest">Active Project Hub</h3>
        </div>
        <div className="border border-dashed border-cyber-border rounded-lg p-12 flex flex-col items-center justify-center text-gray-600">
          <Activity size={32} className="mb-4 opacity-20" />
          <p className="text-xs uppercase font-bold tracking-[0.2em]">No active builds in current session</p>
          <button className="mt-4 text-[10px] font-black text-cyber-blue uppercase hover:underline">Initialize New Workspace</button>
        </div>
      </section>
    </div>
  );
};
