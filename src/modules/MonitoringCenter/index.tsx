import React from 'react';
import { Activity, Bell, Eye, ArrowUpRight, TrendingUp, AlertCircle } from 'lucide-react';

export const MonitoringCenter: React.FC = () => {
  const events = [
    { time: '12:45:02', type: 'Transfer', amount: '12.5 ETH', status: 'Success' },
    { time: '12:43:15', type: 'Swap', amount: '50,000 USDC', status: 'Success' },
    { time: '12:40:55', type: 'Mint', amount: '1 NFT', status: 'Failed' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-black uppercase tracking-tighter text-white">Monitoring Center</h2>
          <p className="text-[10px] text-cyber-blue font-bold uppercase tracking-widest">Post-Deployment Tracking & Real-Time Alerts</p>
        </div>
        <div className="flex gap-4">
          <div className="p-3 bg-cyber-blue/10 border border-cyber-blue/30 rounded flex items-center gap-3">
            <Bell size={16} className="text-cyber-blue animate-bounce" />
            <span className="text-[10px] font-black uppercase text-cyber-blue">Active Alerts: 0</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 space-y-6">
          <div className="glass border border-cyber-border rounded-xl overflow-hidden">
            <div className="p-4 border-b border-cyber-border bg-white/5 flex items-center gap-2 text-cyber-blue">
              <Eye size={16} />
              <h3 className="text-[11px] font-black uppercase tracking-widest">Live Transaction Stream</h3>
            </div>
            <div className="p-0">
              {events.map((event, i) => (
                <div key={i} className="p-4 border-b border-cyber-border/50 flex items-center justify-between hover:bg-white/5 transition-all">
                  <div className="flex items-center gap-4">
                    <div className={`p-2 rounded ${event.status === 'Success' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
                      {event.status === 'Success' ? <ArrowUpRight size={16} /> : <AlertCircle size={16} />}
                    </div>
                    <div>
                      <h4 className="text-[11px] font-black uppercase tracking-tight text-white">{event.type}</h4>
                      <p className="text-[10px] text-gray-500 font-bold uppercase">{event.time} — Mainnet</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-black text-white">{event.amount}</p>
                    <p className={`text-[9px] font-black uppercase ${event.status === 'Success' ? 'text-green-500' : 'text-red-500'}`}>{event.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 bg-cyber-gray border border-cyber-border rounded-xl">
              <div className="flex items-center gap-2 text-cyber-blue mb-4">
                <TrendingUp size={16} />
                <h4 className="text-[11px] font-black uppercase tracking-widest">Revenue Analytics</h4>
              </div>
              <div className="h-24 flex items-end gap-1 mb-4">
                {[30, 50, 40, 70, 45, 90, 65, 80].map((h, i) => (
                  <div key={i} style={{ height: `${h}%` }} className="flex-1 bg-cyber-blue/20 border-t border-cyber-blue/50 rounded-t-sm" />
                ))}
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-[10px] text-gray-500 font-bold uppercase">24h Volume</p>
                  <p className="text-lg font-black text-white">$ 124,502.40</p>
                </div>
                <span className="text-[10px] text-green-500 font-black">+12.5%</span>
              </div>
            </div>

            <div className="p-6 bg-cyber-gray border border-cyber-border rounded-xl">
              <div className="flex items-center gap-2 text-cyber-orange mb-4">
                <Activity size={16} />
                <h4 className="text-[11px] font-black uppercase tracking-widest">Error Rates</h4>
              </div>
              <div className="h-24 flex items-end gap-1 mb-4">
                {[10, 5, 8, 12, 4, 3, 7, 2].map((h, i) => (
                  <div key={i} style={{ height: `${h}%` }} className="flex-1 bg-red-500/20 border-t border-red-500/50 rounded-t-sm" />
                ))}
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-[10px] text-gray-500 font-bold uppercase">Critical Errors</p>
                  <p className="text-lg font-black text-white">0</p>
                </div>
                <span className="text-[10px] text-green-500 font-black">All Systems Normal</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="glass border border-cyber-border rounded-xl p-6 space-y-4">
            <h3 className="text-[11px] font-black uppercase tracking-widest text-cyber-blue">Active Monitoring Hooks</h3>
            <div className="space-y-3">
              {[
                { name: 'Large Value Transfer', status: 'Active' },
                { name: 'Unauthorized Mint Attempt', status: 'Active' },
                { name: 'Governance Proposal', status: 'Inactive' },
              ].map((hook, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-black/40 rounded border border-cyber-border/50">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{hook.name}</span>
                  <div className={`w-2 h-2 rounded-full ${hook.status === 'Active' ? 'bg-green-500 animate-pulse' : 'bg-gray-600'}`} />
                </div>
              ))}
            </div>
          </div>

          <button className="w-full py-4 border border-dashed border-cyber-border rounded-xl text-gray-500 hover:text-cyber-blue hover:border-cyber-blue transition-all flex flex-col items-center justify-center space-y-2">
            <Activity size={24} className="opacity-20" />
            <span className="text-[10px] font-black uppercase tracking-widest">Initialize New Hook</span>
          </button>
        </div>
      </div>
    </div>
  );
};
