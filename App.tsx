import React from 'react';
import { createStore } from 'redux';
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { esp } from 'esoftplay';
import * as ErrorReport from 'esoftplay/error'
import { ErrorRecovery } from 'expo';

export const store = createStore(esp.reducer())
const persistor = persistStore(store)

export default class App extends React.Component {
	Home = esp.home()

	constructor(props: any) {
		super(props)
		ErrorRecovery.setRecoveryProps(props)
		ErrorReport.getError(props.exp.errorRecovery)
	}

	render() {
		return (
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<this.Home />
				</PersistGate>
			</Provider>
		)
	}
}