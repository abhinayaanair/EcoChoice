module.exports.data = [
  { category: "Cooking Household Appliances", activities: [
      { name: "Solar Ovens", carbonEmission: 350.4, carbonEmission24: 0.96, how: "Solar ovens emit carbon primarily during their production and transportation. However, they have a low carbon footprint during use as they rely on solar energy." },
      { name: "Electric Kettle", carbonEmission: 8760, carbonEmission24: 24, how: "Electric kettles emit carbon during use due to electricity consumption, which may be generated from fossil fuels." },
      { name: "Earthen stove", carbonEmission: 70.08, carbonEmission24: 0.192, how: "Earthen stoves emit carbon when biomass or other fuels are burned for cooking." },
      { name: "Air fryer", carbonEmission: 12264, carbonEmission24: 33.6, how: "Air fryers emit carbon through their electricity usage, particularly if the electricity is generated from non-renewable sources." },
      { name: "Convection Oven", carbonEmission: 3504, carbonEmission24: 9.6, how: "Convection ovens emit carbon due to their electricity consumption during cooking." },
      { name: "Microwaves", carbonEmission: 146, carbonEmission24: 0.4, how: "Microwaves emit carbon during use as they consume electricity, which might come from fossil fuels." },
      { name: "Induction Cooktops", carbonEmission: 79.99997, carbonEmission24: 0.219178, how: "Induction cooktops emit carbon through their electricity consumption, especially if the power source is non-renewable." }
  ]},
  { category: "Refrigerating Household Appliances", activities: [
      { name: "Freezer", carbonEmission: 106.458, carbonEmission24: 0.29167, how: "Freezers emit carbon by consuming electricity continuously to keep the contents frozen." },
      { name: "Refrigerators", carbonEmission: 89, carbonEmission24: 0.24383, how: "Refrigerators emit carbon by using electricity to maintain a cool temperature inside the appliance." }
  ]},
  { category: "Cooling Household Appliances", activities: [
      { name: "Air conditioners", carbonEmission: 2087.8, carbonEmission24: 5.720, how: "Air conditioners emit carbon through electricity consumption to cool indoor spaces." },
      { name: "Electric Fan", carbonEmission: 262.8, carbonEmission24: 0.720, how: "Electric fans emit carbon by using electricity to operate, which may be generated from fossil fuels." },
      { name: "Earth Tubes", carbonEmission: 0, carbonEmission24: 0, how: "Earth tubes do not emit carbon during use as they rely on natural geothermal energy for cooling." }
  ]},
  { category: "Transportation", activities: [
      { name: "Car travel", carbonEmission: 4599.73, carbonEmission24: 12.602, how: "Car travel emits carbon through the combustion of gasoline or diesel fuel in internal combustion engines." },
      { name: "Electric Vehicle travel", carbonEmission: 1783.525, carbonEmission24: 4.88639, how: "Electric vehicles emit carbon indirectly, primarily from electricity generation if the electricity comes from non-renewable sources." },
      { name: "Public transit (buses, trains)", carbonEmission: 15001.5, carbonEmission24: 41.1, how: "Public transit emits carbon through the combustion of fossil fuels in buses and trains or through electricity consumption in electric trains." },
      { name: "Bicycling", carbonEmission: 0, carbonEmission24: 0, how: "Bicycling does not emit carbon during use as it is a human-powered mode of transportation." }
  ]},
  { category: "Food Consumption", activities: [
      { name: "Meat consumption", carbonEmission: 2624.35, carbonEmission24: 7.19, how: "Meat consumption emits carbon through the production of livestock, which involves methane emissions and energy use for feeding, processing, and transportation." },
      { name: "Plant-based diet", carbonEmission: 1490.05045, carbonEmission24: 4.08233, how: "Plant-based diets emit carbon primarily during the cultivation, processing, and transportation of plant foods." },
      { name: "Dairy consumption", carbonEmission: 2346.95, carbonEmission24: 6.43, how: "Dairy consumption emits carbon through the production of dairy products, including methane emissions from cows and energy use for processing and transportation." },
      { name: "Organically grown Plant-based diet", carbonEmission: 1390.65, carbonEmission24: 3.81, how: "Organically grown plant-based diets emit carbon during the cultivation and transportation of organic plant foods, with generally lower emissions due to sustainable farming practices." }
  ]},
  { category: "Energy Usage", activities: [
      { name: "Using electricity from fossil fuels", carbonEmission: 5781.454, carbonEmission24: 15.8396, how: "Using electricity from fossil fuels emits carbon through the combustion of coal, natural gas, or oil in power plants." },
      { name: "Solar energy usage", carbonEmission: 0, carbonEmission24: 0, how: "Solar energy usage does not emit carbon during use as it relies on renewable solar power." },
      { name: "Heating with natural gas", carbonEmission: 9003.99885, carbonEmission24: 24.66849, how: "Heating with natural gas emits carbon through the combustion of natural gas in heating systems." },
      { name: "Geothermal heating", carbonEmission: 397.346592, carbonEmission24: 1.0886208, how: "Geothermal heating emits carbon during the installation and maintenance of the system but has low emissions during use as it relies on natural geothermal energy." }
  ]},
  { category: "Waste Management", activities: [
      { name: "Landfill disposal", carbonEmission: 2875.97, carbonEmission24: 7.879369, how: "Landfill disposal emits carbon through methane emissions from decomposing organic waste and the energy used in waste management." },
      { name: "Recycling", carbonEmission: 372.5, carbonEmission24: 1.02054, how: "Recycling emits carbon through the energy used in the collection, transportation, and processing of recyclable materials." },
      { name: "Composting", carbonEmission: 120, carbonEmission24: 0.328767, how: "Composting emits carbon through the decomposition of organic waste, though it generally has lower emissions compared to landfilling." },
      { name: "Incineration", carbonEmission: 907.185, carbonEmission24: 2.485438, how: "Incineration emits carbon through the combustion of waste materials, releasing CO2 and other pollutants." }
  ]},
  { category: "Personal Care and Hygiene", activities: [
      { name: "Single-use hygiene products", carbonEmission: 6000, carbonEmission24: 16.6, how: "Single-use hygiene products emit carbon during production, transportation, and disposal, often involving plastics and other non-renewable materials." },
      { name: "Reusable hygiene products", carbonEmission: 1200, carbonEmission24: 3.3, how: "Reusable hygiene products emit carbon during production and washing but have lower emissions over their lifespan compared to single-use products." },
      { name: "Personal care product usage", carbonEmission: 2400, carbonEmission24: 6.6, how: "Personal care products emit carbon during production, packaging, and transportation, especially if they contain non-renewable ingredients." },
      { name: "Natural, minimal personal care", carbonEmission: 600, carbonEmission24: 1.6, how: "Natural, minimal personal care emits carbon primarily during the cultivation and processing of natural ingredients, with generally lower emissions compared to conventional products." }
  ]},
  { category: "Clothing and Textiles", activities: [
      { name: "Fast fashion consumption", carbonEmission: 30000, carbonEmission24: 83.3, how: "Fast fashion consumption emits carbon through the rapid production, transportation, and disposal of clothing, often using energy-intensive processes and synthetic materials." },
      { name: "Sustainable fashion", carbonEmission: 6000, carbonEmission24: 16.6, how: "Sustainable fashion emits carbon during the production of eco-friendly materials and clothing, but with lower emissions compared to fast fashion." },
      { name: "Washing and drying clothes", carbonEmission: 117.96, carbonEmission24: 0.3232, how: "Washing and drying clothes emit carbon through the energy used by washing machines and dryers, especially if the energy comes from non-renewable sources." },
      { name: "Air-drying clothes", carbonEmission: 600, carbonEmission24: 1.6, how: "Air-drying clothes emit minimal carbon as it involves natural drying without the use of energy-consuming appliances." }
  ]},
  { category: "Technology Usage", activities: [
      { name: "Device charging (non-energy-efficient devices)", carbonEmission: 3.53904, carbonEmission24: 0.009696, how: "Device charging emits carbon through the electricity used, particularly if the devices are not energy-efficient and the electricity is from fossil fuels." },
      { name: "Device charging (energy-efficient devices)", carbonEmission: 3.24412, carbonEmission24: 0.008888, how: "Device charging for energy-efficient devices emits less carbon due to lower electricity consumption." },
      { name: "Home entertainment systems", carbonEmission: 199.071, carbonEmission24: 0.5454, how: "Home entertainment systems emit carbon through electricity consumption during operation." },
      { name: "Reading books", carbonEmission: 0, carbonEmission24: 0, how: "Reading books does not emit carbon during use as it is a non-electric activity." }
  ]},
  { category: "Construction and Home Improvement", activities: [
      { name: "Cement production", carbonEmission: 96000, carbonEmission24: 266.6, how: "Cement production emits carbon through the energy-intensive process of producing cement, which involves the combustion of fossil fuels and chemical reactions releasing CO2." },
      { name: "Use of sustainable materials", carbonEmission: 100000, carbonEmission24: 273.97, how: "Using sustainable materials emits carbon during the production and transportation of these materials, although generally lower than traditional materials." },
      { name: "Home renovations with traditional materials", carbonEmission: 60000, carbonEmission24: 166.6, how: "Home renovations with traditional materials emit carbon through the energy used in the production and transportation of conventional building materials." },
      { name: "Home renovations with eco-friendly materials", carbonEmission: 24000, carbonEmission24: 66.6, how: "Home renovations with eco-friendly materials emit carbon primarily during the production and transportation of sustainable building materials, with lower emissions compared to traditional materials." }
  ]},
  { category: "Technology Services", activities: [
      { name: "Data centers and cloud services", carbonEmission: 33536.8, carbonEmission24: 9.69, how: "Data centers and cloud services emit carbon through the electricity used to power servers and cooling systems, often from non-renewable sources." },
      { name: "Using local servers", carbonEmission: 1058.5, carbonEmission24: 2.90, how: "Using local servers emits carbon through the electricity consumed to operate and cool the servers, typically less efficient than large data centers." },
      { name: "Minimizing data usage", carbonEmission: 1474.6, carbonEmission24: 4.04, how: "Minimizing data usage emits less carbon by reducing the need for extensive data storage and processing, thereby decreasing electricity consumption." },
      { name: "Using renewable energy-powered data centers", carbonEmission: 0, carbonEmission24: 0, how: "Using renewable energy-powered data centers does not emit carbon during operation as they rely on clean energy sources." }
  ]}
];
