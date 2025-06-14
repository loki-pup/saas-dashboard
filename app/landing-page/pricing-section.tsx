import PricingCard from "./pricing-card";

export type PricingPlan = {
    title: string;
    price: number;
    description: string;
    isPopular: boolean;
    features: string[];
    url:string;
}

export const pricingPlans: PricingPlan[] = [
{
    title: "Free",
    price: 0,
    description: "For small doggie teams just get started",
    isPopular: false,
    url: "/dashboard",
    features: [
        "3 projects",
        "unlimited doggies",
        "2GB storage",
        "Priority support",
    ],
},
{
    title: "Monthly",
    price: 8.99,
    description: "For growing doggie teams",
    isPopular: true,
    url:"/payments/subscribe?plan=monthly",
    features: [
        "Unlimited projects",
        "unlimited doggies",
        "5GB storage",
        "Priority support",
    ],
},
{
    title: "Yearly",
    price: 88.99,
    description: "Upgrade to save more",
    isPopular: false,
    url:"/payments/subscribe?plan=yearly",
    features: [
        "Unlimited projects",
        "unlimited doggies",
        "50GB storage",
        "24/7 support",
    ],
},
]


const PricingSection = () => {
    return (
        <div className="text-center">
            <h1 className="font-bold text-2xl">
                Pricing
            </h1>
            <h2 className="font-semibold text-xl mb-8 pt-3">
                Flexible Pricing to Fit Your Needs
            </h2>
            <div className="mt-10 grid items-center grid-cols-1 md:grid-cols-3 gap-5 max-w-screen-xl">
                {
                pricingPlans.map((plan, index) => (
                    <PricingCard key={index} {...plan} />
                ))
            }
            </div>
        </div>
    )
}

export default PricingSection;