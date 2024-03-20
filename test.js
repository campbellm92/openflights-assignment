//  Here's a basic example of how you can achieve this:
// Sample datasets (arrays)
const dataset1 = [ // the json file (FLIGHTS)
  { id: 1, name: 'Airline A', code: 'AAL' },
  { id: 2, name: 'Airline B', code: 'UAL' },
  // Add more entries as needed
];
const dataset2 = [ // the json file (AIRPORTS)
  { id: 1, country: 'USA', status: 'Active' },
  { id: 2, country: 'Canada', status: 'Active' },
  // Add more entries as needed
];
// Function to merge datasets based on a common key
function mergeDatasets(dataset1, dataset2) {
  // Create an empty array to store the merged data
  const mergedData = [];
  // Loop through the first dataset
  dataset1.forEach(entry1 => {
    // Find matching entry in the second dataset based on the common key (id in this example)
    const matchingEntry = dataset2.find(entry2 => entry2.id === entry1.source_airport_id);
    // If a matching entry is found, merge the data
    if (matchingEntry) {
      const mergedEntry = { ...entry1, ...matchingEntry };
      mergedData.push(mergedEntry);
    }
  });
  return mergedData;
}
// Merge the datasets
const mergedDataset = mergeDatasets(dataset1, dataset2);
// Print the merged dataset
console.log(mergedDataset);