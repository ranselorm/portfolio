import Button from "@/components/Button";
import CurvedCard from "./curved/CurvedCard";

const Hero: React.FC = () => {
  return (
    <section className="py-20 font-primary flex items-center justify-center">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-8 px-6 md:px-12">
        <div className="text-center md:text-left flex-1 flex flex-col space-y-4">
          <p className="text-xl">Hello there👋,</p>
          <h3 className="font-medium text-3xl">
            I'm <span>Randy</span>, a Software Engineer.
          </h3>
          <p className="text-gray-700 text-lg">
            Specialized in MERN Stack, I welcome you to my world of innovative
            web applications development. Let's create something great together!
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            {/* <Button label="About" variant="primary" /> */}
            <Button
              label="Portfolio"
              variant="secondary"
              icon="pepicons-pencil:arrow-up-right"
            />
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <CurvedCard src="/images/passport.jpg" />
          <div className="w-24 h-24 bg-primary absolute -bottom-1 -right-2 z-10 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
