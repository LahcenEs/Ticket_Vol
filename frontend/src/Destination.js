import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import parisImage from './New.jpg'; // Importing Paris image
import londonImage from './london.jpg'; // Importing London image
import berlinImage from './berlin.jfif'; // Importing Berlin image
import romeImage from './rome.jpg'; // Importing Rome image
//import DestinationDetails from './DestinationDetails';
import barcelonaImage from './barcelon.jpg'; // Importing Barcelona image
import sydneyImage from './sydny.jpg'; // Importing Sydney image

const Destinations = () => {
  // Sample top destinations data
  const initialDestinations = [
    { id: 1, name: 'Paris', country: 'France', image: parisImage, description: 'Paris is the capital city of France. It is known for its romantic ambiance, art, fashion, and culture.' },
    { id: 2, name: 'London', country: 'United Kingdom', image: londonImage, description: 'London is the capital city of England and the United Kingdom. It is a global city known for its history, culture, landmarks, and diversity.' },
    { id: 3, name: 'Berlin', country: 'Germany', image: berlinImage, description: 'Berlin is the capital city of Germany. It is known for its vibrant arts scene, nightlife, and historic sites, such as the Berlin Wall and Brandenburg Gate.' },
    // Add more destinations as needed
  ];

  const [destinations, setDestinations] = useState(initialDestinations.slice(0, 3)); // Initially display first 3 destinations
  const [showMore, setShowMore] = useState(false); // State to track whether to show more destinations or not
  const [searchQuery, setSearchQuery] = useState(''); // State to track the search query

  const handleExploreMore = () => {
    // If additional destinations are already shown, do not add more
    if (showMore) return;

    // Assuming we have more destinations to show
    const moreDestinations = [
      { id: 4, name: 'Rome', country: 'Italy', image: romeImage, description: 'Rome is the capital city of Italy. It is known for its rich history, ancient ruins, and iconic landmarks such as the Colosseum and Vatican City.' },
      { id: 5, name: 'Barcelona', country: 'Spain', image: barcelonaImage, description: 'Barcelona is the capital city of the Catalonia region in Spain. It is known for its architecture, beaches, and vibrant culture.' },
      { id: 6, name: 'Sydney', country: 'Australia', image: sydneyImage, description: 'Sydney is the capital city of New South Wales and one of Australia\'s largest cities. It is known for its iconic Sydney Opera House, Sydney Harbour Bridge, and beautiful beaches.' },
      // Add more destinations as needed
    ];
    setDestinations([...destinations, ...moreDestinations]); // Add more destinations to the current list
    setShowMore(true); // Update state to indicate that additional destinations are shown
  };

  const filteredDestinations = destinations.filter(destination =>
    destination.name.toLowerCase().startsWith(searchQuery.toLowerCase())
  );

  const handleSearchChange = event => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="container mt-5 destination">
      <h2 className="text-center mb-4">Top Destinations</h2>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search by first letter of destination name"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <div className="row">
        {filteredDestinations.map(destination => (
          <div key={destination.id} className="col-md-4 mb-4">
            <div className="card">
              <img src={destination.image} className="card-img-top" alt={destination.name} />
              <div className="card-body text-center">
                <h5 className="card-title text-success">{destination.name}</h5>
                <p className="card-text">{destination.country}</p>
                <p className="card-text">{destination.description}</p>
                <div className=''>
                  <button className="btn btn-success mr-2">View Details</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        {!showMore && <button className="btn btn-primary" onClick={handleExploreMore}>Explore More</button>}
      </div>
    </div>
  );
};

export default Destinations;