import Checks from "@/components/sections/checks";
import Compare from "@/components/sections/compare";
import Faq from "@/components/sections/faq";
import Hero from "@/components/sections/hero";
import Payments from "@/components/sections/payments";
import Pricing from "@/components/sections/pricing";
import Steps from "@/components/sections/steps";
import TripPreview from "@/components/sections/trip-preview";

export default function Home() {
	return (
		<>
			<Hero />
			<TripPreview />
			<Checks />
			<Payments />
			<Pricing />
			<Steps />
			<Compare />
			<Faq />
		</>
	);
}
