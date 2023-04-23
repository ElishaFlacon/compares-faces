create TABLE person (
    id SERIAL PRIMARY KEY,
    fullname VARCHAR,
    age INT,
    sex VARCHAR DEFAULT 'не было',
    descripton VARCHAR
);

create TABLE faces (
    id SERIAL PRIMARY KEY,
    picture VARCHAR,
    person_id INT,
    FOREIGN KEY (person_id) references person(id)
);