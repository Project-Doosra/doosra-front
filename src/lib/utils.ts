export function getBaseUrl() {
    if (typeof window !== 'undefined') {
        return ''; // Browser should use relative path
    }
    // console.log({NODE_ENV: process.env.NODE_ENV});
    if (process.env.NODE_ENV != "development") {
        return `https://doosra-frontend.vercel.app/`; // TODO: FIX THIS
    }
    if (process.env.RENDER_INTERNAL_HOSTNAME) {
        return `http://${process.env.RENDER_INTERNAL_HOSTNAME}:${process.env.PORT}`;
    }
    return `http://localhost:${process.env.PORT || 3000}`;
}

// Utility function to map nationality to country code
export const getCountryFlagUrl = (nationality: string) => {
    const countryMapping: { [key: string]: string } = {
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
    return `https://flagsapi.com/${
      countryMapping[nationality as keyof typeof countryMapping] || "UN"
    }/flat/24.png`;
  };