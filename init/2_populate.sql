INSERT INTO breeds (breed_name, lifespan) VALUES ('Labrador', 10);
INSERT INTO breeds (breed_name, lifespan) VALUES ('German Shepherd', 9);
INSERT INTO breeds (breed_name, lifespan) VALUES ('Golden Retriever', 10);
INSERT INTO breeds (breed_name, lifespan) VALUES ('Bulldog', 8);
INSERT INTO breeds (breed_name, lifespan) VALUES ('Beagle', 12);
INSERT INTO breeds (breed_name, lifespan) VALUES ('Poodle', 12);
INSERT INTO breeds (breed_name, lifespan) VALUES ('Boxer', 10);

INSERT INTO pets (pet_name, age, breed_id) VALUES ('Golda', 3, (SELECT id FROM breeds WHERE breed_name = 'Labrador'));
INSERT INTO pets (pet_name, age, breed_id) VALUES ('Begin', 5, (SELECT id FROM breeds WHERE breed_name = 'German Shepherd'));
INSERT INTO pets (pet_name, age, breed_id) VALUES ('Ben Gurion', 4, (SELECT id FROM breeds WHERE breed_name = 'Golden Retriever'));
INSERT INTO pets (pet_name, age, breed_id) VALUES ('Bibi', 2, (SELECT id FROM breeds WHERE breed_name = 'Bulldog'));
INSERT INTO pets (pet_name, age, breed_id) VALUES ('Eshkol', 7, (SELECT id FROM breeds WHERE breed_name = 'Beagle'));
INSERT INTO pets (pet_name, age, breed_id) VALUES ('Rabin', 73, (SELECT id FROM breeds WHERE breed_name = 'Poodle'));
INSERT INTO pets (pet_name, age, breed_id) VALUES ('Shamir', 6, (SELECT id FROM breeds WHERE breed_name = 'Boxer'));
INSERT INTO pets (pet_name, age, breed_id) VALUES ('Peres', 2, (SELECT id FROM breeds WHERE breed_name = 'Labrador'));
INSERT INTO pets (pet_name, age, breed_id) VALUES ('Barak', 8, (SELECT id FROM breeds WHERE breed_name = 'German Shepherd'));
INSERT INTO pets (pet_name, age, breed_id) VALUES ('Sharon', 5, (SELECT id FROM breeds WHERE breed_name = 'Golden Retriever'));
INSERT INTO pets (pet_name, age, breed_id) VALUES ('Olmert', 3, (SELECT id FROM breeds WHERE breed_name = 'Bulldog'));
INSERT INTO pets (pet_name, age, breed_id) VALUES ('Bennet', 4, (SELECT id FROM breeds WHERE breed_name = 'Beagle'));
INSERT INTO pets (pet_name, age, breed_id) VALUES ('Lapid', 6, (SELECT id FROM breeds WHERE breed_name = 'Poodle'));

