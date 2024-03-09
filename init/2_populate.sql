INSERT INTO breeds (breed_name, lifespan) VALUES ('Labrador', 10);
INSERT INTO breeds (breed_name, lifespan) VALUES ('German Shepherd', 9);
INSERT INTO breeds (breed_name, lifespan) VALUES ('Golden Retriever', 10);
INSERT INTO breeds (breed_name, lifespan) VALUES ('Bulldog', 8);
INSERT INTO breeds (breed_name, lifespan) VALUES ('Beagle', 12);
INSERT INTO breeds (breed_name, lifespan) VALUES ('Poodle', 12);
INSERT INTO breeds (breed_name, lifespan) VALUES ('Boxer', 10);

INSERT INTO pets (pet_name, age, breed_id) VALUES ('Max', 3, (SELECT id FROM breeds WHERE breed_name = 'Labrador'));
INSERT INTO pets (pet_name, age, breed_id) VALUES ('Bella', 5, (SELECT id FROM breeds WHERE breed_name = 'German Shepherd'));
INSERT INTO pets (pet_name, age, breed_id) VALUES ('Charlie', 4, (SELECT id FROM breeds WHERE breed_name = 'Golden Retriever'));
INSERT INTO pets (pet_name, age, breed_id) VALUES ('Daisy', 2, (SELECT id FROM breeds WHERE breed_name = 'Bulldog'));
INSERT INTO pets (pet_name, age, breed_id) VALUES ('Luna', 7, (SELECT id FROM breeds WHERE breed_name = 'Beagle'));
INSERT INTO pets (pet_name, age, breed_id) VALUES ('Rocky', 73, (SELECT id FROM breeds WHERE breed_name = 'Poodle'));
INSERT INTO pets (pet_name, age, breed_id) VALUES ('Lucy', 6, (SELECT id FROM breeds WHERE breed_name = 'Boxer'));
INSERT INTO pets (pet_name, age, breed_id) VALUES ('Bailey', 2, (SELECT id FROM breeds WHERE breed_name = 'Labrador'));
INSERT INTO pets (pet_name, age, breed_id) VALUES ('Molly', 8, (SELECT id FROM breeds WHERE breed_name = 'German Shepherd'));
INSERT INTO pets (pet_name, age, breed_id) VALUES ('Cooper', 5, (SELECT id FROM breeds WHERE breed_name = 'Golden Retriever'));
INSERT INTO pets (pet_name, age, breed_id) VALUES ('Buddy', 3, (SELECT id FROM breeds WHERE breed_name = 'Bulldog'));
INSERT INTO pets (pet_name, age, breed_id) VALUES ('Jack', 4, (SELECT id FROM breeds WHERE breed_name = 'Beagle'));
INSERT INTO pets (pet_name, age, breed_id) VALUES ('Toby', 6, (SELECT id FROM breeds WHERE breed_name = 'Poodle'));

