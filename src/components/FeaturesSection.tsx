import Container from "./Container";
import React from "react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface FeatureCardProps extends Feature {}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => (
  <div className="w-full px-4 md:w-1/2 lg:w-1/3">
    <div className="mb-9 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10">
      <div className="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">
        {icon}
      </div>
      <h4 className="text-dark mb-4 text-2xl font-semibold">{title}</h4>
      <p className="mt-8 text-gray-700 light:text-gray-300 text-xl">
        {description}
      </p>
    </div>
  </div>
);

const FeaturesSection: React.FC = () => {
  const features: Feature[] = [
    {
      icon: <svg>...</svg>, // Replace with actual SVG or imported icon component
      title: "Innovative Design Solutions",
      description:
        "We delight in collaborating with discerning clients, individuals who value quality, service, integrity, and aesthetics.",
    },
    {
      icon: <svg>...</svg>, // Replace with actual SVG or imported icon component
      title: "Innovative Design Solutions",
      description:
        "We delight in collaborating with discerning clients, individuals who value quality, service, integrity, and aesthetics.",
    },
    {
      icon: <svg>...</svg>, // Replace with actual SVG or imported icon component
      title: "Innovative Design Solutions",
      description:
        "We delight in collaborating with discerning clients, individuals who value quality, service, integrity, and aesthetics.",
    },
    // ... add other features here
  ];

  return (
    <Container>
      <section id="features" className="pt-20 pb-12 lg:pt-[90px] lg:pb-[90px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-12 max-w-[1000px] text-center lg:mb-20">
                <span className="text-primary mb-2 block text-lg font-semibold">
                  Illuminate Your Confidence
                </span>
                <h2 className="text-dark mb-2 text-2xl leading-[1.2] semi-bold sm:text-2xl md:text-[30px]">
                  Discover Your Authentic Hues, Amplify Your Confidence
                </h2>
                <p className="mt-4 text-gray-700 light:text-gray-300 text-xl">
                Blending Western precision with Korean harmony for your perfect palette{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="-mx-4 flex flex-wrap">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
};

export default FeaturesSection;
