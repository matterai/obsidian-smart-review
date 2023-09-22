/** @type {import('ts-jest').JestConfigWithTsJest} */
const config = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	moduleDirectories: ['node_modules', __dirname],
}

module.exports = config;
