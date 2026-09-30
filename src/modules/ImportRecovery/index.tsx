import React, { useState } from 'react';
import { Upload, Search, FileCode, AlertCircle, CheckCircle, ArrowRight, Activity } from 'lucide-react';

export const ImportRecovery: React.FC = () => {
  const [inputType, setInputType] = useState<'file' | 'address'>('address');
  const [inputValue, setInputValue] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [report, setReport] = useState<boolean>(false);

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setReport(true);
    }, 2500);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h2 className="text-2xl font-black uppercase tracking-tighter text-white">Import & Recovery Center</h2>
        <p className="text-[10px] text-cyber-blue font-bold uppercase tracking-widest">Analyze, Repair, and Complete Existing Projects</p>
      </div>

      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-1 space-y-6">
          <div className="glass border border-cyber-border rounded-xl p-6 space-y-6">
            <div className="flex bg-cyber-charcoal p-1 rounded border border-cyber-border">
              <button 
                onClick={() => setInputType('address')}
                className={`flex-1 py-2 text-[10px] font-black uppercase tracking-widest transition-all ${inputType === 'address' ? 'bg-cyber-blue text-cyber-charcoal' : 'text-gray-500 hover:text-white'}`}
              >
                Contract Address
              </button>
              <button 
                onClick={() => setInputType('file')}
                className={`flex-1 py-2 text-[10px] font-black uppercase tracking-widest transition-all ${inputType === 'file' ? 'bg-cyber-blue text-cyber-charcoal' : 'text-gray-500 hover:text-white'}`}
              >
                Source File
              </button>
            </div>

            <div className="space-y-4">
              {inputType === 'address' ? (
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Network Address</label>
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="0x..."
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      className="w-full bg-cyber-charcoal border border-cyber-border rounded px-4 py-3 text-sm font-mono focus:border-cyber-blue outline-none"
                    />
                    <Search className="absolute right-4 top-3.5 text-gray-600" size={16} />
                  </div>
                </div>
              ) : (
                <div className="border-2 border-dashed border-cyber-border rounded-xl p-8 flex flex-col items-center justify-center text-center space-y-3 hover:border-cyber-blue transition-colors cursor-pointer group">
                  <Upload className="text-gray-600 group-hover:text-cyber-blue" size={32} />
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 group-hover:text-white">Drag & drop source or ZIP</p>
                </div>
              )}

              <button 
                onClick={handleAnalyze}
                disabled={isAnalyzing || (!inputValue && inputType === 'address')}
                className="w-full py-4 bg-cyber-blue text-cyber-charcoal rounded text-[11px] font-black uppercase tracking-[0.2em] hover:bg-cyan-400 disabled:opacity-30 disabled:hover:bg-cyber-blue transition-all glow-blue flex items-center justify-center gap-2"
              >
                {isAnalyzing ? (
                  <>
                    <div className="w-4 h-4 border-2 border-cyber-charcoal border-t-transparent rounded-full animate-spin" />
                    Analyzing Architecture...
                  </>
                ) : 'Run Universal Import'}
              </button>
            </div>
          </div>

          <div className="p-4 bg-cyber-orange/5 border border-cyber-orange/20 rounded flex items-start gap-3">
            <AlertCircle className="text-cyber-orange shrink-0" size={18} />
            <p className="text-[10px] text-gray-400 leading-relaxed italic">
              "Our AI will identify the framework, detect missing logic, and generate optimized implementations to fill any gaps in legacy projects."
            </p>
          </div>
        </div>

        <div className="col-span-2 space-y-6">
          {report ? (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
              <div className="glass border border-cyber-border rounded-xl overflow-hidden">
                <div className="p-4 border-b border-cyber-border bg-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-cyber-blue">
                    <Activity size={16} />
                    <h3 className="text-[11px] font-black uppercase tracking-widest">Analysis Report: Alpha Contract</h3>
                  </div>
                  <span className="text-[10px] font-black text-cyber-orange uppercase">3 Vulnerabilities Patched</span>
                </div>
                
                <div className="p-6">
                  <table className="w-full text-[11px]">
                    <thead className="text-gray-500 uppercase tracking-widest">
                      <tr className="border-b border-cyber-border">
                        <th className="pb-3 text-left font-black">Metric</th>
                        <th className="pb-3 text-left font-black">Original State</th>
                        <th className="pb-3 text-left font-black text-cyber-blue">AI-Optimized</th>
                      </tr>
                    </thead>
                    <tbody className="text-white">
                      <tr className="border-b border-cyber-border/50">
                        <td className="py-4 font-bold">Security Protections</td>
                        <td className="py-4 text-red-500">Missing Access Control</td>
                        <td className="py-4 text-cyber-blue font-black italic">Multi-Sig Integrated</td>
                      </tr>
                      <tr className="border-b border-cyber-border/50">
                        <td className="py-4 font-bold">Gas Efficiency</td>
                        <td className="py-4">Standard Routing</td>
                        <td className="py-4 text-cyber-blue font-black italic">15% Reduction</td>
                      </tr>
                      <tr>
                        <td className="py-4 font-bold">Administrative Logic</td>
                        <td className="py-4 text-gray-500">Unfinished</td>
                        <td className="py-4 text-cyber-blue font-black italic">Emergency Pause Added</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-cyber-blue/10 border border-cyber-blue/20 rounded-lg flex items-center justify-between">
                  <div>
                    <p className="text-[10px] text-gray-500 font-bold uppercase">Readiness Score</p>
                    <p className="text-2xl font-black text-cyber-blue">95%</p>
                  </div>
                  <CheckCircle className="text-cyber-blue" size={24} />
                </div>
                <button className="bg-cyber-blue text-cyber-charcoal rounded-lg font-black uppercase text-[11px] tracking-widest flex items-center justify-center gap-2 hover:bg-cyan-400 transition-all">
                  Open In Editor <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ) : (
            <div className="h-full border-2 border-dashed border-cyber-border rounded-xl flex flex-col items-center justify-center text-gray-600 opacity-50">
              <FileCode size={48} className="mb-4" />
              <p className="text-xs font-black uppercase tracking-[0.2em]">Pending Project Analysis</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
