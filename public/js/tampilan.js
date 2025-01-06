fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('ip-address').textContent = data.ip;
  })
  .catch(error => console.error('Error fetching IP:', error));

navigator.getBattery().then(function(battery) {
  updateBatteryStatus(battery);

  battery.addEventListener('levelchange', function() {
    updateBatteryStatus(battery);
  });

  battery.addEventListener('chargingchange', function() {
    updateBatteryStatus(battery);
  });
});

function updateBatteryStatus(battery) {
  const batteryLevel = Math.floor(battery.level * 100);
  const chargingStatus = battery.charging ? 'Charging' : 'Not Charging';

  document.getElementById('battery-level').textContent = batteryLevel;
  document.getElementById('charging-status').textContent = chargingStatus;
}
