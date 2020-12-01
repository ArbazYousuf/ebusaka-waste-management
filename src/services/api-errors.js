export function handleApiErrors(response) {
    console.log('response =====',response)
    // no-throw-literal
    if (!response.ok) { throw "error"; }

    return response
}