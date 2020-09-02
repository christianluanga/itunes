const fetch_media = async (url) => {
  const res = await fetch(url)
  const results = res.json()
  //console.log(results)
  return results
}
export default fetch_media
