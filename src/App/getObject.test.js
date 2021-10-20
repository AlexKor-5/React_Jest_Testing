import {getObject} from "./getObject";

test("getObject returns {hi: \"hi\", my: \"my\"}", () => {
    expect(getObject("hi", "my")).toEqual({hi: "hi", my: "my"})
})

const myArr = [1, 2, 6, "he", 4]
test("...", () => {
    expect(myArr).toContain("he")
})

const myMock = jest.fn()

// console.log(myMock.mock)

function myForEach(items, callback) {
    for (let index = 0; index < items.length; index++) {
        items[index] = callback(items[index]);
    }
    // console.log(items)
}


// myForEach(arr, myMockCallback)
// console.log(myMockCallback.mock.calls)

test("fun result", () => {
    const callback = item => item + 10
    const arr = [2, 4, 5, 8];
    const myMockCallback = jest.fn(callback)
    myForEach(arr, myMockCallback)

    console.log(myMockCallback.mock);
    expect(myMockCallback.mock.calls.length).toBe(4)
})

test("mock testing", () => {
    const myLittleMock = jest.fn()
    myLittleMock.mockReturnValueOnce("returned value!").mockReturnValueOnce(true)
    console.log(myLittleMock());
    console.log(myLittleMock());
})

test("func testing ...", () => {
    const myFun = (a, b, c) => {
        return a + b + c
    }
    const res = myFun(2, 5, 3)
    const mockMyFun = jest.fn(myFun)
    mockMyFun(2, 5, 3)
    mockMyFun(3, 6, 2)
    console.log(mockMyFun.mock);
    expect(mockMyFun.mock.calls[0][0]).toBe(2)
    expect(mockMyFun.mock.calls[0][1]).toBe(5)
    expect(mockMyFun.mock.calls[0][2]).toBe(3)
    ////sec
    expect(mockMyFun.mock.calls[1][0]).toBe(3)

    // expect(res).toBe(10)
})

test("llll", () => {
    const filterTestFn = jest.fn();
    filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false);
    const result = [11, 12].filter(num => filterTestFn(num));
    expect(result).toEqual([11])
    expect(result.length).toBe(1)
})

test("mocking", () => {
    const func = val => val

    const myMockFn = jest
        .fn(func)
        .mockReturnValue('default')
        .mockImplementationOnce(scalar => 42 + scalar)
        .mockName('add42');
    console.log(myMockFn(3));
    console.log(myMockFn(3));
})

