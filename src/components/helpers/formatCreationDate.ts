export const formatCreationDate = (inputDate: string): string => {
	if (!inputDate) return;
	const [day, month, year] = inputDate.split('/');
	const formattedDate = `${day}.${month}.${year}`;
	return formattedDate;
};
