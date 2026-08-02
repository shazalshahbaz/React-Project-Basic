import img1 from "../../assets/images/audience1.jpg";
import img2 from "../../assets/images/audience2.jpg";
import img3 from "../../assets/images/audience3.jpg";

export const audienceData = [
  {
    id: 1,
    image: img1,
    number: "01",
    title:
      "Prime customers, that have access to bank credit and are satisfied with the current product.",
    status: "Satisfied",
    color: "bg-blue-600",
  },
  {
    id: 2,
    image: img2,
    number: "02",
    title:
      "Prime customers, that have access to bank credit but are not satisfied with the current service.",
    status: "Underserved",
    color: "bg-indigo-600",
  },
  {
    id: 3,
    image: img3,
    number: "03",
    title:
      "Customers from near-prime and sub-prime segments with no access to bank credit.",
    status: "Underbanked",
    color: "bg-lime-400 text-black",
  },
];