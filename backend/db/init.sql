CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    display_name VARCHAR(100)
);

CREATE TABLE projects (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE likes (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    project_id INTEGER NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    project_id NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
    user_id NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

INSERT INTO users (display_name) VALUES
('AliceWonder'),
('TechGuru99'),
('ArtisticAmy'),
('CodeCrusader'),
('NatureLover'),
('PixelPioneer'),
('DreamWeaver'),
('SkyGazer');

INSERT INTO projects (user_id, title, description, image_url, created_at) VALUES
(1, 'Wonderland Journey', 'An artistic take on Lewis Carroll’s Wonderland. This project features abstract illustrations inspired by the classic story.', 'https://example.com/wonderland.jpg', '2024-11-01 14:35:00'),
(2, 'AI Chatbot Framework', 'A fully functional chatbot framework built with Python and natural language processing. It includes built-in sentiment analysis and user response tracking.', 'https://example.com/chatbot.jpg', '2024-11-02 10:15:00'),
(3, 'Modern Art Sculptures', 'A series of sculptures made from recycled materials. This collection explores the relationship between sustainability and modern design.', 'https://example.com/sculptures.jpg', '2024-11-03 08:45:00'),
(4, 'Open Source Task Manager', 'A web-based task manager that organizes projects into boards and cards. Built for teams looking to improve their workflow.', 'https://example.com/taskmanager.jpg', '2024-11-04 18:20:00'),
(5, 'Forest Photography Collection', 'A collection of photographs taken in national parks around the world. This project highlights the beauty of untouched wilderness.', 'https://example.com/forest.jpg', '2024-11-05 09:50:00'),
(6, 'Pixel Art Creator', 'A simple yet powerful tool for designing pixel art. Includes color palettes, layers, and export features.', 'https://example.com/pixelart.jpg', '2024-11-06 11:10:00'),
(7, 'Dream Journal App', 'An app designed to help people record their dreams. Features include tagging, analysis, and dream-related statistics.', 'https://example.com/dreamapp.jpg', '2024-11-07 22:30:00'),
(8, 'Astronomy Visualization Tools', 'Interactive tools to visualize constellations and planetary movements. Designed for amateur astronomers and educators.', 'https://example.com/astronomy.jpg', '2024-11-08 16:45:00');
(3, 'Cozy Knitting Patterns', 'A collection of modern and cozy knitting patterns for sweaters, scarves, and blankets. Each design focuses on comfort and style, making it perfect for all skill levels.', 'https://example.com/knitting.jpg', '2024-11-09 10:30:00'),
(5, 'Handcrafted Ceramics', 'A series of handcrafted ceramic pieces, including mugs, bowls, and decorative vases. Each piece is inspired by natural textures and earthy tones, blending art and functionality.', 'https://example.com/ceramics.jpg', '2024-11-09 12:00:00');


