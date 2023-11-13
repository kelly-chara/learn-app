export interface Logindata {
	email: string;
	password: string;
}
export interface ApiResponse {
	successful: string;
	result: string;
	user: {
		name: string;
		email: string;
	};
}
