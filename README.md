
# Veterinary X-ray Analysis System

This project is a backend system designed for veterinarians to manage X-ray images for animals. It utilizes Express.js as the backend framework and PostgreSQL for database management.

## Features

- **Image Upload and Storage:** Allows uploading X-ray images for different animals and storing them in cloud storage via Cloudinary.
- **Animal Information Management:** Stores and manages information about different animals in a PostgreSQL database.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- Docker and Docker Compose
- Internet connection- the project uses Cloudinary as animage store and needs internet access

## Setup Instructions

1. **Clone the Repository**
`git clone https://github.com/boinxi/signalpet_demo.git`
   Clone this repository to your local machine.
2. **Run**
   run `docker-compose up --build`

all set!

## Notes:
- The db will auto initialize and populate with breeds and pets.
- There is a `requests.http` file in the "misc' folder with a list of all available routes and parameters. feel free to use it.
- I (intentionally) didn't add some CRUD operations:
	- No ability to add, delete or update breeds- they are constant in my system design
	- no ability to delete or update scans after they were created.

system ERD:
![image](https://github.com/boinxi/signalpet_demo/assets/57293916/18547af9-6330-49fc-bdcb-f63192597125)
