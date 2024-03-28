

export const ApiHost = "https://apis-dev.accountsntax.com/api/v1";
export const localHost = "http://192.168.1.44:5001/api/v1";
export const adminCode = "ACCTX23048373416";
export const temp = "ACCTX23048373416";


export const emailRegexp: RegExp = /^[A-Z0-9!._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
export const mobileRegexp: RegExp = /^[0-9]{10}$/i; // Modify this regex as needed for your mobile validation


export const dueDatePriority = [
  { value: "LOW", label: "Low" },
  { value: "MEDIUM", label: "Medium" },
  { value: "HIGH", label: "High" },
]

export const selectedDueDatePriority = [
  { value: "low", label: "Low" },
]

export const dueDateCategory = [
  { value: "gst", label: "GST" },
  { value: "itr", label: "ITR" },
  { value: "custom", label: "Custom" }
]