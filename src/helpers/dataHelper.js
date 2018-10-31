export const carBrands = {
	"audi": "Audi",
	"scoda": "Scoda",
	"fiat": "Fiat",
	"bmw": "BMW",
	"opel": "Opel",
	"vw": "Volkswagen",
	"tesla": "Tesla",
	"mercedes": "Mercedes Benz"
};

export default brand => ((Object.prototype.hasOwnProperty.call(carBrands, brand)) ? carBrands[brand] : brand)