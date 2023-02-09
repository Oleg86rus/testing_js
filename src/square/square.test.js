const square = require('./square')

describe('square', () => {
	let mockValue
	beforeEach(() => {
	//добавить в БД
	})
	
	beforeAll(() => {
	
	})
	
	test('Корректное значение', () => {
		const spyMathPow = jest.spyOn(Math, 'pow')
		square(2)
		expect(spyMathPow).toBeCalledTimes(1)
	})
	test('Корректное значение 2', () => {
		const spyMathPow = jest.spyOn(Math, 'pow')
		square(1)
		expect(spyMathPow).toBeCalledTimes(0)
	})
	
	afterEach(() => {
		// необходимо очищать моки, т.к. они накапливают вызовы
		jest.clearAllMocks()
	})
	
	afterAll(() => {
		//....
	})
})