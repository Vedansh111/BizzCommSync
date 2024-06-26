import clsx from "https://cdn.skypack.dev/clsx@1.1.1";

export const employeeData = [
  {
    id: 1,
    name: "Esther Howard",
    position: "Sale's manager USA",
    transactions: 3490,
    rise: true,
    tasksCompleted: 3,
    imgId: 0,
  },

  {
    id: 2,
    name: "Eleanor Pena",
    position: "Sale's manager Europe",
    transactions: 590,
    rise: false,
    tasksCompleted: 5,
    imgId: 2,
  },

  {
    id: 3,
    name: "Robert Fox",
    position: "Sale's manager Asia",
    transactions: 2600,
    rise: true,
    tasksCompleted: 1,
    imgId: 3,
  },
];

export const countryData = [
  { name: "USA", rise: true, value: 21942.83, id: 1 },
  { name: "Ireland", rise: false, value: 19710.0, id: 2 },
  { name: "Ukraine", rise: false, value: 12320.3, id: 3 },
  { name: "Sweden", rise: true, value: 9725.0, id: 4 },
];

export const segmentationData = [
  { c1: "Not Specified", c2: "800", c3: "#363636", color: "#535353" },
  { c1: "Male", c2: "441", c3: "#818bb1", color: "#595f77" },
  { c1: "Female", c2: "233", c3: "#2c365d", color: "#232942" },
  { c1: "Other", c2: "126", c3: "#334ed8", color: "#2c3051" },
];

export function Icon({ path = "options", className = "w-4 h-4" }) {
  return (
    <img
      src={`https://assets.codepen.io/3685267/${path}.svg`}
      alt=""
      className={clsx(className)}
    />
  );
}

export function Image({ path = "1", className = "w-4 h-4" }) {
  return (
    <img
      src={`https://assets.codepen.io/3685267/${path}.jpg`}
      alt=""
      className={clsx(className, "rounded-full")}
    />
  );
}
