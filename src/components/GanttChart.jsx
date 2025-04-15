import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function GanttChart({ bhk, area }) {
    const [phases, setPhases] = useState([]);

    useEffect(() => {
        if (bhk && area) {
            const costPerSqFt = 1000;
            const baseCost = area * costPerSqFt;

            const calculatedPhases = [
                { name: 'Home Design & Approval', days: Math.max(15, Math.floor(area * 0.03)), cost: baseCost * 0.05 },
                { name: 'Excavation', days: Math.max(10, Math.floor(area * 0.015)), cost: baseCost * 0.03 },
                { name: 'Footing & Foundation', days: Math.max(20, Math.floor(area * 0.04)), cost: baseCost * 0.1 },
                { name: 'RCC Work - Columns & Slabs', days: Math.max(25, Math.floor(area * 0.05)), cost: baseCost * 0.13 },
                { name: 'Roof Slab', days: Math.max(20, Math.floor(area * 0.04)), cost: baseCost * 0.12 },
                { name: 'Brickwork and Plastering', days: Math.max(15, Math.floor(area * 0.03)), cost: baseCost * 0.06 },
                { name: 'Flooring & Tiling', days: Math.max(20, Math.floor(area * 0.04)), cost: baseCost * 0.1 },
                { name: 'Electric Wiring', days: Math.max(10, Math.floor(area * 0.02)), cost: baseCost * 0.03 },
                { name: 'Water Supply & Plumbing', days: Math.max(10, Math.floor(area * 0.02)), cost: baseCost * 0.08 },
                { name: 'Door', days: Math.max(10, Math.floor(area * 0.02)), cost: baseCost * 0.1 },
            ];

            setPhases(calculatedPhases);
        }
    }, [bhk, area]);

    const totalDays = phases.reduce((sum, p) => sum + p.days, 0);
    const maxDays = Math.ceil(totalDays / 100) * 100;

    return (
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 w-full overflow-x-auto">
            <div className="min-w-[700px]">
                <h2 className="text-2xl font-bold text-gray-800 mb-1">Construction Timeline</h2>
                <p className="text-gray-600 mb-6 text-sm">
                    <span className="bg-purple-100 px-3 py-1 rounded-full">
                        Total Duration: <strong>{totalDays} Days</strong>
                    </span>
                </p>

                <div className="relative">
                    {/* Timeline axis */}
                    <div className="flex mb-2 ml-[180px] h-6 relative">
                        <div className="absolute left-0 right-0 top-3 h-px bg-gray-300"></div>
                        {Array.from({ length: maxDays / 50 + 1 }).map((_, i) => {
                            const position = i * 50;
                            const percentage = (position / maxDays) * 100;
                            const adjustedLeft = Math.max(0, Math.min(percentage, 100));

                            return (
                                <div
                                    key={i}
                                    className="absolute"
                                    style={{
                                        left: `${adjustedLeft}%`,
                                        transform: percentage === 0 ? 'translateX(0)' :
                                            percentage === 100 ? 'translateX(-100%)' :
                                                'translateX(-50%)'
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
                                <div key={index} className="flex items-center h-10 group relative">
                                    <div className="w-[180px] text-right pr-4 text-sm font-medium text-gray-700">
                                        {phase.name}
                                    </div>

                                    <div className="flex-1 h-full bg-gray-50 rounded-lg relative overflow-hidden border border-gray-200">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${width}%`, left: `${left}%` }}
                                            transition={{ duration: 0.6, delay: index * 0.1 }}
                                            className="absolute top-0 h-full bg-gradient-to-r from-purple-400 to-purple-600 rounded-lg z-10"
                                            whileHover={{
                                                scaleY: 1.1,
                                                zIndex: 20
                                            }}
                                        >
                                            {/* Hover Tooltip - Now positioned above the bar */}
                                            <motion.div
                                                className="absolute left-1/2 -top-10 -translate-x-1/2 hidden group-hover:block z-30"
                                                initial={{ opacity: 0, y: 5 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <div className="bg-white px-3 py-2 rounded-lg shadow-xl border border-gray-200 min-w-[180px]">
                                                    <div className="text-sm font-semibold text-purple-800">{phase.name}</div>
                                                    <div className="flex justify-between mt-1">
                                                        <span className="text-xs text-gray-600">Duration:</span>
                                                        <span className="text-xs font-medium">{phase.days} Days</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span className="text-xs text-gray-600">Cost:</span>
                                                        <span className="text-xs font-medium">₹{Math.round(phase.cost).toLocaleString("en-IN")}</span>
                                                    </div>
                                                </div>
                                                <div className="w-3 h-3 bg-white rotate-45 absolute -bottom-1 left-1/2 -ml-1.5 border-r border-b border-gray-200 z-40"></div>
                                            </motion.div>
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