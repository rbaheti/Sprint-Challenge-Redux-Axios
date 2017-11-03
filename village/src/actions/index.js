import axios from 'axios';

export const GET_SMURFS = "GET_SMURFS";
export const ADD_SMURF = "ADD_SMURF";
//export const UPDATE_SMURF = "UPDATE_SMURF";

export const getSmurfs = () => {
	const smurfsEndpoint = 'http://localhost:3333/smurfs';
	const smurfsRequest = axios.get(smurfsEndpoint);

	return {
		type: GET_SMURFS,
		payload: smurfsRequest,
	};
}

export const addSmurf = (smurf) => {
	const addSmurfEndpoint = 'http://localhost:3333/smurfs';
    const addSmurfRequest = axios.post(addSmurfEndpoint, smurf);
    
    console.log(addSmurfRequest);
    
    return {
		type: ADD_SMURF,
		payload: addSmurfRequest,
	};
}

// export const updateSmurf = (smurf) => {
// 	const updateSmurfEndpoint = 'http://localhost:3333/smurfs';
//     const updateSmurfRequest = axios.put(updateSmurfEndpoint, smurf);
    
//     console.log(updateSmurfRequest);
    
//     return {
// 		type: UPDATE_SMURF,
// 		payload: updateSmurfRequest,
// 	};
// }