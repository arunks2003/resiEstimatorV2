export const calculatePossibleBhks = (area) => {
  // Minimum area requirements per BHK configuration
  const bhkRequirements = {
    1: 300, // 1 BHK requires at least 300 sq.ft
    2: 600, // 2 BHK requires at least 600 sq.ft
    3: 900, // 3 BHK requires at least 900 sq.ft
    4: 1200, // 4 BHK requires at least 1200 sq.ft
    5: 1500, // 5 BHK requires at least 1500 sq.ft
  };

  const possible = [];
  for (const [bhk, minArea] of Object.entries(bhkRequirements)) {
    if (area >= minArea) {
      possible.push(parseInt(bhk));
    }
  }

  // If area is too small even for 1BHK, still offer 1BHK as minimum
  if (possible.length === 0 && area > 0) {
    possible.push(1);
  }

  return possible;
};
export const getBHKType = (areaSqFt) => {
  if (areaSqFt >= 250 && areaSqFt < 490) return 1;
  if (areaSqFt >= 490 && areaSqFt < 900) return 2;
  if (areaSqFt >= 900 && areaSqFt < 1500) return 3;
  if (areaSqFt >= 1500 && areaSqFt < 2000) return 4;
  if (areaSqFt >= 2000) return 5;
  return "Area too small for classification";
};

export const calculateMaterials = (formData) => {
  const { bhk, area, price, quality, location } = formData;

  // Calculate total construction area (simplified)
  const totalArea = area * 0.8; // Assuming 80% of plot is built
  let totalCostForArea = totalArea * price;

  // Quality multipliers
  const qualityMultipliers = {
    economy: 1.3,
    standard: 2.0,
    luxury: 2.53,
  };
  const locationMultiplier = {
    urban: 2.2,
    suburban: 1.5,
    rural: 0.6,
  };
  const qualityFactor =
    qualityMultipliers[quality] * locationMultiplier[location] ||
    locationMultiplier[location] * 1.0;

  const materials = [
    {
      name: "Cement",
      quantity: Math.ceil(totalArea * 0.4 * qualityFactor),
      unit: "bags",
      unitPrice: 0.164 * totalCostForArea,
      totalCost: 0,
    },

    {
      name: "Bricks",
      quantity: Math.ceil(totalArea * 8 * qualityFactor),
      unit: "pieces",
      unitPrice: 8 * Math.ceil(totalArea * 8 * qualityFactor),
      totalCost: 0,
    },
    {
      name: "Steel",
      quantity: Math.ceil(totalArea * 4 * qualityFactor),
      unit: "kg",
      unitPrice: 0.246 * totalCostForArea,
      totalCost: 0,
    },
    {
      name: "Sand",
      quantity: Math.ceil(totalArea * 0.816 * qualityFactor),
      unit: "tons",
      unitPrice: 0.123 * totalCostForArea,
      totalCost: 0,
    },
    {
      name: "Aggregate",
      quantity: Math.ceil(totalArea * 0.608 * qualityFactor),
      unit: "tons",
      unitPrice: 0.074 * totalCostForArea,
      totalCost: 0,
    },
    {
      name: "Tiles",
      quantity: Math.ceil(totalArea * 1.3 * (quality === "luxury" ? 1.5 : 1.0)),
      unit: "sq. ft.",
      unitPrice:
        quality === "luxury"
          ? 120 *
            Math.ceil(totalArea * 1.3 * (quality === "luxury" ? 1.5 : 1.0))
          : quality === "premium"
          ? 80 * Math.ceil(totalArea * 1.3 * (quality === "luxury" ? 1.5 : 1.0))
          : 50 *
            Math.ceil(totalArea * 1.3 * (quality === "luxury" ? 1.5 : 1.0)),
      totalCost: 0,
    },
    {
      name: "Paint",
      quantity: Math.ceil(totalArea * 0.18 * qualityFactor),
      unit: "liters",
      unitPrice: 0.041 * totalCostForArea,
      totalCost: 0,
    },
  ];

  // Calculate total costs for each material
  materials.forEach((material) => {
    material.totalCost = material.unitPrice;
  });

  // Calculate total construction cost
  const totalCost = materials.reduce(
    (sum, material) => sum + material.totalCost,
    0
  );

  return {
    ...formData,
    totalArea: Math.round(totalArea),
    materials,
    totalCost,
    quality: quality.charAt(0).toUpperCase() + quality.slice(1),
  };
};
