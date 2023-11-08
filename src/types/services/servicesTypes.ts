export interface logindata {
	email: string;
	password: string;
}
export interface apiResponse {
	successful: string;
	result: string;
	user: {
		name: string;
		email: string;
	};
}
