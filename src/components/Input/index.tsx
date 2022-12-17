import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import * as S from './style'

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string;
}
interface ITextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	label: string;
}

export function Input({label, ...rest}: IInputProps) {
	return (
		<S.DivFloat>
			<S.Input className='input-float' {...rest}/>
			<S.Label className='label-float'>{label}</S.Label>
		</S.DivFloat>
	);
};

export function Textarea({label, ...rest}: ITextAreaProps) {
	return (
		<S.DivFloat>
			<S.InputTextArea className='input-float' {...rest}/>
			<S.Label className='label-float'>{label}</S.Label>
		</S.DivFloat>
	);
}
