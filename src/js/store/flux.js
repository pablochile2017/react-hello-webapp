const getState = ({ getStore, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			characters: [],
			vehicles: [],
			planets: [],
			nextCharacters: null,
			nextVehicles: null,
			nextPlanets: null,
			previousCharacters: null,
			previousVehicles: null,
			previousPlanets: null
		},
		actions: {
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			getFetch: fetching => {
				for (let i in fetching) {
					fetch(fetching[i].url)
						.then(resp => resp.json())
						.then(data => {
							setStore({
								[fetching[i].storePlace]: data.results,
								[fetching[i].nextUrl]: data.next,
								[fetching[i].prevUrl]: data.previous
							});
							console.log(this.state.store.planets);
						})
						.catch(error => console.log(error));
				}
			}
		}
	};
};

export default getState;
