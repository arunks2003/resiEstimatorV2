
import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
    page: {
        padding: 30,
        fontFamily: 'Helvetica'
    },
    header: {
        marginBottom: 20,
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#4f46e5' // indigo-600
    },
    section: {
        marginBottom: 15,
        padding: 10,
        border: '1 solid #e5e7eb',
        borderRadius: 5
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#1f2937'
    },
    chartContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15
    },
    pieChartContainer: {
        width: '45%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    legend: {
        width: '50%',
        paddingLeft: 10
    },
    legendItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5
    },
    legendColor: {
        width: 12,
        height: 12,
        marginRight: 8,
        borderRadius: 6
    },
    legendText: {
        fontSize: 10
    },
    row: {
        flexDirection: 'row',
        marginBottom: 5
    },
    label: {
        width: '40%',
        fontSize: 12,
        fontWeight: 'bold',
        color: '#4b5563'
    },
    value: {
        width: '60%',
        fontSize: 12,
        color: '#1f2937'
    },
    tableHeader: {
        flexDirection: 'row',
        backgroundColor: '#f3f4f6',
        padding: 8,
        fontWeight: 'bold',
        fontSize: 12,
        color: '#1f2937',
        borderBottom: '1 solid #d1d5db'
    },
    tableRow: {
        flexDirection: 'row',
        padding: 8,
        borderBottom: '1 solid #e5e7eb',
        fontSize: 10
    },
    col1: { width: '30%' },
    col2: { width: '15%', textAlign: 'right' },
    col3: { width: '15%', textAlign: 'center' },
    col4: { width: '20%', textAlign: 'right' },
    col5: { width: '20%', textAlign: 'right' },
    totalRow: {
        flexDirection: 'row',
        padding: 8,
        backgroundColor: '#f3f4f6',
        fontWeight: 'bold',
        fontSize: 12
    },
    footer: {
        textAlign: 'center',
        fontSize: 10,
        color: '#6b7280',
        marginTop: 20
    }
});

// Color palette for pie chart segments
const COLORS = [
    '#4f46e5', // indigo-600
    '#6366f1', // indigo-500
    '#818cf8', // indigo-400
    '#a5b4fc', // indigo-300
    '#c7d2fe', // indigo-200
    '#e0e7ff', // indigo-100
    '#4338ca', // indigo-700
    '#3730a3', // indigo-800
    '#312e81', // indigo-900
    '#1e1b4b'  // indigo-950
];

// Function to create pie chart segments
const PieSegment = ({ color, startAngle, endAngle }) => {
    const center = 50;
    const radius = 40;

    // Convert angles to radians
    const startRad = (startAngle - 90) * (Math.PI / 180);
    const endRad = (endAngle - 90) * (Math.PI / 180);

    // Calculate coordinates
    const x1 = center + radius * Math.cos(startRad);
    const y1 = center + radius * Math.sin(startRad);
    const x2 = center + radius * Math.cos(endRad);
    const y2 = center + radius * Math.sin(endRad);

    // Determine if this is a large arc
    const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1;

    return (
        <View style={{
            position: 'absolute',
            width: 100,
            height: 100
        }}>
            <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%' }}>
                <path
                    d={`M${center},${center} L${x1},${y1} A${radius},${radius} 0 ${largeArcFlag},1 ${x2},${y2} Z`}
                    fill={color}
                />
            </svg>
        </View>
    );
};

const PieChart = ({ materials, totalCost }) => {
    let currentAngle = 0;

    return (
        <View style={{
            width: 100,
            height: 100,
            position: 'relative',
            marginBottom: 10
        }}>
            {/* Background circle */}
            <View style={{
                position: 'absolute',
                width: 100,
                height: 100,
                borderRadius: 50,
                backgroundColor: '#f3f4f6'
            }} />

            {/* Segments */}
            {materials.map((material, index) => {
                const percentage = (material.totalCost / totalCost) * 100;
                const angle = (percentage / 100) * 360;
                const segment = (
                    <PieSegment
                        key={index}
                        color={COLORS[index % COLORS.length]}
                        startAngle={currentAngle}
                        endAngle={currentAngle + angle}
                    />
                );
                currentAngle += angle;
                return segment;
            })}

            {/* Center circle */}
            <View style={{
                position: 'absolute',
                width: 40,
                height: 40,
                borderRadius: 20,
                backgroundColor: 'white',
                top: 30,
                left: 30
            }} />
        </View>
    );
};

const EstimatePDF = ({ estimate }) => {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.header}>
                    <Text>ResiEstimator - Construction Estimate</Text>
                </View>

                {/* Project Details */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Project Details</Text>
                    <View style={styles.row}>
                        <Text style={styles.label}>Project Name:</Text>
                        <Text style={styles.value}>{estimate.projectName || 'Untitled Project'}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Configuration:</Text>
                        <Text style={styles.value}>{estimate.bhk} BHK • {estimate.floors} {estimate.floors > 1 ? 'Floors' : 'Floor'}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Total Area:</Text>
                        <Text style={styles.value}>{estimate.totalArea} sq.ft</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Construction Quality:</Text>
                        <Text style={styles.value}>{estimate.quality.charAt(0).toUpperCase() + estimate.quality.slice(1)}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Location:</Text>
                        <Text style={styles.value}>{estimate.location.charAt(0).toUpperCase() + estimate.location.slice(1)}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Total Estimated Cost:</Text>
                        <Text style={styles.value}>
                            {new Intl.NumberFormat('en-IN', {
                                style: 'currency',
                                currency: 'INR',
                                maximumFractionDigits: 0
                            }).format(estimate.totalCost)}
                        </Text>
                    </View>
                </View>

                {/* Cost Distribution with Pie Chart */}
                {/* <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Cost Distribution</Text>
                    <View style={styles.chartContainer}>
                        <View style={styles.pieChartContainer}>
                            <PieChart materials={estimate.materials} totalCost={estimate.totalCost} />
                        </View>
                        <View style={styles.legend}>
                            {estimate.materials.map((material, index) => (
                                <View key={index} style={styles.legendItem}>
                                    <View style={[styles.legendColor, { backgroundColor: COLORS[index % COLORS.length] }]} />
                                    <Text style={styles.legendText}>
                                        {material.name} ({((material.totalCost / estimate.totalCost) * 100).toFixed(1)}%)
                                    </Text>
                                </View>
                            ))}
                        </View>
                    </View>
                </View> */}

                {/* Materials Table */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Material Requirements</Text>
                    <View style={styles.tableHeader}>
                        <Text style={styles.col1}>Material</Text>
                        <Text style={styles.col2}>Quantity</Text>
                        <Text style={styles.col3}>Unit</Text>
                        <Text style={styles.col4}>Unit Price</Text>
                        <Text style={styles.col5}>Total Cost</Text>
                    </View>
                    {estimate.materials.map((material, index) => (
                        <View key={index} style={styles.tableRow}>
                            <Text style={styles.col1}>{material.name}</Text>
                            <Text style={styles.col2}>{material.quantity.toLocaleString()}</Text>
                            <Text style={styles.col3}>{material.unit}</Text>
                            <Text style={styles.col4}>
                                {new Intl.NumberFormat('en-IN', {
                                    style: 'currency',
                                    currency: 'INR',
                                    maximumFractionDigits: 0
                                }).format(material.unitPrice)}
                            </Text>
                            <Text style={styles.col5}>
                                {new Intl.NumberFormat('en-IN', {
                                    style: 'currency',
                                    currency: 'INR',
                                    maximumFractionDigits: 0
                                }).format(material.totalCost)}
                            </Text>
                        </View>
                    ))}
                    <View style={styles.totalRow}>
                        <Text style={{ width: '80%', textAlign: 'right' }}>Total Materials Cost:</Text>
                        <Text style={{ width: '20%', textAlign: 'right' }}>
                            {new Intl.NumberFormat('en-IN', {
                                style: 'currency',
                                currency: 'INR',
                                maximumFractionDigits: 0
                            }).format(estimate.totalCost)}
                        </Text>
                    </View>
                </View>

                {/* Additional Calculations Section */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Additional Costs</Text>
                    <View style={styles.row}>
                        <Text style={styles.label}>Labor Charges (15%):</Text>
                        <Text style={styles.value}>
                            ₹{(estimate.totalCost * 0.15).toLocaleString('en-IN')}
                        </Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Miscellaneous (5%):</Text>
                        <Text style={styles.value}>
                            ₹{(estimate.totalCost * 0.05).toLocaleString('en-IN')}
                        </Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={{ ...styles.label, fontWeight: 'extrabold' }}>Grand Total:</Text>
                        <Text style={{ ...styles.value, fontWeight: 'extrabold' }}>
                            ₹{(estimate.totalCost * 1.2).toLocaleString('en-IN')}
                        </Text>
                    </View>
                </View>

                {/* Footer */}
                <View style={styles.footer}>
                    <Text>Thank you for using ResiEstimator - Construction Cost Estimation Tool</Text>
                </View>
            </Page>
        </Document>
    );
};

export default EstimatePDF;