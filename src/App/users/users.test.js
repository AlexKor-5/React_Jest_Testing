import {getUser} from "./users";
import {enableFetchMocks} from 'jest-fetch-mock'

enableFetchMocks()

// youTube : https://www.youtube.com/watch?v=yhUep7E9O20&ab_channel=LeighHalliday
// Tutorial

beforeEach(() => {
    fetch.resetMocks()
})

it("returns user", async () => { //resolve
    fetch.mockResponseOnce(JSON.stringify({name: "Alex Kor"}))
    const acceptedUser = await getUser(1)
    console.log(acceptedUser);

    expect(fetch).toHaveBeenCalledTimes(1)
    expect(acceptedUser.name).toBe("Alex Kor")
})

it("catches an error", async () => { // reject
    fetch.mockReject(() => "Failure")
    const acceptedUser = await getUser(1)
    console.log(acceptedUser)

    expect(fetch).toHaveBeenCalledTimes(1)
    expect(acceptedUser).toBe(null)
})

it("fetches multiple times", async () => {
    fetch.mockResponses(
        [
            JSON.stringify([{name: "Alex Korr"}]),
            {status: 200}
        ],
        [
            JSON.stringify([{name: "Mike Kor"}]),
            {status: 200}
        ]
    )
    const acceptedUser = await getUser(1)
    console.log(acceptedUser);

})