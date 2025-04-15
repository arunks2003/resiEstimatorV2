import React, { useState } from "react";
import { motion } from "framer-motion";

export default function GanttChart() {
    const [phases] = useState([
        { name: 'Home Design & Approval', days: 45, cost: 75000 },
        { name: 'Excavation', days: 30, cost: 45000 },
        { name: 'Footing & Foundation', days: 60, cost: 150000 },
        { name: 'RCC Work - Columns & Slabs', days: 75, cost: 195000 },
        { name: 'Roof Slab', days: 60, cost: 180000 },
        { name: 'Brickwork and Plastering', days: 45, cost: 90000 },
        { name: 'Flooring & Tiling', days: 60, cost: 150000 },
        { name: 'Electric Wiring', days: 30, cost: 120000 },
        { name: 'Water Supply & Plumbing', days: 30, cost: 150000 },
        { name: 'Door', days: 15, cost: 75000 }
    ]);

    const totalDays = phases.reduce((sum, p) => sum + p.days, 0);
    const maxDays = Math.ceil(totalDays / 100) * 100; // Round to nearest 100

    return (
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 w-full overflow-x-auto">
            <div className="min-w-[700px]"> {/* Minimum width to prevent squeezing */}
                <h2 className="text-2xl font-bold text-gray-800 mb-1">Construction Timeline</h2>
                <p className="text-gray-600 mb-6 text-sm">
                    <span className="bg-purple-100 px-3 py-1 rounded-full">
                        Total Duration: <strong>{totalDays} Days</strong>
                    </span>
                </p>

                <div className="relative">
                    {/* Fixed Timeline axis */}
                    <div className="flex mb-2 ml-[180px] h-6 relative">
                        <div className="absolute left-0 right-0 top-3 h-px bg-gray-300"></div>
                        {Array.from({ length: maxDays / 50 + 1 }).map((_, i) => {
                            const position = i * 50;
                            return (
                                <div
                                    key={i}
                                    className="absolute"
                                    style={{
                                        left: `calc(${(position / maxDays) * 100}% - 12px)`,
                                        zIndex: 10
                                    }}
                                >
                                    <div className="w-px h-3 bg-gray-400 -ml-px"></div>
                                    <div className="text-xs text-gray-500 mt-1 w-6 text-center">
                                        {position}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="space-y-3">
                        {phases.map((phase, index) => {
                            const width = (phase.days / maxDays) * 100;
                            const left = (phases.slice(0, index).reduce((sum, p) => sum + p.days, 0) / maxDays) * 100;

                            return (
                                <div key={index} className="flex items-center h-10 relative group">
                                    <div className="w-[180px] text-right pr-4 text-sm font-medium text-gray-700">
                                        {phase.name}
                                    </div>

                                    <div className="flex-1 h-full bg-gray-50 rounded-lg relative overflow-hidden border border-gray-200">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{
                                                width: `${width}%`,
                                                left: `${left}%`
                                            }}
                                            transition={{ duration: 0.6, delay: index * 0.1 }}
                                            className="absolute top-0 h-full bg-gradient-to-r from-purple-400 to-purple-600 rounded-lg z-0"
                                        >
                                            {/* Visible Label */}
                                            <div className="absolute right-2 top-1/2 -translate-y-1/2">
                                                <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium text-purple-800 shadow-sm border border-purple-200 opacity-0 group-hover:opacity-100 transition-opacity">
                                                    {phase.days} Days | ₹{phase.cost.toLocaleString("en-IN")}
                                                </div>
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="mt-8 pt-4 border-t border-gray-200">
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                        <span>Start</span>
                        <span>Mid Project (~{Math.round(totalDays / 2)} days)</span>
                        <span>Completion ({totalDays} days)</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden relative">
                        <div
                            className="h-full bg-gradient-to-r from-purple-300 to-purple-500 absolute"
                            style={{ width: '100%' }}
                        ></div>
                        <div className="absolute left-1/2 h-full w-px bg-purple-700"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}