import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, FileCheck, CheckCircle, Info } from 'lucide-react';

export default function QualitySection() {
  const tableData = [
    { sr: '1', param: 'Appearance', uom: '—', spec: 'Faint yellow solution', result: 'Faint yellow solution' },
    { sr: '2', param: 'pH', uom: '—', spec: '3.10 ± 0.05', result: '3.13' },
    { sr: '3', param: 'TSS', uom: '°Brix', spec: '10.5 ± 0.02 (20°C)', result: '10.7' },
    { sr: '4', param: 'Acidity', uom: '%', spec: '0.60 ± 0.05', result: '0.61' },
    { sr: '5', param: 'Fill Volume', uom: 'ml', spec: '250–255', result: '250' },
    { sr: '6', param: 'Gas Volume', uom: 'Kg/cm²', spec: '3.0 ± 0.01', result: '3.0' },
    { sr: '7', param: 'Taste', uom: '—', spec: 'Bitter & sweetener', result: 'Bitter & sweetener' },
    { sr: '8', param: 'Total Aerobic Count (37°C)', uom: 'cfu/ml', spec: '< 15.00', result: '07' },
    { sr: '9', param: 'Total Aerobic Count (22°C)', uom: 'cfu/ml', spec: '< 50.00', result: '09' },
    { sr: '10', param: 'Yeast & Moulds', uom: 'cfu/ml', spec: '< 2.00', result: 'Absent' },
    { sr: '11', param: 'Coliforms', uom: 'cfu/ml', spec: '0.00', result: 'Absent' },
    { sr: '12', param: 'E. Coli', uom: 'cfu/ml', spec: '0.00', result: 'Absent' },
  ];

  return (
    <section id="quality" className="py-24 bg-[#121214] border-t border-[#232326] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full glass-card border border-[#5FBF3F]/30 mb-4"
          >
            <ShieldCheck className="w-4 h-4 text-[#7ED957]" />
            <span className="text-xs uppercase tracking-widest font-bold text-[#7ED957]">
              Quality Assurance
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight"
          >
            Certificate of <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#E2E8F0] via-[#C9CDD3] to-[#8A8D93]">Analysis</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base text-[#A0A0A5] font-light"
          >
            Rigorous independent laboratory verification reflecting our adherence to strict purity, pH, micro-biological, and physical standards.
          </motion.p>
        </div>

        {/* Certificate Table Container */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-3xl border border-[#232326] p-4 sm:p-8 shadow-2xl relative overflow-hidden"
        >
          {/* Table Header Info Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 mb-6 border-b border-[#232326] gap-4">
            <div className="flex items-center space-x-3">
              <div className="p-3 rounded-xl bg-[#0B0B0D] border border-[#232326]">
                <FileCheck className="w-6 h-6 text-[#7ED957]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">
                  Official Batch Testing Report
                </h3>
                <p className="text-xs text-[#A0A0A5]">
                  Method: Standard Laboratory Analysis & Microbiological Testing
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-[#0B0B0D] border border-[#232326] text-xs text-[#7ED957] font-semibold">
              <CheckCircle className="w-4 h-4" />
              <span>100% Passed Specification</span>
            </div>
          </div>

          {/* Horizontally Scrollable Table Container */}
          <div className="overflow-x-auto rounded-2xl border border-[#232326]">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-gradient-to-r from-[#1A1A1D] via-[#232326] to-[#1A1A1D] text-[#C9CDD3] text-xs uppercase tracking-wider border-b border-[#232326]">
                  <th className="py-4 px-4 font-bold text-center w-16">Sr. No.</th>
                  <th className="py-4 px-6 font-bold">Parameter</th>
                  <th className="py-4 px-4 font-bold">UOM</th>
                  <th className="py-4 px-6 font-bold">Required Specification</th>
                  <th className="py-4 px-6 font-bold text-[#7ED957]">Testing Result</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#232326] text-sm">
                {tableData.map((row, idx) => {
                  const isEven = idx % 2 === 0;
                  return (
                    <tr
                      key={row.sr}
                      className={`transition-colors hover:bg-[#232326]/60 ${
                        isEven ? 'bg-[#0B0B0D]' : 'bg-[#121214]'
                      }`}
                    >
                      <td className="py-3.5 px-4 font-bold text-center text-[#A0A0A5]">
                        {row.sr}
                      </td>
                      <td className="py-3.5 px-6 font-semibold text-white">
                        {row.param}
                      </td>
                      <td className="py-3.5 px-4 text-[#A0A0A5] font-mono text-xs">
                        {row.uom}
                      </td>
                      <td className="py-3.5 px-6 text-[#A0A0A5] font-mono text-xs">
                        {row.spec}
                      </td>
                      <td className="py-3.5 px-6 font-bold text-white font-mono text-xs flex items-center space-x-2">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#7ED957]"></span>
                        <span>{row.result}</span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Footnote */}
          <div className="mt-6 pt-4 border-t border-[#232326] flex items-center justify-between text-xs text-[#A0A0A5]">
            <div className="flex items-center space-x-2">
              <Info className="w-4 h-4 text-[#C9CDD3] flex-shrink-0" />
              <span>Results based on internal quality testing. Specifications may vary by batch.</span>
            </div>
            <span className="hidden sm:block text-[11px] font-mono text-[#A0A0A5]">
              Doc ID: VNG-QC-2026
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
