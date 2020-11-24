/* Helper file that will contains functions used by other files and components */

// Call API based on passed url and save data
export const getResources = (url, setData) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      setData(data);
    })
    .catch((err) => console.error(err));
};
