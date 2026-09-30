import React from 'react';
import { Bot, Sparkles, Search, Bug, ChevronRight } from 'lucide-react';

interface RightPanelProps {
  activeModule: string;
}

export const RightPanel: React.FC<RightPanelProps> = ({ activeModule }) => {
  const getContextualAdvice = () => {
    switch (activeModule) {
      case 'nexus':
        return "I'm monitoring the global mempool. Network load is currently nominal, making it a good time for complex deployments.";
      case 'mev':
        return "Multiple arbitrage loops detected on Uniswap V3. I recommend using the zero-cost logic to maximize margin.";
      case 'wallet':
        return "Ensure your hardware wallet is connected for transactions exceeding 10 ETH. I've prepared a gas-optimized route.";
      case 'wizard':
        return "I've drafted a security-first ERC-20 template. Remember to include the emergency pause feature I suggested.";
      case 'lab':
        return "Running sandbox simulations on a local fork. No real funds will be used for these stress tests.";
      case 'security':
        return "I've identified potential reentrancy points in your imported contract. Use 'Apply Patches' to fix them automatically.";
      case 'deploy':
        return "Target network 'Polygon' shows optimal gas efficiency for this contract size. Finalizing pre-flight checks.";
      case 'monitor':
        return "Live stream active. I'll alert you immediately if any unauthorized transfer attempts are detected.";
      case 'intel':
        return "Tracking 14 networks for protocol upgrades. The 'Pectra' upgrade on Ethereum is the next high-impact event.";
      case 'funding':
        return "I've identified high-depth liquidity in the Uniswap V3 WBTC/ETH pool. This is the optimal source for flash-loan backing currently.";
      case 'compliance':
        return "Fiscal year reports are being generated. All arbitrage yields are being tracked with their respective cost-basis.";
      default:
        return "I can translate technical smart contract fields or market data into plain English for you. Just highlight any section.";
    }
  };

  const getRecommender = () => {
    if (activeModule === 'mev') {
      return {
        label: "Arbitrage Opt.",
        text: "Suggesting a 15% efficiency gain by rerouting through Aave V3 flash loans."
      };
    }
    if (activeModule === 'security' || activeModule === 'import') {
      return {
        label: "Security Patch",
        text: "Detected legacy compiler version. Recommend updating to Solidity 0.8.20+ for native overflow checks."
      };
    }
    if (activeModule === 'funding') {
      return {
        label: "Liquidity Opt.",
        text: "Foundry USA has increased block-reward share. Recommend monitoring for potential bridge finality speed increases."
      };
    }
    return {
      label: "System Opt.",
      text: "Current gas prices are low. Recommended window for large-scale contract migrations."
    };
  };

  const recommendation = getRecommender();

  return (
    <aside className="w-[320px] flex flex-col glass border-l border-cyber-border">
      <div className="p-6 border-b border-cyber-border bg-cyber-blue/5">
        <div className="flex items-center gap-3">
          <Bot className="text-cyber-blue animate-pulse" size={24} />
          <div>
            <h2 className="text-sm font-bold tracking-widest uppercase">AI Assistant</h2>
            <p className="text-[10px] text-cyber-blue font-bold uppercase">Ready for Analysis</p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {/* Explain Mode */}
        <section className="space-y-3">
          <div className="flex items-center gap-2 text-cyber-blue">
            <Sparkles size={16} />
            <h3 className="text-[10px] font-black uppercase tracking-widest">Explain Mode</h3>
          </div>
          <div className="p-4 bg-cyber-gray rounded border border-cyber-border text-[12px] leading-relaxed text-gray-300 italic">
            "{getContextualAdvice()}"
          </div>
        </section>

        {/* Discovery Helper */}
        <section className="space-y-3">
          <div className="flex items-center gap-2 text-cyber-blue">
            <Search size={16} />
            <h3 className="text-[10px] font-black uppercase tracking-widest">Discovery Helper</h3>
          </div>
          <div className="relative">
            <input 
              type="text" 
              placeholder="Find network data, wallets..."
              className="w-full bg-cyber-charcoal border border-cyber-border rounded px-3 py-2 text-[11px] focus:outline-none focus:border-cyber-blue transition-colors text-white"
            />
            <Search size={14} className="absolute right-3 top-2.5 text-gray-600" />
          </div>
        </section>

        {/* Strategy Recommender */}
        <section className="space-y-3">
          <div className="flex items-center gap-2 text-cyber-orange">
            <Sparkles size={16} />
            <h3 className="text-[10px] font-black uppercase tracking-widest">Strategy Recommender</h3>
          </div>
          <div className="space-y-2">
            <div 
              onClick={() => alert(`Strategy Detail: ${recommendation.text}`)}
              className="p-3 bg-cyber-gray/50 rounded border border-cyber-border group cursor-pointer hover:border-cyber-orange transition-all"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-bold text-cyber-orange uppercase">{recommendation.label}</span>
                <ChevronRight size={12} className="text-gray-600 group-hover:text-cyber-orange" />
              </div>
              <p className="text-[11px] text-gray-400">{recommendation.text}</p>
            </div>
          </div>
        </section>

        {/* Troubleshooter */}
        <section className="space-y-3">
          <div className="flex items-center gap-2 text-red-500">
            <Bug size={16} />
            <h3 className="text-[10px] font-black uppercase tracking-widest">Troubleshooter</h3>
          </div>
          <div className="p-4 bg-red-500/5 rounded border border-red-500/20 text-[11px] text-red-400">
            No active simulation failures detected in the current workspace.
          </div>
        </section>
      </div>

      <div className="p-4 border-t border-cyber-border">
        <button 
          onClick={() => alert('AI Guide: Initializing workspace analysis... Environment status: STABLE. Ready for contract generation.')}
          className="w-full py-3 bg-cyber-blue hover:bg-cyan-400 text-cyber-charcoal font-black text-[11px] uppercase tracking-[0.2em] rounded transition-all glow-blue"
        >
          Consult AI Guide
        </button>
      </div>
    </aside>
  );
};
