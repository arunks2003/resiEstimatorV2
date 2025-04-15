import React from 'react';

const ConstructionMethodology = () => {
    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                Construction Methodology
            </h1>

            <div className="bg-purple-50 p-6 rounded-lg border border-purple-100 mb-8">
                <h2 className="text-xl font-semibold text-purple-800 mb-4">
                    Long Wall - Short Wall Method
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                        <h3 className="text-lg font-medium text-gray-700 mb-3 flex items-center">
                            <span className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center mr-2">1</span>
                            Wall Dimension Calculation
                        </h3>
                        <ul className="space-y-3 text-gray-600 pl-2">
                            <li className="flex items-start">
                                <span className="text-purple-500 mr-2">•</span>
                                <span><strong>Long Wall:</strong> Center-to-center length + wall thickness</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-purple-500 mr-2">•</span>
                                <span><strong>Short Wall:</strong> Center-to-center width - wall thickness</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-purple-500 mr-2">•</span>
                                <span>Used for accurate quantity take-off of vertical elements</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                        <h3 className="text-lg font-medium text-gray-700 mb-3 flex items-center">
                            <span className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center mr-2">2</span>
                            Measurement Principles
                        </h3>
                        <ul className="space-y-3 text-gray-600 pl-2">
                            <li className="flex items-start">
                                <span className="text-purple-500 mr-2">•</span>
                                <span>All measurements taken from architectural plans</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-purple-500 mr-2">•</span>
                                <span>Standard wall thickness applied (230mm for brick walls)</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-purple-500 mr-2">•</span>
                                <span>Consistent unit of measurement (meters)</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">
                    Quantity Calculation Approach
                </h2>

                <div className="space-y-6">
                    <div className="flex items-start">
                        <div className="bg-purple-100 text-purple-800 rounded-lg p-3 mr-4 flex-shrink-0">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-lg font-medium text-gray-800 mb-2">Earthwork Excavation</h3>
                            <p className="text-gray-600">
                                Calculated as Length × Width × Depth (typically 0.5m for foundations).
                                Includes allowance for working space around foundations.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <div className="bg-purple-100 text-purple-800 rounded-lg p-3 mr-4 flex-shrink-0">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-lg font-medium text-gray-800 mb-2">PCC (Plain Cement Concrete)</h3>
                            <p className="text-gray-600">
                                Base concrete layer calculated as Length × Width × Thickness (typically 0.1m).
                                Includes compaction and leveling.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <div className="bg-purple-100 text-purple-800 rounded-lg p-3 mr-4 flex-shrink-0">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-lg font-medium text-gray-800 mb-2">Brickwork</h3>
                            <p className="text-gray-600">
                                Calculated using long wall-short wall method: Total length × Height × Wall thickness.
                                Deductions made for openings exceeding 0.5m².
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <div className="bg-purple-100 text-purple-800 rounded-lg p-3 mr-4 flex-shrink-0">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-lg font-medium text-gray-800 mb-2">RCC Work</h3>
                            <p className="text-gray-600">
                                Calculated as Length × Width × Thickness (typically 0.15m for slabs).
                                Includes reinforcement steel, shuttering, and concrete.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <div className="bg-purple-100 text-purple-800 rounded-lg p-3 mr-4 flex-shrink-0">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-lg font-medium text-gray-800 mb-2">Plastering</h3>
                            <p className="text-gray-600">
                                Calculated as 2 × (Total wall length × Height) for both sides.
                                Deductions made for openings exceeding 0.5m².
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <div className="bg-purple-100 text-purple-800 rounded-lg p-3 mr-4 flex-shrink-0">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-lg font-medium text-gray-800 mb-2">Flooring</h3>
                            <p className="text-gray-600">
                                Calculated as Length × Width (net floor area).
                                Includes base preparation, bedding, and finishing material.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-8 bg-blue-50 p-5 rounded-lg border border-blue-200">
                <h3 className="text-lg font-medium text-blue-800 mb-3">Standard References</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-700">
                    <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>IS 1200: Methods of Measurement of Building and Civil Engineering Works</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>Delhi Schedule of Rates (DSR) for material costs</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>CPWD Specifications for construction quality standards</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>NBC (National Building Code) for design parameters</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ConstructionMethodology;