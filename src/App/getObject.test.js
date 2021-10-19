const getObject = require("./getObject")

test("getObject returns {hi: \"hi\", my: \"my\"}", () => {
    expect(getObject("hi", "my")).toEqual({hi: "hi", my: "my"})
})