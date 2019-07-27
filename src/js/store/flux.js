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
			]
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

            nuevaPagina: () => {
                fetch("https://swapi.co/api/people/?page=2")
					.then(resp => resp.json())
					.then(data => {
						this.setState({
							store: {
								...this.state.store,
								[fetching[i].storePlace]: data.results,
								[fetching[i].nextUrl]: data.next
							}
						});
					})
					.catch(error => console.log(error));

            }
		}
	};
};

export default getState;
