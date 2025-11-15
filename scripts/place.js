const staticTempC = 22;
const staticWindSpeedKPH = 12;

// Function to calculate Wind Chill 
/* 
 * Calculates the wind chill factor using the metric formula.
 * Formula: T_wc = 13.12 + 0.6215T - 11.37V^0.16 + 0.3965T * V^0.16
*/
const calculateWindChill = (tempC, windSpeedKPH) => 
    13.12 + (0.6215 * tempC) - (11.37 * Math.pow(windSpeedKPH, 0.16)) + (0.3965 * tempC * Math.pow(windSpeedKPH, 0.16));

// Main function to run when the page loads
function initializePage() {
    // Set the current year
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Set the last modified date
    document.getElementById('last-modified').textContent = document.lastModified;
    
    const windchillOutputElement = document.getElementById('windchill-output');
    
     
    if (staticTempC <= 10 && staticWindSpeedKPH > 4.8) {
        
        // Conditions are met, calculate the wind chill
        const windChill = calculateWindChill(staticTempC, staticWindSpeedKPH);
        
        // Display the result, rounded to one decimal place
        windchillOutputElement.textContent = `${windChill.toFixed(1)} °C`;
        
    } else {
        
        // Conditions are not met, display "N/A"
        windchillOutputElement.textContent = "N/A";
    }
}
initializePage();