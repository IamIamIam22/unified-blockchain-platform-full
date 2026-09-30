import React from 'react';
import { 
  LayoutDashboard, 
  Zap, 
  Wand2, 
  Upload, 
  ShieldCheck, 
  Beaker, 
  Rocket, 
  Activity, 
  Wallet, 
  Globe, 
  FileText,
  Boxes,
  ShoppingBag,
  Power,
  Monitor,
  Database,
  Bitcoin,
  Smartphone,
  Cpu,
  Download,
  DollarSign
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { useAccount, useConnect, useDisconnect } from 'wagmi';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, active, onClick }) => (
  <button
    onClick={onClick}
    className={cn(
      "w-full flex items-center gap-3 px-4 py-3 text-sm transition-all duration-200 group",
      active 
        ? "bg-cyber-blue/10 text-cyber-blue border-r-2 border-cyber-blue" 
        : "text-gray-400 hover:text-white hover:bg-white/5"
    )}
  >
    <span className={cn(
      "transition-colors",
      active ? "text-cyber-blue" : "group-hover:text-cyber-blue"
    )}>
      {icon}
    </span>
    <span className="font-medium tracking-wide uppercase text-[11px]">{label}</span>
  </button>
);

interface LeftPanelProps {
  activeModule: string;
  onModuleSelect: (id: string) => void;
}

export const LeftPanel: React.FC<LeftPanelProps> = ({ activeModule, onModuleSelect }) => {
  const { address, isConnected } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/unified-blockchain-platform-full.zip';
    link.download = 'unified-blockchain-platform-full.zip';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <aside className="w-[260px] flex flex-col glass border-r border-cyber-border">
      <div className="p-6 flex items-center gap-3 border-b border-cyber-border">
        <div className="w-8 h-8 bg-cyber-blue glow-blue rounded flex items-center justify-center">
          <Boxes size={20} className="text-cyber-charcoal" />
        </div>
        <div>
          <h1 className="text-sm font-black tracking-tighter uppercase italic">Unified</h1>
          <p className="text-[10px] text-cyber-blue font-bold tracking-widest uppercase -mt-1">Ecosystem</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto py-4">
        <div className="px-4 mb-2 text-[10px] font-bold text-gray-500 uppercase tracking-widest">Command Center</div>
        <NavItem 
          icon={<LayoutDashboard size={18} />} 
          label="Nexus Dashboard" 
          active={activeModule === 'nexus'}
          onClick={() => onModuleSelect('nexus')}
        />
        <NavItem 
          icon={<Monitor size={18} />} 
          label="System Monitor" 
          active={activeModule === 'monitor'}
          onClick={() => onModuleSelect('monitor')}
        />
        <NavItem 
          icon={<DollarSign size={18} />} 
          label="Funding Finder" 
          active={activeModule === 'funding'}
          onClick={() => onModuleSelect('funding')}
        />
        <NavItem 
          icon={<Database size={18} />} 
          label="Alchemy Center" 
          active={activeModule === 'alchemy'}
          onClick={() => onModuleSelect('alchemy')}
        />
        <NavItem 
          icon={<Zap size={18} />} 
          label="MEV Catalog" 
          active={activeModule === 'mev'}
          onClick={() => onModuleSelect('mev')}
        />
        <NavItem 
          icon={<Cpu size={18} />} 
          label="MEV Bots (Operational)" 
          active={activeModule === 'mev-bots'}
          onClick={() => onModuleSelect('mev-bots')}
        />
        <NavItem 
          icon={<ShoppingBag size={18} />} 
          label="Feature Store" 
          active={activeModule === 'store'}
          onClick={() => onModuleSelect('store')}
        />
        <NavItem 
          icon={<Wand2 size={18} />} 
          label="Contract Wizard" 
          active={activeModule === 'wizard'}
          onClick={() => onModuleSelect('wizard')}
        />
        
        <div className="px-4 mt-6 mb-2 text-[10px] font-bold text-gray-500 uppercase tracking-widest">Tools</div>
        <NavItem 
          icon={<Bitcoin size={18} />} 
          label="Bitcoin Gateway" 
          active={activeModule === 'btc-gateway'}
          onClick={() => onModuleSelect('btc-gateway')}
        />
        <NavItem 
          icon={<Smartphone size={18} />} 
          label="Smart Wallet Hub" 
          active={activeModule === 'smart-wallet'}
          onClick={() => onModuleSelect('smart-wallet')}
        />
        <NavItem 
          icon={<Upload size={18} />} 
          label="Import & Recovery" 
          active={activeModule === 'import'}
          onClick={() => onModuleSelect('import')}
        />
        <NavItem 
          icon={<ShieldCheck size={18} />} 
          label="Security Center" 
          active={activeModule === 'security'}
          onClick={() => onModuleSelect('security')}
        />
        <NavItem 
          icon={<Beaker size={18} />} 
          label="Testing Lab" 
          active={activeModule === 'lab'}
          onClick={() => onModuleSelect('lab')}
        />
        <NavItem 
          icon={<Rocket size={18} />} 
          label="Deployment" 
          active={activeModule === 'deploy'}
          onClick={() => onModuleSelect('deploy')}
        />
        <NavItem 
          icon={<Activity size={18} />} 
          label="Monitoring" 
          active={activeModule === 'monitor'}
          onClick={() => onModuleSelect('monitor')}
        />

        <div className="px-4 mt-6 mb-2 text-[10px] font-bold text-gray-500 uppercase tracking-widest">Intelligence</div>
        <NavItem 
          icon={<Wallet size={18} />} 
          label="Wallet Center" 
          active={activeModule === 'wallet'}
          onClick={() => onModuleSelect('wallet')}
        />
        <NavItem 
          icon={<Globe size={18} />} 
          label="Blockchain Intel" 
          active={activeModule === 'intel'}
          onClick={() => onModuleSelect('intel')}
        />
        <NavItem 
          icon={<FileText size={18} />} 
          label="Compliance" 
          active={activeModule === 'compliance'}
          onClick={() => onModuleSelect('compliance')}
        />
      </div>

      <div className="p-4 border-t border-cyber-border space-y-3">
        <button 
          onClick={handleDownload}
          className="w-full flex items-center justify-center gap-2 py-2 bg-cyber-gray border border-cyber-border hover:border-cyber-blue text-gray-400 hover:text-white font-black text-[10px] uppercase tracking-widest rounded transition-all"
        >
          <Download size={14} />
          Download Full Source
        </button>

        {isConnected ? (
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between p-3 bg-cyber-blue/10 rounded-lg border border-cyber-blue/30">
              <div className="flex flex-col overflow-hidden">
                <span className="text-[8px] font-black text-cyber-blue uppercase tracking-widest">Connected</span>
                <span className="text-[10px] font-mono text-white truncate w-32">{address}</span>
              </div>
              <button 
                onClick={() => disconnect()}
                className="p-1.5 hover:bg-cyber-blue/20 rounded text-cyber-blue transition-colors"
                title="Disconnect"
              >
                <Power size={14} />
              </button>
            </div>
          </div>
        ) : (
          <button 
            onClick={() => connect({ connector: connectors[0] })}
            className="w-full flex items-center justify-center gap-2 py-3 bg-cyber-blue hover:bg-cyan-400 text-cyber-charcoal font-black text-[11px] uppercase tracking-[0.2em] rounded transition-all glow-blue"
          >
            <Power size={14} />
            Connect Wallet
          </button>
        )}

        <div className="flex items-center gap-3 p-3 bg-cyber-gray rounded-lg border border-cyber-border">
          <div className="w-2 h-2 rounded-full bg-cyber-blue animate-pulse" />
          <span className="text-[10px] font-bold text-cyber-blue uppercase tracking-tighter">System Online</span>
        </div>
      </div>
    </aside>
  );
};
