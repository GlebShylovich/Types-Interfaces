type EmptyOrNum = "empty" | number;

type ClothesWarehouse = {
	jackets: EmptyOrNum;
	hats: EmptyOrNum;
	socks: EmptyOrNum;
	pants: EmptyOrNum;
}

type StationeryWarehouse = {
	scissors: EmptyOrNum;
	paper: "empty" | boolean;
}

type AppliancesWarehouse = {
	dishwashers: EmptyOrNum;
	cookers: EmptyOrNum;
	mixers: EmptyOrNum;
}

interface TotalWarehouse extends ClothesWarehouse, StationeryWarehouse, AppliancesWarehouse {
	deficit: boolean;
	date: Date;
}

const totalData: TotalWarehouse = {
	jackets: 5,
	hats: "empty",
	socks: "empty",
	pants: 15,
	scissors: 15,
	paper: true,
	dishwashers: 3,
	cookers: "empty",
	mixers: 14,
	deficit: true,
	date: new Date()
};

function printReport(data: TotalWarehouse) {
	let array = Object.entries(data);
	let sortedItems = Object.keys(array).filter(([_, value]) => value === "empty").map(([key]) => key);
	if (sortedItems) {
		return `We need this items: ${sortedItems.join(", ")}`;
	} else {
		return "Everything fine";
	}
}

console.log(printReport(totalData));