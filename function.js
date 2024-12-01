// Function to fetch JSON from a given URL
window.function = async function (url) {
  // Validate and extract the URL
  url = url.value ?? "";

  // Return an error message if the URL is missing or invalid
  if (!url) {
    return "Invalid or missing URL.";
  }

  try {
    // Fetch the JSON data
    const response = await fetch(url);

    // Handle response errors
    if (!response.ok) {
      return `Error: ${response.statusText} (Status Code: ${response.status})`;
    }

    // Parse and return JSON data as a string
    const jsonData = await response.json();
    return JSON.stringify(jsonData, null, 2); // Pretty-print the JSON
  } catch (error) {
    // Return any errors encountered
    return `Error: ${error.message}`;
  }
};
