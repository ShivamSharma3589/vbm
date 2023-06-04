/**
 * THIS FILE CONTAINS METHOD REQUIRES FOR MAKING API REQUESTS
 * @author: shivayasharma1149@gmail.com
 * @date : 04 June 2023
 */


export function getData(url) {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
      return response.json();
    })
    .catch(error => {
      console.error("Error:", error);
    });
}


