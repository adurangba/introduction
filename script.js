window.onload = function () {
    // Display current time in UTC
    function updateTime() {
        const currentTimeUTC = new Date().toUTCString();
        document.querySelector('[data-testid="currentTimeUTC"]').textContent = currentTimeUTC;
    }

    // Display current day of the week
    function updateDay() {
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const currentDay = daysOfWeek[new Date().getUTCDay()];
        document.querySelector('[data-testid="currentDay"]').textContent = currentDay;
    }

    updateTime();
    updateDay();

    // Update time every second
    setInterval(updateTime, 1000);
};
