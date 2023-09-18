import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic Membership",
      price: 29.99,
      features: [
        "Access to gym facilities",
        "Cardio and strength equipment",
        "Locker room access",
        "Fitness classes available",
        "24/7 access to gym",
        "Access to swimming pool",
        "Discounts on personal training",
      ],
    },
    {
      id: 2,
      name: "Premium Membership",
      price: 49.99,
      features: [
        "All features of Basic Membership",
        "Access to sauna and steam room",
        "Personal trainer sessions (2/month)",
        "Nutritional counseling",
        "Unlimited tanning sessions",
        "Free access to all fitness classes",
        "Priority booking for classes",
      ],
    },
    {
      id: 3,
      name: "Family Membership",
      price: 89.99,
      features: [
        "All features of Premium Membership",
        "Additional family members included",
        "Childcare services",
        "Group fitness classes",
        "Family-friendly events and workshops",
        "Complimentary towel service",
        "Access to exclusive member lounge",
      ],
    },
  ];

  return (
    <div className="m-12">
      <h2 className="text-5xl">Best Prices in the Town</h2>
      <div className="grid grid-cols-3 gap-6">
        {priceOptions.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
