jest.mock("../services/fetch_media")
import fetch_media from "../services/fetch_media"

it("Fetching top media", async () => {
  const results = await fetch_media()
  expect(results.length).not.toBe(0)
})
