import Cardapio from "Pages/Cardapio";
import Inicio from "Pages/Inicio";
import NotFound from "Pages/NotFound";
import Prato from "Pages/Prato";
import Sobre from "Pages/Sobre";
import Footer from "components/Footer";
import Menu from "components/Menu";
import TemplatePage from "components/TemplatePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function AppRouter() {
	return (
		<main className="container">
			<Router>
				<Menu />
				<Routes>
					<Route path="/" element={<TemplatePage />}>
						<Route index element={<Inicio />} />
						<Route path="cardapio" element={<Cardapio />} />
						<Route path="sobre" element={<Sobre />} />
					</Route>
					<Route path="prato/:id" element={<Prato />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
				<Footer />
			</Router>
		</main>
	);
}

export default AppRouter;
