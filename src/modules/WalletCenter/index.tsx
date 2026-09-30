import React, { useState } from 'react';
import { ArrowRightLeft, ShieldCheck, History, ExternalLink, ArrowDownToLine } from 'lucide-react';
import { useAccount, useBalance, useSendTransaction, useWaitForTransactionReceipt } from 'wagmi';
import { parseEther, formatEther } from 'viem';

export const WalletCenter: React.FC = () => {
  const { address, isConnected } = useAccount();
  const { data: ethBalance } = useBalance({ address });
  const [withdrawAmount, setWithdrawAmount] = useState('0.01');
  const [destinationAddress, setDestinationAddress] = useState('');

  const { data: hash, sendTransaction, isPending } = useSendTransaction();

  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash,
  });

  const handleWithdraw = () => {
    if (!destinationAddress || !withdrawAmount) return;
    sendTransaction({
      to: destinationAddress as `0x${string}`,
      value: parseEther(withdrawAmount),
    });
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h2 className="text-2xl font-black uppercase tracking-tighter">Wallet Center</h2>
        <p className="text-[10px] text-cyber-blue font-bold uppercase tracking-widest">Multi-chain asset & profit management</p>
      </div>

      <div className="grid grid-cols-3 gap-8">
        {/* Profit Overview */}
        <div className="col-span-1 space-y-6">
          <div className="p-6 bg-cyber-blue/5 border border-cyber-blue/20 rounded-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <ArrowDownToLine size={80} className="text-cyber-blue" />
            </div>
            <p className="text-[10px] text-gray-500 font-bold uppercase mb-2">Connected Wallet Balance</p>
            <p className="text-3xl font-black text-cyber-blue tracking-tight">
              {ethBalance ? `${parseFloat(formatEther(ethBalance.value)).toFixed(4)} ${ethBalance.symbol}` : '0.0000'}
            </p>
            <p className="text-[10px] text-cyber-blue font-bold uppercase mt-2 italic">
              {isConnected ? 'Real-time blockchain data active' : 'Connect wallet to view assets'}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-[11px] font-black uppercase tracking-widest text-gray-400">Security Status</h3>
            <div className="flex items-center gap-3 p-4 bg-cyber-gray rounded border border-cyber-border">
              <ShieldCheck size={20} className="text-cyber-blue" />
              <div>
                <p className="text-[11px] font-bold uppercase">Non-Custodial</p>
                <p className="text-[10px] text-gray-500">You retain 100% control of your private keys.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Withdrawal Form */}
        <div className="col-span-2 glass border border-cyber-border rounded-lg overflow-hidden flex flex-col">
          <div className="p-4 border-b border-cyber-border bg-white/5 flex items-center justify-between">
            <div className="flex items-center gap-2 text-cyber-blue">
              <ArrowRightLeft size={16} />
              <h3 className="text-[11px] font-black uppercase tracking-widest">Live Transaction Portal</h3>
            </div>
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Mainnet Gateway</span>
          </div>
          
          <div className="p-8 space-y-6 flex-1">
            {!isConnected ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                <ArrowRightLeft size={48} className="text-cyber-blue/20" />
                <p className="text-xs font-black uppercase tracking-widest text-gray-500">Wallet Connection Required</p>
                <p className="text-[10px] text-gray-600 max-w-xs uppercase font-bold">Please connect your wallet via the navigation panel to authorize real-world transactions.</p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Amount to Send (ETH)</label>
                    <input 
                      type="text" 
                      value={withdrawAmount}
                      onChange={(e) => setWithdrawAmount(e.target.value)}
                      className="w-full bg-cyber-charcoal border border-cyber-border rounded px-4 py-3 text-lg font-black focus:outline-none focus:border-cyber-blue text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Target Network</label>
                    <div className="w-full bg-cyber-gray border border-cyber-border rounded px-4 py-3 text-sm font-bold text-cyber-blue uppercase tracking-widest">
                      Ethereum Mainnet
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Destination Wallet Address</label>
                  <input 
                    type="text" 
                    placeholder="0x..."
                    value={destinationAddress}
                    onChange={(e) => setDestinationAddress(e.target.value)}
                    className="w-full bg-cyber-charcoal border border-cyber-border rounded px-4 py-3 text-sm font-mono focus:outline-none focus:border-cyber-blue text-white"
                  />
                </div>

                <div className="pt-4">
                  <button 
                    onClick={handleWithdraw}
                    disabled={isPending || isConfirming || !destinationAddress}
                    className={`w-full py-4 rounded font-black text-[12px] uppercase tracking-[0.3em] transition-all flex items-center justify-center gap-3 ${
                      isPending || isConfirming || !destinationAddress 
                      ? 'bg-gray-800 text-gray-500 cursor-not-allowed' 
                      : 'bg-cyber-blue hover:bg-cyan-400 text-cyber-charcoal glow-blue'
                    }`}
                  >
                    {isPending ? (
                      <>
                        <div className="w-4 h-4 border-2 border-cyber-charcoal border-t-transparent rounded-full animate-spin" />
                        Awaiting Wallet Signature...
                      </>
                    ) : isConfirming ? (
                      <>
                        <div className="w-4 h-4 border-2 border-cyber-charcoal border-t-transparent rounded-full animate-spin" />
                        Confirming on Blockchain...
                      </>
                    ) : isConfirmed ? (
                      'Transaction Confirmed'
                    ) : (
                      'Sign & Send Transaction'
                    )}
                  </button>
                </div>

                {hash && (
                  <div className="p-4 bg-cyber-blue/10 border border-cyber-blue/20 rounded text-center animate-in fade-in">
                    <p className="text-[11px] font-bold text-cyber-blue uppercase tracking-widest">Live Transaction Hash</p>
                    <a 
                      href={`https://etherscan.io/tx/${hash}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[10px] text-gray-400 mt-1 font-mono hover:text-cyber-blue transition-colors flex items-center justify-center gap-2"
                    >
                      {hash} <ExternalLink size={10} />
                    </a>
                  </div>
                )}
              </>
            )}
          </div>

          <div className="p-4 border-t border-cyber-border bg-black/50">
            <div className="flex items-center justify-between text-[10px] font-bold uppercase text-gray-500">
              <div className="flex items-center gap-2">
                <History size={14} />
                <span>On-Chain History</span>
              </div>
              <button className="flex items-center gap-1 hover:text-cyber-blue transition-colors">
                Open Explorer <ExternalLink size={12} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
