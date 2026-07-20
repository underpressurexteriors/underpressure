export const business = {
  name: "Under Pressure Xteriors",
  shortName: "UP Xteriors",
  tagline: "Pressure On. Grime Gone.",
  phone: "(703) 919-6936",
  phoneHref: "tel:+17039196936",
  smsHref: "sms:+17039196936",
  email: "upxteriors@gmail.com",
  city: "Zebulon",
  state: "NC",
  stateFull: "North Carolina",
  region: "the Carolina & Virginia region",
  founder: "Andrew Spicer",
  // NOTE: placeholder domain until final hosting/domain is confirmed by client.
  url: "https://upxteriors.com",
  hours: [
    { day: "Monday - Friday", hours: "7:00 AM - 7:00 PM" },
    { day: "Saturday", hours: "8:00 AM - 5:00 PM" },
    { day: "Sunday", hours: "Closed - Emergency requests welcome" },
  ],
  social: {
    facebook: "",
    instagram: "",
  },
  serviceStates: ["North Carolina", "Virginia"],
} as const;

export const NAP_JSONLD_ID = `${business.url}/#organization`;
