"use client"
export const getCountryFlagUrl = (nationality: string): string => {
    const countryMapping: Record<string, string> = {
      India: "IN",
      Australia: "AU",
      England: "GB",
      "South Africa": "ZA",
      Pakistan: "PK",
      "New Zealand": "NZ",
      "West Indies": "WI",
      "Sri Lanka": "LK",
      Bangladesh: "BD",
      Afghanistan: "AF",
    };
  
    return `https://flagsapi.com/${countryMapping[nationality] || "UN"}/flat/24.png`;
  };
  