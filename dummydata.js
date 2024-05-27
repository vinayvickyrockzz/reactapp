const dummyData = {
    // Dummy weather data for four locations
    weather: [
      { location: 'New York', temp: 15, rainfall: 10, humidity: 50 },
      { location: 'London', temp: 10, rainfall: 15, humidity: 60 },
      { location: 'Tokyo', temp: 20, rainfall: 5, humidity: 45 },
      { location: 'Sydney', temp: 25, rainfall: 8, humidity: 55 }
    ],
    // Dummy temperature data for the previous week
    temperatureData: {
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      values: [15, 16, 18, 20, 22, 19, 17]
    },
    // Dummy notes for the notepad
    notes: [
      "Remember to bring an umbrella tomorrow.",
      "Meeting with clients at 2 PM.",
      "Buy groceries on the way home."
    ]
  };
  
  export default dummyData;
  