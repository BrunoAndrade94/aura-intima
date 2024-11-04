import React, { createContext, useState } from 'react';

export const InputContext = createContext();

export function InputProvider({ children }) {
	const [inputContext, setInputContext] = useState('')

	return (
		<InputContext.Provider value={{ inputContext, setInputContext }}>
			{children}
		</InputContext.Provider>
	)
}