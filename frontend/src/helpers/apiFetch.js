const apiFetch = async (route, method, body) => {
  try {
    if (!body){
      return await fetch(`http://localhost:3000${route}`, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include"
      })
    }

    const response = await fetch(`http://localhost:3000${route}`,{
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      credentials: "include"
    })

    if (!response.ok){
      console.log(response)
      throw new Error('Network response was not ok')
    }
    return await response.json()
  } catch (error) {
    console.log(error)
    return null
  }
}

export {apiFetch}