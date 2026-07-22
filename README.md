#Threewheeler Tracking API

A Node.js & Express RESTful API for tracking vehicles, updating locations, and managing location data in real time.

First generate seed data using this prompt

Generate seed data for a Sri Lanka Police Tuk-Tuk Monitoring System as a single JSON object with five keys: provinces, districts, stations, vehicles, and pings.
Requirements:
- 9 provinces: id, name
- 25 districts: id, name, province_id
- At least 20 stations: id, name, district_id
- At least 200 vehicles: id, registration_number, device_id, station_id
- At least 7 days of pings per vehicle: id, vehicle_id, latitude, longitude, timestamp
CRITICAL: Every foreign key must reference an id that actually exists in the parent list. No orphaned records.

