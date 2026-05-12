import { useState } from "react";

type InputPropsType = {
	currentText: string
	setCurrentText:(value: string)=> void}
export const Input = ({currentText, setCurrentText}: InputPropsType) => {

	const onChangeHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
		setCurrentText(event.currentTarget.value);
	};

	return (
	  <input id={'hw04-input'} type="text" value={ currentText} onChange={onChangeHandler}/>
	);
};
