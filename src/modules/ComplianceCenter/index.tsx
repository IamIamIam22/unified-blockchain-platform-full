import React from 'react';
import { FileText, ShieldCheck, Download, History, Scale, AlertCircle } from 'lucide-react';

export const ComplianceCenter: React.FC = () => {
  const reports = [
    { title: 'Tax Yield Summary 2026', date: 'Oct 01, 2026', type: 'Financial', status: 'Ready' },
    { title: 'Anti-Money Laundering Check', date: 'Sep 24, 2026', type: 'Security', status: 'Verified' },
    { title: 'Audit Trail: Project Alpha', date: 'Sep 15, 2026', type: 'Technical', status: 'Archive' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500 max-w-5xl">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-black uppercase tracking-tighter text-white">Compliance Center</h2>
          <p className="text-[10px] text-cyber-blue font-bold uppercase tracking-widest">Audit Trails & Automated Regulatory Reporting</p>
        </div>
        <button className="px-6 py-2 bg-cyber-blue text-cyber-charcoal rounded text-[10px] font-black uppercase tracking-widest hover:bg-cyan-400 transition-all glow-blue flex items-center gap-2">
          <FileText size={14} /> Generate New Audit
        </button>
      </div>

      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2 space-y-6">
          <div className="glass border border-cyber-border rounded-xl overflow-hidden">
            <div className="p-4 border-b border-cyber-border bg-white/5 flex items-center gap-2 text-cyber-blue">
              <History size={16} />
              <h3 className="text-[11px] font-black uppercase tracking-widest">Compliance Archive</h3>
            </div>
            <div className="p-0">
              {reports.map((report, i) => (
                <div key={i} className="p-4 border-b border-cyber-border/50 flex items-center justify-between hover:bg-white/5 transition-all group">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-cyber-gray rounded">
                      <FileText size={18} className="text-gray-400 group-hover:text-cyber-blue transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-[11px] font-black uppercase tracking-tight text-white">{report.title}</h4>
                      <p className="text-[9px] text-gray-500 font-bold uppercase">{report.date} — {report.type}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`px-2 py-0.5 rounded text-[8px] font-black uppercase border ${
                      report.status === 'Verified' ? 'border-green-500/30 text-green-500' : 'border-gray-500/30 text-gray-500'
                    }`}>{report.status}</span>
                    <button className="p-2 hover:text-cyber-blue transition-colors">
                      <Download size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 bg-cyber-blue/5 border border-cyber-border rounded-xl flex items-start gap-4">
            <Scale size={24} className="text-cyber-blue shrink-0" />
            <div>
              <h4 className="text-[11px] font-black uppercase tracking-widest text-white">Automated Tax Basis Engine</h4>
              <p className="text-[10px] text-gray-400 leading-relaxed mt-1 italic">
                "Our engine automatically tracks cost-basis for all flash-loan swaps and arbitrage yields across 14 networks, simplifying your fiscal year reporting."
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="glass border border-cyber-border rounded-xl p-6 space-y-4">
            <h3 className="text-[11px] font-black uppercase tracking-widest text-cyber-blue">Regulatory Radar</h3>
            <div className="space-y-3">
              <div className="p-4 bg-red-500/5 border border-red-500/20 rounded-lg flex items-start gap-3">
                <AlertCircle className="text-red-500 shrink-0" size={16} />
                <div>
                  <p className="text-[10px] font-black text-red-500 uppercase">MiCA Update</p>
                  <p className="text-[9px] text-gray-500 mt-1 uppercase font-bold">New reporting requirements for EU-based liquidity pools starting Jan 2027.</p>
                </div>
              </div>
              <div className="p-4 bg-green-500/5 border border-green-500/20 rounded-lg flex items-start gap-3">
                <ShieldCheck className="text-green-500 shrink-0" size={16} />
                <div>
                  <p className="text-[10px] font-black text-green-500 uppercase">SEC Safe Harbor</p>
                  <p className="text-[9px] text-gray-500 mt-1 uppercase font-bold">Project Alpha remains within current compliance boundaries.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 bg-black border border-cyber-border rounded-xl border-dashed">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-500">Legal Intelligence</h4>
            <p className="text-[10px] text-gray-400 mt-2 leading-relaxed">
              "AI analyzes latest regulatory filings from SEC, FCA, and ESMA to ensure your strategies remain within permissible bounds."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
