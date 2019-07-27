import React from "react";
import getState from "./flux.js";

// Don't change, here is where we initialize our context, by default its just going to be Null.
export const Context = React.createContext(null);

// This function injects the global store to any view/component where you want to use it, we will inject the context to Layout.jsx, you can see it here:
// https://github.com/4GeeksAcademy/react-hello-webapp/blob/master/src/js/layout.jsx#L35
const injectContext = PassedComponent => {
	class StoreWrapper extends React.Component {
		constructor(props) {
			super(props);

			//this will be passed as the contenxt value
			this.state = getState({
				getStore: () => this.state.store,
				setStore: updatedStore =>
					this.setState({
						store: Object.assign(this.state.store, updatedStore)
					})
			});
		}

		componentDidMount() {
			const fetching = [
				{ url: "https://swapi.co/api/people/?page=1", storePlace: "characters", nextUrl: "nextCharacters" },
				{ url: "https://swapi.co/api/vehicles/?page=1", storePlace: "vehicles", nextUrl: "nextVehicles" },
				{ url: "https://swapi.co/api/planets/?page=1", storePlace: "planets", nextUrl: "nextPlanets" }
			];
			for (let i in fetching) {
				fetch(fetching[i].url)
					.then(resp => resp.json())
					.then(data => {
						this.setState({
							store: {
								...this.state.store,
								[fetching[i].storePlace]: data.results,
								[fetching[i].nextUrl]: data.next
							}
						});
						console.log(this.state.store);
					})
					.catch(error => console.log(error));
			}
		}

		render() {
			// the initial value for the context its not null anymore, but the current state of this component,
			// the context will have a getStore and setStore functions available then, because they were declared
			// on the state of this component
			return (
				<Context.Provider value={this.state}>
					<PassedComponent {...this.props} />
				</Context.Provider>
			);
		}
	}
	return StoreWrapper;
};

export default injectContext;
