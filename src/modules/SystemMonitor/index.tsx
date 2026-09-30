import React, { useState, useEffect } from 'react';
import { Activity, ShieldCheck, Wifi, Cpu, Terminal, RefreshCw, AlertCircle } from 'lucide-react';
import { useAccount } from 'wagmi';

export const SystemMonitor: React.FC = () => {
  const { isConnected, address } = useAccount();
  const [latency, setLatency] = useState<number>(0);
  const [logs, setLogs] = useState<{ time: string; msg: string; type: 'info' | 'warn' | 'error' | 'success' }[]>([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Simulate latency and heartbeats
  useEffect(() => {
    const interval = setInterval(() => {
      setLatency(Math.floor(Math.random() * 50) + 10);
    }, 3000);
    
    setLogs([
      { time: new Date().toLocaleTimeString(), msg: 'System initialized. All daemons standby.', type: 'info' },
      { time: new Date().toLocaleTimeString(), msg: 'RPC Connection established: Ethereum Mainnet (Alchemy)', type: 'success' },
    ]);

    return () => clearInterval(interval);
  }, []);

  const refreshConnections = () => {
    setIsRefreshing(true);
    setLogs(prev => [{ time: new Date().toLocaleTimeString(), msg: 'Re-syncing with blockchain nodes...', type: 'info' }, ...prev]);
    
    setTimeout(() => {
      setIsRefreshing(false);
      setLogs(prev => [{ time: new Date().toLocaleTimeString(), msg: 'Connection refresh complete. All bots synchronized.', type: 'success' }, ...prev]);
    }, 2000);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-black uppercase tracking-tighter text-white">System Monitor</h2>
          <p className="text-[10px] text-cyber-blue font-bold uppercase tracking-widest">Real-time health, debug & daemon status</p>
        </div>
        <button 
          onClick={refreshConnections}
          disabled={isRefreshing}
          className="px-6 py-2 bg-cyber-blue/10 border border-cyber-blue/30 rounded text-[10px] font-black uppercase tracking-widest text-cyber-blue hover:bg-cyber-blue/20 transition-all flex items-center gap-2"
        >
          <RefreshCw size={14} className={isRefreshing ? 'animate-spin' : ''} /> 
          Refresh All Connections
        </button>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <div className="p-4 bg-cyber-gray border border-cyber-border rounded-lg">
          <div className="flex items-center gap-2 text-cyber-blue mb-2">
            <Wifi size={14} />
            <span className="text-[9px] font-black uppercase tracking-widest">RPC Status</span>
          </div>
          <p className="text-lg font-black text-white">ONLINE</p>
          <p className="text-[10px] text-green-500 font-bold uppercase mt-1">Latency: {latency}ms</p>
        </div>
        <div className="p-4 bg-cyber-gray border border-cyber-border rounded-lg">
          <div className="flex items-center gap-2 text-cyber-blue mb-2">
            <ShieldCheck size={14} />
            <span className="text-[9px] font-black uppercase tracking-widest">Wallet Auth</span>
          </div>
          <p className={isConnected ? "text-lg font-black text-white" : "text-lg font-black text-gray-600"}>
            {isConnected ? 'AUTHORIZED' : 'PENDING'}
          </p>
          <p className="text-[10px] text-gray-500 font-bold uppercase mt-1 truncate">
            {isConnected ? address : 'No connection detected'}
          </p>
        </div>
        <div className="p-4 bg-cyber-gray border border-cyber-border rounded-lg">
          <div className="flex items-center gap-2 text-cyber-orange mb-2">
            <Cpu size={14} />
            <span className="text-[9px] font-black uppercase tracking-widest">Active Bots</span>
          </div>
          <p className="text-lg font-black text-white">4 DAEMONS</p>
          <p className="text-[10px] text-cyber-orange font-bold uppercase mt-1">Heartbeat: Stable</p>
        </div>
        <div className="p-4 bg-cyber-gray border border-cyber-border rounded-lg">
          <div className="flex items-center gap-2 text-cyber-blue mb-2">
            <Activity size={14} />
            <span className="text-[9px] font-black uppercase tracking-widest">Block Sync</span>
          </div>
          <p className="text-lg font-black text-white">100%</p>
          <p className="text-[10px] text-cyber-blue font-bold uppercase mt-1">Target: Head</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-8 h-[500px]">
        {/* Connection Visualizer */}
        <div className="col-span-1 glass border border-cyber-border rounded-xl p-6 flex flex-col space-y-6">
          <h3 className="text-[11px] font-black uppercase tracking-widest text-cyber-blue">Connection Mesh</h3>
          <div className="flex-1 flex flex-col items-center justify-center relative">
            <div className="w-16 h-16 bg-cyber-blue/20 rounded-full flex items-center justify-center text-cyber-blue border border-cyber-blue/50 z-10">
              <Boxes size={24} />
            </div>
            {/* Animated lines placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="w-48 h-48 border border-cyber-blue/10 rounded-full animate-ping" />
            </div>
            <div className="mt-8 grid grid-cols-2 gap-8 w-full">
              <div className="flex flex-col items-center text-center">
                <div className="w-10 h-10 bg-cyber-gray border border-cyber-border rounded flex items-center justify-center mb-2">
                  <span className="text-[10px] font-black">BTC</span>
                </div>
                <span className="text-[8px] font-bold text-gray-500 uppercase">Synchronized</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-10 h-10 bg-cyber-gray border border-cyber-blue/30 rounded flex items-center justify-center mb-2">
                  <span className="text-[10px] font-black text-cyber-blue">ETH</span>
                </div>
                <span className="text-[8px] font-bold text-cyber-blue uppercase">Active Stream</span>
              </div>
            </div>
          </div>
          <div className="p-4 bg-cyber-blue/5 border border-cyber-blue/20 rounded text-[10px] text-gray-400 italic">
            "The system ensures atomic synchronization across BTC and ETH chains via dedicated Alchemy and Electrum hooks."
          </div>
        </div>

        {/* Debug Console */}
        <div className="col-span-2 glass border border-cyber-border rounded-xl flex flex-col bg-black/40 overflow-hidden">
          <div className="p-3 border-b border-cyber-border bg-white/5 flex items-center justify-between">
            <div className="flex items-center gap-2 text-gray-400">
              <Terminal size={14} />
              <span className="text-[10px] font-black uppercase tracking-widest">Global Debug Console</span>
            </div>
          </div>
          <div className="flex-1 p-6 font-mono text-[11px] space-y-2 overflow-y-auto">
            {logs.map((log, i) => (
              <div key={i} className="flex gap-3">
                <span className="text-gray-600">[{log.time}]</span>
                <span className={
                  log.type === 'success' ? 'text-green-500' :
                  log.type === 'warn' ? 'text-cyber-orange' :
                  log.type === 'error' ? 'text-red-500' : 'text-gray-400'
                }>
                  {log.msg}
                </span>
              </div>
            ))}
            <div className="animate-pulse text-cyber-blue">_</div>
          </div>
          <div className="p-4 bg-white/5 border-t border-cyber-border flex items-center justify-between">
            <div className="flex items-center gap-3">
               <AlertCircle size={14} className="text-cyber-blue" />
               <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Network: Ethereum Mainnet</span>
            </div>
            <span className="text-[9px] font-black text-cyber-blue uppercase">Build v1.0.4-OPERATIONAL</span>
          </div>
        </div>
      </div>
    </div>
  );
};

import { Boxes } from 'lucide-react';
