module.exports = {
	preset: '@testing-library/react-native',
	bail: true,
	verbose: true,
	rootDir: 'src',
	setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect', '@testing-library/react-native/cleanup-after-each'],
	testMatch: ['**/**/*.test.js'],
	modulePathIgnorePatterns: ['<rootDir>/node_modules'],
	transformIgnorePatterns: ['node_modules/(?!victory|react-native-svg|react-native)'],
	coveragePathIgnorePatterns: ['node_modules/', 'package.json', 'package-lock.json', '<rootDir>/jest.config.js', '.snap'],
};
