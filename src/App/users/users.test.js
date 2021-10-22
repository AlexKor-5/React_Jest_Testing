import {getUser} from "./users";
import { enableFetchMocks } from 'jest-fetch-mock'
enableFetchMocks()



// global.fetch = jest.fn(() =>
//     Promise.resolve({
//         json: () => Promise.resolve({name: "Alex Kor"})
//     })
// )

it("returns user", async () => {
    fetch.mockResponseOnce(JSON.stringify({name: "Alex Kor"}))
    const acceptedUser = await getUser(1)
    console.log(acceptedUser);
    expect(acceptedUser.name).toBe("Alex Kor")
})