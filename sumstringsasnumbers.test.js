const sumStringsAsNumbers = require('./sumstringsasnumbers')

test('Should sum both strings as numbers correctly', () => {
    expect(sumStringsAsNumbers('', '5')).toBe('5')
    expect(sumStringsAsNumbers("9567", "800")).toBe('10367')
    expect(sumStringsAsNumbers('99', '1')).toBe('100')
    expect(sumStringsAsNumbers('00103', '08567')).toBe('8670')
    expect(sumStringsAsNumbers('712569312664357328695151392', '8100824045303269669937')).toBe('712577413488402631964821329')
})