const matchingNumber = require('./index');

test('matchingNumber function is defined', () => {
    expect(typeof matchingNumber).toEqual('function');
});

test('Using the provided array, create a second array that only includes the numbers with the 801 area code. (The area code is the first 3 numbers.)', () => {
    expect(matchingNumber(["801-766-9754", "801-545-5454", "801-796-8010", "801-009-0909", "801-777-6655"])).toEqual(["801-766-9754", "801-545-5454", "801-796-8010", "801-009-0909", "801-777-6655"]);
  });