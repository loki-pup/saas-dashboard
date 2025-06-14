"use client"
import { Check } from "lucide-react";
import { PricingPlan } from "./pricing-section";
import { useRouter } from "next/navigation";


const PricingCard = ({title, price, description,features, isPopular, url}: PricingPlan) => {
    const router = useRouter();

    const onClick = () => {
        router.push(url);
    }
    
    return (
        <div className="border flec flex-col justify-between bg-white/20 rounded-lg 
        h-full p-6 hover:shadow-md text-left relative">
            {
                isPopular && (
                    <div className="absolute top-0 right-0 bg-gray-900
                    text-white px-2 py-1 rounded-bl-lg rounder-tr-lg">
                        Popular
                    </div>
                )
            }
            <div>
                <div className="inline-flex items-end">
                    <h1 className="font-extrabold text-3xl">
                        ${price}
                    </h1>
                </div>
                <h2 className="font-bold text-xl my-2">
                    {title}
                </h2>
                <p>{description}</p>
                <div className="flex-grow border-t border-gray-400 my-3">
                    <ul>
                        {
                            features.map((feature, index) => (
                                <li key={index} className="flex flex-row text-gray-800 gap-2 my-2 items-center">
                                    <div className="rounded-full flex items-center justify-center bg-gray-900 w-4 h-4 mr-2">
                                        <Check className="text-white" width={10} height={10}/>
                                    </div>
                                    <p>{feature}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div>
                    <button onClick={onClick} className="bg-gray-900 py-2 mt-3 rounded-lg text-white w-full cursor-pointer">
                        Select Plan
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PricingCard;