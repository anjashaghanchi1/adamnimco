export const BUSINESS = {
  name: "Adam Nimco",
  tagline: "Premium Local Snack Brand",
  phones: ["03243187567", "03341923235"],
  whatsapp: "923243187567", // primary WA number, intl format without +
  address:
    "Shop No 14, Bhai Jee Wala Building, Near Bori Bazar, Opp Saddar City Center, Dr Dawood Pota Road, Saddar",
  mapLink: "https://share.google/qk2OtOX3Ze5ShksWN",
  mapEmbed:
    "https://www.google.com/maps?q=Saddar+City+Center+Dr+Dawood+Pota+Road+Saddar+Karachi&output=embed",
};

export const waLink = (message: string) =>
  `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(message)}`;

export const telLink = (n: string) => `tel:${n.replace(/\s/g, "")}`;
