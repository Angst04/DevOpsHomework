CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    age INT,
    major VARCHAR(100)
);

INSERT INTO students (name, age, major) VALUES
('Алиса', 20, 'Computer Science'),
('Александр', 22, 'Mathematics'),
('Виктория', 21, 'Physics'),
('Диана', 23, 'Chemistry'),
('Даша', 20, 'Biology');