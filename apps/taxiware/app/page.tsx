import { Badge } from "@repo/ui/components/badge";

export default function Home() {
	return (
		<section className="container mx-auto flex min-h-[60vh] flex-col items-center justify-center gap-4 px-4 py-16 text-center">
			<Badge variant="secondary">Demnächst verfügbar</Badge>
			<h1 className="font-bold text-4xl tracking-tight md:text-5xl">
				Taxiware
			</h1>
			<p className="max-w-xl text-lg text-muted-foreground">
				Hier entsteht die Website von Taxiware.
			</p>
		</section>
	);
}
