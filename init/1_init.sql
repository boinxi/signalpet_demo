CREATE TABLE breeds (
    id SERIAL PRIMARY KEY,
    breed_name VARCHAR(255) NOT NULL,
    lifespan INT NOT NULL
);

CREATE TABLE pets (
    id SERIAL PRIMARY KEY,
    pet_name VARCHAR(255) NOT NULL,
    age INT NOT NULL,
    breed_id INT,
    FOREIGN KEY (breed_id) REFERENCES breeds(id)
);

CREATE TABLE scans (
    id SERIAL PRIMARY KEY,
    pet_id INT NOT NULL,
    image_url TEXT NOT NULL,
    FOREIGN KEY (pet_id) REFERENCES pets(id) ON DELETE CASCADE
);

