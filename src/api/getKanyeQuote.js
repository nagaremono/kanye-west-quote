async function getKanyeQuote() {
  const quote = await fetch('https://api.kanye.rest', {
    method: 'GET',
    mode: 'cors',
  })

  return await quote.json();
}

export default getKanyeQuote