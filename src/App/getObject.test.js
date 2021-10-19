import {getObject} from "./getObject";

test("getObject returns {hi: \"hi\", my: \"my\"}", () => {
    expect(getObject("hi", "my")).toEqual({hi: "hi", my: "my"})
})