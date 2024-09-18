import React from 'react';
import './pageContent.css'
import mask from '../../images/Mask-Detection.png'
import { useEffect, useState } from 'react';

function PageContent() {
  const [currentReading, setCurrentReading] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  
  const fetchData = () => {
    setIsLoading(true)
    setError(null)
    fetch('http://localhost:4000/current_reading')
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json()
      })
      .then(data => {
        console.log("Fetched data:", data); // For debugging
        setCurrentReading(data);
        setIsLoading(false);
      })
      .catch(e => {
        console.error("Error fetching data:", e);
        setError(e.message);
        setIsLoading(false);
      })
  }
  
  useEffect(() => {
    fetchData();
    // Set up polling every 5 seconds
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, [])
  
  return (
    <div className="dashboard">
      <div className="upper-section">
        <h1>Real-time Monitoring</h1>
        <img src={mask} alt="Mask Detection" />
      </div>
      
      <div className="lower-section">
        {isLoading ? (
          <div className="text-box">
            <h2>Loading data...</h2>
          </div>
        ) : error ? (
          <div className="text-box">
            <h2>Error: {error}</h2>
          </div>
        ) : currentReading ? (
          <>
            <div className="text-box">
              <h2>Temperature: {currentReading.temperature}°C</h2>
            </div>
            <div className="text-box">
              <h2>Mask: {currentReading.mask_status}</h2>
            </div>
            <div className="text-box">
              <h2>Last Updated: {new Date(currentReading.timestamp).toLocaleString()}</h2>
            </div>
          </>
        ) : (
          <div className="text-box">
            <h2>No data available</h2>
          </div>
        )}
      </div>
    </div>
  )
}

export default PageContent