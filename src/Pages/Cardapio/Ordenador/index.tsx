import styles from "./Ordenador.module.scss";
import opcoes from "./opcoes.json";
import { useState } from "react";
import classNames from "classnames";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

interface OrdenadorProps {
	ordenador: string;
	setOrdenador: React.Dispatch<React.SetStateAction<string>>;
}

function Ordenador({ ordenador, setOrdenador }: OrdenadorProps) {
	const [toggle, setToggle] = useState(false);
	const nomeOrdenador =
		ordenador && opcoes.find(opcao => opcao.value === ordenador)?.nome;

	return (
		<button
			className={classNames({
				[styles.ordenador]: true,
				[styles["ordenador--ativo"]]: ordenador !== "",
			})}
			onClick={() => setToggle(!toggle)}
			onBlur={() => setToggle(false)}
		>
			<span>{nomeOrdenador || "Ordenar Por:"}</span>
			{toggle ? (
				<MdKeyboardArrowUp size={20} />
			) : (
				<MdKeyboardArrowDown size={20} />
			)}
			<div
				className={classNames({
					[styles.ordenador__options]: true,
					[styles["ordenador__options--ativo"]]: toggle,
				})}
			>
				{opcoes.map(opcao => (
					<div
						className={styles.ordenador__option}
						key={opcao.value}
						onClick={() => setOrdenador(opcao.value)}
					>
						{opcao.nome}
					</div>
				))}
			</div>
		</button>
	);
}

export default Ordenador;
