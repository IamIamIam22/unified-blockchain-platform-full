import React, { useState } from 'react';
import { Search, Database, DollarSign, ArrowUpRight, Zap, Globe, Info } from 'lucide-react';

export const FundingFinder: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'mining' | 'liquidity'>('all');

  const pools = [
    { name: 'Foundry USA', type: 'Mining Pool', asset: 'BTC', share: '28.5%', fundingType: 'Block Rewards', status: 'Optimal' },
    { name: 'AntPool', type: 'Mining Pool', asset: 'BTC', share: '21.2%', fundingType: 'Block Rewards', status: 'Stable' },
    { name: 'Uniswap V3 WBTC/ETH', type: 'Liquidity Pool', asset: 'WBTC', share: '$245M TVL', fundingType: 'Flash Loans', status: 'High Depth' },
    { name: 'Curve tBTC/wBTC', type: 'Liquidity Pool', asset: 'BTC Bridge', share: '$112M TVL', fundingType: 'Atomic Swaps', status: 'Low Slippage' },
    { name: 'Aave V3 BTC Market', type: 'Liquidity Pool', asset: 'WBTC', share: '$89M Avail', fundingType: 'Flash Loans', status: 'Active' },
    { name: 'F2Pool', type: 'Mining Pool', asset: 'BTC', share: '14.8%', fundingType: 'Block Rewards', status: 'Optimal' },
  ];

  const filteredPools = filter === 'all' ? pools : pools.filter(p => 
    filter === 'mining' ? p.type === 'Mining Pool' : p.type === 'Liquidity Pool'
  );

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-black uppercase tracking-tighter text-white">Funding & Liquidity Finder</h2>
          <p className="text-[10px] text-cyber-blue font-bold uppercase tracking-widest">Locate Bitcoin Pools & Liquidity Sources for Trade Execution</p>
        </div>
        <div className="flex bg-cyber-gray p-1 rounded border border-cyber-border">
          {['all', 'mining', 'liquidity'].map((f) => (
            <button 
              key={f}
              onClick={() => setFilter(f as any)}
              className={`px-4 py-1.5 text-[10px] font-black uppercase tracking-widest transition-all ${filter === f ? 'bg-cyber-blue text-cyber-charcoal' : 'text-gray-500 hover:text-white'}`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2 space-y-6">
          <div className="glass border border-cyber-border rounded-xl overflow-hidden">
            <div className="p-4 border-b border-cyber-border bg-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2 text-cyber-blue">
                <Database size={16} />
                <h3 className="text-[11px] font-black uppercase tracking-widest">Global Funding & Pool Index</h3>
              </div>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Filter pools..."
                  className="bg-cyber-charcoal border border-cyber-border rounded px-3 py-1 text-[10px] focus:border-cyber-blue outline-none text-white w-48"
                />
                <Search className="absolute right-2 top-1.5 text-gray-600" size={12} />
              </div>
            </div>
            
            <div className="p-0">
              <table className="w-full text-[11px]">
                <thead className="bg-black/40 text-gray-500 uppercase tracking-widest text-left">
                  <tr>
                    <th className="p-4 font-black">Source Name</th>
                    <th className="p-4 font-black">Network/Asset</th>
                    <th className="p-4 font-black">Funding Capacity</th>
                    <th className="p-4 font-black">Status</th>
                    <th className="p-4"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-cyber-border/50">
                  {filteredPools.map((pool, i) => (
                    <tr key={i} className="hover:bg-white/5 transition-all group">
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded flex items-center justify-center ${pool.type === 'Mining Pool' ? 'bg-cyber-orange/10 text-cyber-orange' : 'bg-cyber-blue/10 text-cyber-blue'}`}>
                            {pool.type === 'Mining Pool' ? <Zap size={14} /> : <DollarSign size={14} />}
                          </div>
                          <div>
                            <p className="font-black text-white uppercase">{pool.name}</p>
                            <p className="text-[9px] text-gray-500 font-bold uppercase">{pool.type}</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 font-bold text-gray-400 uppercase tracking-tighter">{pool.asset}</td>
                      <td className="p-4">
                        <p className="text-white font-black">{pool.share}</p>
                        <p className="text-[9px] text-cyber-blue font-bold uppercase">{pool.fundingType}</p>
                      </td>
                      <td className="p-4">
                         <span className={`px-2 py-0.5 rounded text-[8px] font-black uppercase border ${
                           pool.status === 'Optimal' || pool.status === 'High Depth' ? 'border-green-500/30 text-green-500 bg-green-500/5' : 'border-cyber-blue/30 text-cyber-blue bg-cyber-blue/5'
                         }`}>{pool.status}</span>
                      </td>
                      <td className="p-4 text-right">
                        <button className="p-2 text-gray-600 group-hover:text-cyber-blue transition-colors">
                          <ArrowUpRight size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="glass border border-cyber-border rounded-xl p-6 space-y-6">
            <div className="flex items-center gap-2 text-cyber-blue">
              <Globe size={16} />
              <h3 className="text-[11px] font-black uppercase tracking-widest">Funding Intelligence</h3>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-cyber-blue/5 border border-cyber-blue/20 rounded-lg">
                <p className="text-[10px] text-gray-500 font-black uppercase mb-1">Estimated BTC Funding (24h)</p>
                <p className="text-xl font-black text-white">~ 942.50 BTC</p>
                <p className="text-[9px] text-cyber-blue font-bold uppercase mt-2">Available via Bridge Liquidity</p>
              </div>
              <div className="p-4 bg-cyber-orange/5 border border-cyber-orange/20 rounded-lg">
                <p className="text-[10px] text-gray-500 font-black uppercase mb-1">Current Flash Loan Depth</p>
                <p className="text-xl font-black text-white">$ 1.2B USDC</p>
                <p className="text-[9px] text-cyber-orange font-bold uppercase mt-2">Aggregated from Aave & Uniswap</p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-black border border-cyber-border rounded-xl border-dashed">
             <div className="flex items-center gap-2 text-cyber-blue mb-2">
               <Info size={16} />
               <h4 className="text-[10px] font-black uppercase tracking-widest text-white">Strategic Funding Note</h4>
             </div>
             <p className="text-[10px] text-gray-400 leading-relaxed italic">
               "For Zero-Cost MEV trades, use the WBTC Liquidity Pools to secure flash loans. If executing cross-chain arbitrage, bridge funding can be identified in the Mining Pool index to ensure block-level finality."
             </p>
          </div>
          
          <button className="w-full py-4 bg-cyber-blue text-cyber-charcoal rounded font-black text-[11px] uppercase tracking-[0.2em] hover:bg-cyan-400 transition-all glow-blue">
            Initialize Funding Request
          </button>
        </div>
      </div>
    </div>
  );
};
