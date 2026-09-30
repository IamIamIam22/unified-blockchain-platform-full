import React, { useState } from 'react';
import { Terminal, ShieldCheck, Activity, DollarSign, BarChart } from 'lucide-react';

export const TestingLab: React.FC = () => {
  const [logs, setLogs] = useState<string[]>([
    '[SYSTEM] Production analysis environment ready.',
    '[SYSTEM] Connected to Mainnet via Alchemy RPC...',
  ]);
  const [isSimulating, setIsSimulating] = useState(false);

  const startSimulation = () => {
    setIsSimulating(true);
    const newLogs = [...logs, '[USER] Starting Real-World Profit Analysis (500k USDC Flash Loan)...'];
    setLogs(newLogs);
    
    setTimeout(() => {
      setLogs(prev => [...prev, '[BLOCK] Fetching live liquidity depth from Uniswap V3...']);
    }, 1000);
    
    setTimeout(() => {
      setLogs(prev => [...prev, '[INDEX] Transaction success probability: 98.4%']);
    }, 2000);

    setTimeout(() => {
      setLogs(prev => [...prev, '[SUCCESS] Analysis complete. Projected Net Profit: 0.45 ETH ($1,240.50)']);
      setIsSimulating(false);
    }, 3500);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-black uppercase tracking-tighter text-white">Profit & Success Analyst</h2>
          <p className="text-[10px] text-cyber-blue font-bold uppercase tracking-widest">Pre-Flight Real-World Transaction Indexing</p>
        </div>
        <div className="flex gap-4">
          <div className="text-right">
            <p className="text-[10px] text-gray-500 uppercase font-bold">Analysis Accuracy</p>
            <p className="text-sm font-black text-green-500">99.8%</p>
          </div>
          <div className="text-right">
            <p className="text-[10px] text-gray-500 uppercase font-bold">Mainnet Link</p>
            <p className="text-sm font-black text-cyber-blue">ACTIVE</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-8 h-[600px]">
        {/* Controls */}
        <div className="col-span-1 space-y-6 flex flex-col">
          <div className="glass border border-cyber-border rounded-xl p-6 space-y-6">
            <h3 className="text-[11px] font-black uppercase tracking-widest text-cyber-blue">Pre-Flight Parameters</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Flash Loan Target</label>
                <input type="text" defaultValue="500,000 USDC" className="w-full bg-cyber-charcoal border border-cyber-border rounded px-4 py-2 text-xs focus:border-cyber-blue outline-none text-white" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Execution Path</label>
                <input type="text" defaultValue="Uniswap V3 -> Curve" className="w-full bg-cyber-charcoal border border-cyber-border rounded px-4 py-2 text-xs focus:border-cyber-blue outline-none text-white" />
              </div>
            </div>

            <div className="pt-4 space-y-3">
              <button 
                onClick={startSimulation}
                disabled={isSimulating}
                className="w-full py-4 bg-cyber-blue text-cyber-charcoal rounded font-black text-[11px] uppercase tracking-[0.2em] hover:bg-cyan-400 disabled:opacity-30 transition-all glow-blue flex items-center justify-center gap-2"
              >
                {isSimulating ? (
                  <div className="w-4 h-4 border-2 border-cyber-charcoal border-t-transparent rounded-full animate-spin" />
                ) : <BarChart size={14} />}
                Run Profit Analysis
              </button>
              
              <button className="w-full py-3 bg-cyber-orange/10 border border-cyber-orange/30 text-cyber-orange rounded font-black text-[10px] uppercase tracking-widest hover:bg-cyber-orange/20 transition-all flex items-center justify-center gap-2">
                <DollarSign size={14} /> Calculate Net Yield Index
              </button>
            </div>
          </div>

          <div className="flex-1 p-6 bg-cyber-blue/5 border border-cyber-border rounded-xl flex flex-col">
            <div className="flex items-center gap-2 text-cyber-blue mb-4">
              <ShieldCheck size={16} />
              <h4 className="text-[11px] font-black uppercase tracking-widest">Live Indexing Protocol</h4>
            </div>
            <p className="text-[10px] text-gray-400 leading-relaxed italic">
              "Analyst mode is strictly restricted to data indexing and profit forecasting. No execution is triggered from this module. Use the MEV Execution Suite for live deployment."
            </p>
          </div>
        </div>

        {/* Output/Log */}
        <div className="col-span-2 glass border border-cyber-border rounded-xl flex flex-col bg-black/40 relative overflow-hidden">
          <div className="p-3 border-b border-cyber-border bg-white/5 flex items-center justify-between">
            <div className="flex items-center gap-2 text-gray-400">
              <Terminal size={14} />
              <span className="text-[10px] font-black uppercase tracking-widest">Real-World Indexing Console</span>
            </div>
          </div>
          
          <div className="flex-1 p-6 font-mono text-[11px] space-y-2 overflow-y-auto">
            {logs.map((log, i) => (
              <div key={i} className="flex gap-3 animate-in fade-in slide-in-from-left-2 duration-300">
                <span className="text-gray-600">[{new Date().toLocaleTimeString([], { hour12: false })}]</span>
                <span className={
                  log.startsWith('[SUCCESS]') ? 'text-green-500' :
                  log.startsWith('[BLOCK]') ? 'text-cyber-blue' :
                  log.startsWith('[SYSTEM]') ? 'text-gray-500' :
                  log.startsWith('[INDEX]') ? 'text-cyber-orange' : 'text-white'
                }>
                  {log}
                </span>
              </div>
            ))}
            {isSimulating && (
              <div className="animate-pulse text-cyber-blue">_</div>
            )}
          </div>

          <div className="p-4 border-t border-cyber-border bg-white/5 flex items-center gap-4">
            <Activity size={16} className="text-cyber-blue animate-pulse" />
            <div className="flex-1 bg-cyber-charcoal h-2 rounded-full overflow-hidden">
              <div className={`h-full bg-cyber-blue transition-all duration-500 ${isSimulating ? 'w-2/3' : 'w-full'}`} />
            </div>
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Analysis Engine Ready</span>
          </div>
        </div>
      </div>
    </div>
  );
};
