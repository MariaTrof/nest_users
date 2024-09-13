CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    user_name VARCHAR(100) NOT NULL,
    user_surname VARCHAR(100) NOT NULL,
    age INTEGER,               -- Возраст
    sex VARCHAR(10),          -- Пол
    problem BOOLEAN           -- Проблемы
);

-- Скрипт для миграции, заполняющий таблицу users
INSERT INTO users (user_name, user_surname, age, sex, problem) VALUES
('Иван', 'Иванов', 30, 'мужчина', FALSE),
('Анна', 'Петрова', 25, 'женщина', TRUE),
('Сергей', 'Сергеев', 40, 'мужчина', FALSE),
('Ольга', 'Сидорова', 28, 'женщина', TRUE),
('Дмитрий', 'Кузнецов', 35, 'мужчина', TRUE);

-- Генерация данных для более 1 миллиона пользователей
DO $$
BEGIN
    FOR i IN 1..1000000 LOOP
        INSERT INTO users (user_name, user_surname, age, sex, problem) VALUES
        (
            'User_' || i, 
            'Surname_' || i, 
            (FLOOR(RANDOM() * 100) + 1), -- Возраст от 1 до 100
            CASE WHEN RANDOM() < 0.5 THEN 'мужчина' ELSE 'женщина' END,
            (RANDOM() < 0.3) -- 30% пользователей с проблемами
        );
    END LOOP;
END $$;
