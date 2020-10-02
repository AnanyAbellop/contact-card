const baseUrl = "https://assets.breatheco.de/apis/fake/contact/";
const getState = ({ getStore, setStore, getActions }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			people: [],
			newPeople: []
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			addPeople: async people => {
				//console.log(people);
				try {
					const response = await fetch(`${baseUrl}`, {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(people)
					});
					//alert(people);
					if (response.ok) {
						let people = await response.json();
						setStore({ people: people });
						//actions.getPeople();
					} else {
						console.log(`response: ${response.status} ${response.statusText}`);
					}
				} catch (error) {
					console.log(`error en el addpeople!!!!!: ${error}`);
				}
			},
			getPeople: async () => {
				//alert("entre!!!! ");
				try {
					const response = await fetch(`${baseUrl}agenda/albany_agenda`);

					if (response.ok) {
						let people = await response.json();
						setStore({
							people: people
						});
					} else {
						console.log(`response: ${response.status} ${response.statusText}`);
					}
				} catch (error) {
					console.log(`error en el get people!!!!!: ${error}`);
				}
			}
		}
	};
};

export default getState;
