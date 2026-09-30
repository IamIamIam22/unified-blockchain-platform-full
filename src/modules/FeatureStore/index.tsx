import React, { useState } from 'react';
import { ShoppingBag, CreditCard, Utensils, ShoppingCart, Car, ArrowRight, ShieldCheck, Gift } from 'lucide-react';

export const FeatureStore: React.FC = () => {
  const [userBalance, setUserBalance] = useState('1,245.50');
  const [isProcessing, setIsProcessing] = useState(false);
  const [purchaseSuccess, setPurchaseSuccess] = useState<string | null>(null);

  const giftCards = [
    { id: 'visa', name: 'Visa Prepaid Card', icon: <CreditCard size={24} />, color: 'bg-blue-500', amounts: [50, 100, 200, 500] },
    { id: 'amazon', name: 'Amazon Gift Card', icon: <ShoppingCart size={24} />, color: 'bg-orange-500', amounts: [25, 50, 100, 250] },
    { id: 'uber', name: 'Uber Credits', icon: <Car size={24} />, color: 'bg-black', amounts: [15, 30, 50, 100] },
    { id: 'grubhub', name: 'Grubhub / Seamless', icon: <Utensils size={24} />, color: 'bg-red-500', amounts: [20, 40, 60, 100] },
  ];

  const handlePurchase = (name: string, amount: number) => {
    const currentBalance = parseFloat(userBalance.replace(',', ''));
    if (currentBalance < amount) return;

    setIsProcessing(true);
    setTimeout(() => {
      const newBalance = (currentBalance - amount).toLocaleString(undefined, { minimumFractionDigits: 2 });
      setUserBalance(newBalance);
      setIsProcessing(false);
      setPurchaseSuccess(`${name} ($${amount})`);
      setTimeout(() => setPurchaseSuccess(null), 5000);
    }, 1500);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-black uppercase tracking-tighter">Feature Store</h2>
          <p className="text-[10px] text-cyber-blue font-bold uppercase tracking-widest">Liquidate profits for real-world value</p>
        </div>
        <div className="p-4 bg-cyber-blue/10 border border-cyber-blue/20 rounded-lg text-right">
          <p className="text-[10px] text-gray-500 font-bold uppercase mb-1">Available Profit</p>
          <p className="text-xl font-black text-cyber-blue">$ {userBalance}</p>
        </div>
      </div>

      {purchaseSuccess && (
        <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center justify-between animate-in slide-in-from-top">
          <div className="flex items-center gap-3">
            <Gift className="text-green-500" />
            <p className="text-[11px] font-bold text-green-500 uppercase tracking-widest">
              Successfully Redeemed: {purchaseSuccess}
            </p>
          </div>
          <p className="text-[10px] text-gray-500 italic">Code sent to secure inbox.</p>
        </div>
      )}

      <div className="grid grid-cols-2 gap-6">
        {giftCards.map((card) => (
          <div key={card.id} className="glass border border-cyber-border rounded-xl overflow-hidden group hover:border-cyber-blue transition-all">
            <div className={`p-6 flex items-center gap-4 ${card.color}/10 border-b border-cyber-border`}>
              <div className={`w-12 h-12 ${card.color} rounded-lg flex items-center justify-center text-white glow-blue`}>
                {card.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-black uppercase tracking-widest">{card.name}</h3>
                <p className="text-[10px] text-gray-500 font-bold">Instant Digital Delivery</p>
              </div>
              <ShoppingBag size={20} className="text-gray-600 group-hover:text-cyber-blue" />
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-4 gap-2 mb-6">
                {card.amounts.map((amt) => (
                  <button
                    key={amt}
                    disabled={parseFloat(userBalance.replace(',', '')) < amt || isProcessing}
                    onClick={() => handlePurchase(card.name, amt)}
                    className="py-2 bg-cyber-gray border border-cyber-border rounded text-[11px] font-black hover:bg-cyber-blue hover:text-cyber-charcoal disabled:opacity-30 disabled:hover:bg-cyber-gray disabled:hover:text-gray-400 transition-all"
                  >
                    ${amt}
                  </button>
                ))}
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-cyber-border/50">
                <div className="flex items-center gap-2 text-[10px] text-gray-500 font-bold uppercase">
                  <ShieldCheck size={14} className="text-cyber-blue" />
                  <span>Secure Checkout</span>
                </div>
                <button className="text-[10px] font-black text-cyber-blue uppercase flex items-center gap-1 hover:underline">
                  View Details <ArrowRight size={12} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <section className="p-8 bg-cyber-gray/30 border border-cyber-border rounded-xl border-dashed">
        <div className="flex flex-col items-center text-center max-w-md mx-auto space-y-4">
          <div className="w-16 h-16 bg-cyber-blue/5 rounded-full flex items-center justify-center text-cyber-blue/20">
            <Gift size={32} />
          </div>
          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400">Request Custom Redemption</h3>
          <p className="text-[11px] text-gray-500 leading-relaxed italic">
            "Don't see what you need? Our AI assistant can facilitate custom redemptions for local services and specialty merchants using your profit balance."
          </p>
          <button className="text-[10px] font-black text-cyber-blue uppercase border-b border-cyber-blue/30 hover:border-cyber-blue transition-all">
            Open Discovery Helper
          </button>
        </div>
      </section>
    </div>
  );
};
