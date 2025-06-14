import Feature from "./feature";

const features = [
    {
        title: "Seamless Integration",
        description: "Easily integrate with your existing doggie apps",
    },
    {
        title: "Customizable",
        description: "Customize Bozyu widget to fit your needs and preferences",
    },
    {
        title: "Analytics",
        description: "Track and analyze doggie feedback for better doggies life",
    },
    {
        title: "Secure",
        description: "Your doggie data is safe and secure with Bozyu",
    },
    {
        title: "Scalable",
        description: "Grow your doggie business with Bozyu as you scale",
    },
    {
        title: "Fast Support",
        description: "Get help when you need it with our professional support team",
    },
];

const FeaturesSection = () => {
    return (
        <section className="container flex flex-col items-center mx-auto max-w-screen-xl px-4 my-18 md:mt-38">
            <h2 className="mb-6 text-2xl font-bold">Features</h2>
            <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {features.map((feature, index) => (
                    <Feature key={index} {...feature}/>
                ))}
            </div>
            </div>
        </section>
    )
}

export default FeaturesSection;