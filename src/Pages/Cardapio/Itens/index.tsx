import { Cardapio } from "types/Prato";
import Item from "./Item";
import styles from "./Itens.module.scss";
import cardapio from "data/cardapio.json";
import { useEffect, useState } from "react";

interface ItensProps {
	busca: string;
	filtro: number | null;
	ordenador: string;
}

function Itens(props: ItensProps) {
	const [lista, setLista] = useState(cardapio);
	const { busca, filtro, ordenador } = props;

	useEffect(() => {
		function testaBusca(title: string) {
			const regex = new RegExp(busca, "i");
			return regex.test(title);
		}

		function testaFiltro(id: number) {
			if (filtro !== null) return filtro === id;
			return true;
		}

		function ordenar(novaLista: Cardapio) {
			const ordenarPropriedadeCrescente = (
				lista: Cardapio,
				propriedade: "size" | "serving" | "price",
			) => {
				return lista.sort((a, b) =>
					a[propriedade] > b[propriedade] ? 1 : -1,
				);
			};
			switch (ordenador) {
				case "porcao":
					return ordenarPropriedadeCrescente(novaLista, "size");
				case "qtd_pessoas":
					return ordenarPropriedadeCrescente(novaLista, "serving");
				case "preco":
					return ordenarPropriedadeCrescente(novaLista, "price");
				default:
					return novaLista;
			}
		}
		const novaLista = cardapio.filter(
			item => testaBusca(item.title) && testaFiltro(item.category.id),
		);
		setLista(ordenar(novaLista));
	}, [busca, filtro, ordenador]);

	return (
		<div className={styles.itens}>
			{lista.map(item => (
				<Item key={item.id} {...item} />
			))}
		</div>
	);
}

export default Itens;
