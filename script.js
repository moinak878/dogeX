var contract;
// web3 provider

$(document).ready(function () {
	web3 = new Web3(web3.currentProvider);
	var abi = [
		{
			constant: false,
			inputs: [
				{
					name: "_name",
					type: "string",
				},
			],
			name: "setName",
			outputs: [],
			payable: false,
			stateMutability: "nonpayable",
			type: "function",
		},
		{
			inputs: [],
			payable: false,
			stateMutability: "nonpayable",
			type: "constructor",
		},
		{
			constant: true,
			inputs: [],
			name: "getName",
			outputs: [
				{
					name: "",
					type: "string",
				},
			],
			payable: false,
			stateMutability: "view",
			type: "function",
		},
	];
	var address = "0xc61c741beb6daebd13289809486653c8007db649";
	contract = new web3.eth.Contract(abi, address);

	contract.methods
		.getName()
		.call()
		.then(function (result) {
			$("#name").html(result);
		});
});

$("#setName").click(() => {
	var name;
	name = $("#name").val();
	contract.methods.setName(name).send({ from: acc });
	web3.eth
		.then(function (accounts) {
			var acc = "0xd6f29976506EFDE7152d1cfE912a5F77D29f7c50";
			return contract.methods.setName(name).send({ from: acc });
		})
		.then((result) => {
			console.log("success", result);
		})
		.catch((err) => {
			console.log("error", err);
		});
});
