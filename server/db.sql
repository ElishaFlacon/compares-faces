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

-- да я знаю что в первой таблице description написано не правильно
-- это патаму чта мне плевать + весело + отстаньте + играюсь + попозже ультранасилие