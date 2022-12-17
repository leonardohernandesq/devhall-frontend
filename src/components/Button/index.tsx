import { ButtonHTMLAttributes, ReactNode } from 'react'
import * as S from './style'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
	children: ReactNode;
	bg: string;
	color: string;
}

export function Button({children, bg, color, ...rest}: IButtonProps) {
	return (
		<>
			<S.Button background={bg} color={color} {...rest}>
				{children}
			</S.Button>
		</>
	)
}
