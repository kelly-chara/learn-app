export const formatCreationDate = (inputDate: string): string => {
	const [day, month, year] = inputDate.split('/');
	const formattedDate = `${day}.${month}.${year}`;
	return formattedDate;
};
