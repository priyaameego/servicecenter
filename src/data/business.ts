export interface BusinessInfo {
  website: string;
  phone: string;
  tollFree: string;
  email: string;
  address: {
    building: string;
    street: string;
    cluster: string;
    cityArea: string;
    city: string;
    country: string;
    fullAddress: string;
  };
  poBox: string;
}

export const dubaiBranch: BusinessInfo = {
  website: "www.servicecenter.ae",
  phone: "+971 800 2527",
  tollFree: "8002527",
  email: "Support@servicenter.ae",
  address: {
    building: "Building W04, Shop 08",
    street: "Al Warsan Street",
    cluster: "Russia Cluster",
    cityArea: "Dubai International City",
    city: "Dubai",
    country: "United Arab Emirates",
    fullAddress: "Building W04, Shop 08, Al Warsan Street, Russia Cluster, Dubai International City, Dubai, United Arab Emirates",
  },
  poBox: "9924, Dubai - UAE"
};
