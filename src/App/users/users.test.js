import {getUser} from "./users";

// global.fetch = jest.fn(() =>
//     Promise.resolve({
//         json: () => Promise.resolve({name: "Alex Kor"})
//     })
// )

it("returns user", async () => {
    const acceptedUser = await getUser(1)
    console.log(acceptedUser);
    // expect(acceptedUser.name).toBe("Leanne Graham")
})