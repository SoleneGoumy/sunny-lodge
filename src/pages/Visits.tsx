import PlaceCard from "../components/PlaceCard";
import { visits } from "../visites";

export default function Visits() {
	return (
		<>
			<section className="page-hero page-hero--mixed">
				<div className="container">
					<p className="eyebrow">
						À découvrir dans les alentours de Sunny Lodge...
					</p>
					<h1>Visites touristiques</h1>
					<p className="page-hero__lead">
						Patrimoine historique, curiosités du lac de Serre-Ponçon et coins de
						nature préservés : nos visites préférées autour de Sunny Lodge, pour
						une journée sans skis ni chaussures de rando.
					</p>
				</div>
			</section>

			<section className="section">
				<div className="container">
					<h2>Nos visites préférées</h2>
					<div className="places">
						{visits.map((p) => (
							<PlaceCard key={p.name} place={p} />
						))}
					</div>
				</div>
			</section>
		</>
	);
}
