const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			character: [],
			planet: [],
			vehicle: [],
			favorite: [],
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
			// Use getActions to call a function within a fuction

			HandleFavorites: (name, url) => {
				setStore({
					favorite: [...getStore().favorite, {"Name": name, "Url": url}]
				});
				console.log("Saved", getStore().favorite)		
			},

			DeleteFavorites: (name, url) => {
				let newFavorite =  getStore().favorite.filter((element) => element.name !== name);
				setStore({
					favorites: newFavorite
				});
				console.log("deleted", getStore().favorite)
			},

			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				
					fetch("https://swapi.dev/api/people").then().then(data => setStore({ "foo": data.bar }))
					fetch("https://swapi.dev/api/planet").then().then(data => setStore({ "foo": data.bar }))
					fetch("https://swapi.dev/api/vehicle").then().then(data => setStore({ "foo": data.bar }))
				
			},
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
			}
		}
	};
};

export default getState;
