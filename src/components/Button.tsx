import { useState } from "react";

interface ButtonProps {
	color: string;
	children: String;
}

export function Button(props: ButtonProps) {
	const [counter, setCounter] = useState(1);

	function Increment() {
		setCounter(counter + 1);
	}
	return (
		<button
			type="button"
			style={{ backgroundColor: props.color, height: "3rem" }}
			onClick={Increment}
		>
			{props.children} <strong style={{ color: "#0ff" }}>{counter}</strong>
		</button>
	);
}
