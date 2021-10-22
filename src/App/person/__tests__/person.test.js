import person from "../person";

jest.mock("../person")

it("uses mock person", () => {
    console.log("name = ", person.name);
    expect(person.name).toBe("Mike")
})