import React from 'react';
import { Zap, ArrowRight, Info, Terminal, Calculator, Play } from 'lucide-react';

export const MEVCatalog: React.FC = () => {
  const [filter, setFilter] = React.useState<'all' | 'zero-cost'>('all');

  const opportunities = [
    { type: 'Arbitrage', pair: 'WETH/DAI', path: 'Uniswap V3 → Sushiswap', profit: '+$452.12', risk: 'Low', zeroCost: true },
    { type: 'Sandwich', pair: 'LINK/USDC', path: 'Mempool Monitoring', profit: '+$1,204.45', risk: 'High', zeroCost: false },
    { type: 'Flash Loan', pair: 'USDT/USDC', path: 'Aave → Curve → Repay', profit: '+$3,450.00', risk: 'Medium', zeroCost: true },
    { type: 'Liquidation', pair: 'ETH/DAI', path: 'Compound V2', profit: '+$890.20', risk: 'Low', zeroCost: true },
  ];

  const filteredOps = filter === 'all' ? opportunities : opportunities.filter(op => op.zeroCost);

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-black uppercase tracking-tighter">MEV & Arbitrage Catalog</h2>
          <p className="text-[10px] text-cyber-blue font-bold uppercase tracking-widest">Real-time discrepancy feeds & opportunity selection</p>
        </div>
        <div className="flex bg-cyber-gray p-1 rounded border border-cyber-border">
          <button 
            onClick={() => setFilter('all')}
            className={`px-4 py-1.5 text-[10px] font-black uppercase tracking-widest transition-all ${filter === 'all' ? 'bg-cyber-blue text-cyber-charcoal' : 'text-gray-500 hover:text-white'}`}
          >
            All Ops
          </button>
          <button 
            onClick={() => setFilter('zero-cost')}
            className={`px-4 py-1.5 text-[10px] font-black uppercase tracking-widest transition-all ${filter === 'zero-cost' ? 'bg-cyber-orange text-cyber-charcoal glow-orange' : 'text-gray-500 hover:text-white'}`}
          >
            Zero Cost
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Discrepancy Catalog */}
        <div className="col-span-2 space-y-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2 text-cyber-blue">
              <Zap size={16} />
              <h3 className="text-[11px] font-black uppercase tracking-widest">Live Discrepancy Feed</h3>
            </div>
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{filteredOps.length} Matches</span>
          </div>
          
          <div className="space-y-3">
            {filteredOps.map((op, i) => (
              <div key={i} className="p-4 bg-cyber-gray border border-cyber-border rounded hover:border-cyber-blue group transition-all cursor-pointer relative overflow-hidden">
                {op.zeroCost && (
                  <div className="absolute top-0 right-0 px-2 py-0.5 bg-cyber-orange text-cyber-charcoal text-[8px] font-black uppercase tracking-tighter transform rotate-0">
                    Zero Cost Logic
                  </div>
                )}
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-cyber-blue/10 text-cyber-blue text-[9px] font-black uppercase rounded border border-cyber-blue/20">{op.type}</span>
                    <span className="text-sm font-bold tracking-tight">{op.pair}</span>
                  </div>
                  <span className="text-cyber-blue font-black text-sm">{op.profit}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[10px] text-gray-400 font-medium">
                    <Terminal size={12} className="text-cyber-blue" />
                    <span>{op.path}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[9px] text-gray-500 font-bold uppercase tracking-widest">Risk: {op.risk}</span>
                    <ArrowRight size={14} className="text-gray-600 group-hover:text-cyber-blue transform group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Live Math Telemetry */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-cyber-blue mb-2">
            <Calculator size={16} />
            <h3 className="text-[11px] font-black uppercase tracking-widest">Live Math Telemetry</h3>
          </div>
          <div className="p-6 bg-black border border-cyber-border rounded-lg space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] text-gray-500 font-bold uppercase mb-2">Required Flash Loan</p>
                <p className="text-xl font-black tracking-tight">500,000 USDC</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] text-cyber-orange font-bold uppercase mb-2">Net Cost</p>
                <p className="text-xl font-black text-cyber-orange tracking-tight">$0.00</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center text-[11px]">
                <span className="text-gray-400 font-medium italic">Gas / Fees Incorporated</span>
                <span className="text-cyber-orange font-bold">YES</span>
              </div>
              <div className="flex justify-between items-center text-[11px]">
                <span className="text-gray-400 font-medium">Internal Fee Offset</span>
                <span className="text-cyber-blue font-bold">-$124.50</span>
              </div>
              <div className="pt-3 border-t border-cyber-border flex justify-between items-center">
                <span className="text-[10px] font-black uppercase tracking-widest text-cyber-blue">Projected Net Yield</span>
                <span className="text-lg font-black text-cyber-blue">+$2,825.50</span>
              </div>
            </div>
            <div className="p-3 bg-cyber-orange/10 border border-cyber-orange/20 rounded">
              <p className="text-[9px] text-cyber-orange font-bold uppercase tracking-widest leading-relaxed">
                Zero-Cost Logic Active: This contract will pull fees directly from the swap arbitrage margin. No upfront capital required.
              </p>
            </div>
            <button 
              onClick={() => {
                alert('AI is drafting the execution contract based on selected opportunity...');
              }}
              className="w-full py-3 bg-cyber-blue hover:bg-cyan-400 text-cyber-charcoal font-black text-[11px] uppercase tracking-[0.2em] rounded flex items-center justify-center gap-2 transition-all glow-blue"
            >
              <Play size={14} fill="currentColor" />
              Draft Execution Contract
            </button>
          </div>
          
          <div className="p-4 bg-cyber-gray/50 border border-cyber-border rounded-lg flex items-start gap-3">
            <Info className="text-cyber-blue shrink-0" size={16} />
            <p className="text-[10px] text-gray-400 leading-relaxed italic">
              AI analysis suggests this opportunity is viable for the next 4 blocks. Liquidity depth is sufficient for 500k volume.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
