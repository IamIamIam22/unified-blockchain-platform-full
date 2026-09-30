import React, { useState } from 'react';
import { LeftPanel } from '../components/Navigation/LeftPanel';
import { RightPanel } from '../components/AI/RightPanel';
import { NexusDashboard } from '../modules/NexusDashboard';
import { MEVCatalog } from '../modules/MEVCatalog';
import { WalletCenter } from '../modules/WalletCenter';
import { FeatureStore } from '../modules/FeatureStore';
import { ContractWizard } from '../modules/ContractWizard';
import { ImportRecovery } from '../modules/ImportRecovery';
import { SecurityCenter } from '../modules/SecurityCenter';
import { TestingLab } from '../modules/TestingLab';
import { DeploymentCenter } from '../modules/DeploymentCenter';
import { BlockchainIntel } from '../modules/BlockchainIntel';
import { ComplianceCenter } from '../modules/ComplianceCenter';
import { SystemMonitor } from '../modules/SystemMonitor';
import { AlchemyCenter } from '../modules/AlchemyCenter';
import { BitcoinGateway } from '../modules/BitcoinGateway';
import { SmartWalletHub } from '../modules/SmartWalletHub';
import { MEVExecutor } from '../modules/MEVExecutor';
import { FundingFinder } from '../modules/FundingFinder';

export const MainLayout: React.FC = () => {
  const [activeModule, setActiveModule] = useState('nexus');

  const renderWorkspace = () => {
    switch (activeModule) {
      case 'nexus':
        return <NexusDashboard />;
      case 'monitor':
        return <SystemMonitor />;
      case 'funding':
        return <FundingFinder />;
      case 'alchemy':
        return <AlchemyCenter />;
      case 'btc-gateway':
        return <BitcoinGateway />;
      case 'smart-wallet':
        return <SmartWalletHub />;
      case 'mev-bots':
        return <MEVExecutor />;
      case 'mev':
        return <MEVCatalog />;
      case 'wallet':
        return <WalletCenter />;
      case 'store':
        return <FeatureStore />;
      case 'wizard':
        return <ContractWizard />;
      case 'import':
        return <ImportRecovery />;
      case 'security':
        return <SecurityCenter />;
      case 'lab':
        return <TestingLab />;
      case 'deploy':
        return <DeploymentCenter />;
      case 'intel':
        return <BlockchainIntel />;
      case 'compliance':
        return <ComplianceCenter />;
      default:
        return (
          <div className="flex flex-col items-center justify-center h-full text-cyber-blue opacity-50">
            <h2 className="text-2xl font-bold tracking-widest uppercase">Select a Module</h2>
            <p className="mt-2 text-sm">Waiting for command input...</p>
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen w-full bg-cyber-charcoal text-white overflow-hidden font-cyber">
      {/* Left Navigation Panel */}
      <LeftPanel activeModule={activeModule} onModuleSelect={setActiveModule} />

      {/* Main Workspace */}
      <main className="flex-1 relative overflow-auto border-x border-cyber-border bg-gradient-to-b from-cyber-charcoal to-black">
        <div className="p-6">
          {renderWorkspace()}
        </div>
      </main>

      {/* Right AI Assistant Panel */}
      <RightPanel activeModule={activeModule} />
    </div>
  );
};
