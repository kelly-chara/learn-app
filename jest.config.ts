module.exports = {
	// The root of your source code, typically /src
	// `<rootDir>` is a token Jest substitutes
	roots: ['<rootDir>/src'],
	modulePaths: ['<rootDir>'],
	moduleDirectories: ['node_modules'],
	testPathIgnorePatterns: [`node_modules`],
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
	},
	testRegex: '(/tests/.*|(\\.|/)(test|spec))\\.tsx?$',
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
