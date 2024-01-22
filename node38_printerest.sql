USE node38_capstone_printerest

#create table nguoi_dung
CREATE TABLE nguoi_dung(
	nguoi_dung_id INT PRIMARY KEY AUTO_INCREMENT,
	email VARCHAR(200),
	mat_khau VARCHAR(200),
	ho_ten VARCHAR(200),
	tuoi INT,
	anh_dai_dien VARCHAR(255)
)

INSERT INTO nguoi_dung (email, mat_khau, ho_ten, tuoi, anh_dai_dien) VALUES
('emily@email.com', 'password1', 'Emily Johnson', 25, 'avatar1.jpg'),
('alexander@email.com', 'password2', 'Alexander Smith', 30, 'avatar2.jpg'),
('olivia@email.com', 'password3', 'Olivia Davis', 22, 'avatar3.jpg'),
('ethan@email.com', 'password4', 'Ethan Miller', 28, 'avatar4.jpg'),
('sophia@email.com', 'password5', 'Sophia Brown', 35, 'avatar5.jpg'),
('liam@email.com', 'password6', 'Liam Wilson', 26, 'avatar6.jpg'),
('emma@email.com', 'password7', 'Emma Taylor', 29, 'avatar7.jpg'),
('noah@email.com', 'password8', 'Noah Anderson', 32, 'avatar8.jpg'),
('ava@email.com', 'password9', 'Ava Thomas', 27, 'avatar9.jpg'),
('benjamin@email.com', 'password10', 'Benjamin Jones', 31, 'avatar10.jpg'),
('mia@email.com', 'password11', 'Mia White', 24, 'avatar11.jpg'),
('jacob@email.com', 'password12', 'Jacob Martinez', 33, 'avatar12.jpg'),
('isabella@email.com', 'password13', 'Isabella Harris', 28, 'avatar13.jpg'),
('william@email.com', 'password14', 'William Clark', 29, 'avatar14.jpg'),
('abigail@email.com', 'password15', 'Abigail Hall', 26, 'avatar15.jpg'),
('james@email.com', 'password16', 'James Turner', 30, 'avatar16.jpg'),
('harper@email.com', 'password17', 'Harper Adams', 22, 'avatar17.jpg'),
('lucas@email.com', 'password18', 'Lucas Martin', 25, 'avatar18.jpg'),
('grace@email.com', 'password19', 'Grace Moore', 28, 'avatar19.jpg'),
('jackson@email.com', 'password20', 'Jackson Wright', 34, 'avatar20.jpg');

#create table hinh_anh
CREATE TABLE hinh_anh(
	hinh_id INT PRIMARY KEY AUTO_INCREMENT,
	ten_hinh VARCHAR(200),
	duong_dan VARCHAR(255),
	mo_ta VARCHAR(255),
	nguoi_dung_id INT,
	FOREIGN KEY (nguoi_dung_id) REFERENCES nguoi_dung(nguoi_dung_id)
)

INSERT INTO hinh_anh (ten_hinh, duong_dan, mo_ta, nguoi_dung_id) VALUES
('Nature Beauty', 'https://example.com/nature1.jpg', 'A beautiful landscape', 1),
('Travel Adventure', 'https://example.com/travel2.jpg', 'Exploring new places', 2),
('Artistic Creations', 'https://example.com/art3.jpg', 'Expressing creativity through art', 3),
('Fashion Trends', 'https://example.com/fashion4.jpg', 'Latest fashion styles', 4),
('Culinary Delights', 'https://example.com/food5.jpg', 'Delicious food creations', 5),
('Home Decor', 'https://example.com/decor6.jpg', 'Interior design inspirations', 6),
('Fitness Motivation', 'https://example.com/fitness7.jpg', 'Staying healthy and fit', 7),
('Pet Love', 'https://example.com/pet8.jpg', 'Adorable pets and companions', 8),
('Tech Gadgets', 'https://example.com/tech9.jpg', 'Latest tech innovations', 9),
('Music Vibes', 'https://example.com/music10.jpg', 'Enjoying the rhythm of life', 10),
('Sunset Serenity', 'https://example.com/sunset11.jpg', 'Capturing the beauty of sunsets', 11),
('Urban Exploration', 'https://example.com/city12.jpg', 'Discovering urban landscapes', 12),
('Vintage Charm', 'https://example.com/vintage13.jpg', 'Nostalgic vintage vibes', 13),
('Abstract Art', 'https://example.com/abstract14.jpg', 'Abstract art expressions', 14),
('Cozy Moments', 'https://example.com/cozy15.jpg', 'Embracing cozy atmospheres', 15),
('Adventurous Spirits', 'https://example.com/adventure16.jpg', 'Embracing the spirit of adventure', 16),
('Wildlife Wonders', 'https://example.com/wildlife17.jpg', 'Exploring the wonders of wildlife', 17),
('Ocean Dreams', 'https://example.com/ocean18.jpg', 'Dreaming by the ocean', 18),
('City Lights', 'https://example.com/citylights19.jpg', 'Mesmerizing city lights at night', 19),
('Creative Cuisine', 'https://example.com/cuisine20.jpg', 'Innovative culinary delights', 20);

#create table binh_luan
CREATE TABLE binh_luan(
	binh_luan_id INT PRIMARY KEY AUTO_INCREMENT,
	nguoi_dung_id INT,
	FOREIGN KEY (nguoi_dung_id) REFERENCES nguoi_dung(nguoi_dung_id),
	hinh_id INT,
	FOREIGN KEY (hinh_id) REFERENCES hinh_anh(hinh_id),
	ngay_binh_luan DATE,
	noi_dung VARCHAR(255)
)

INSERT INTO binh_luan (nguoi_dung_id, hinh_id, ngay_binh_luan, noi_dung) VALUES
(5, 12, '2024-01-01', 'This artwork is amazing!'),
(3, 7, '2024-01-02', 'Motivated to stay fit!'),
(18, 4, '2024-01-03', 'Fashionable and stylish!'),
(10, 1, '2024-01-04', 'Beautiful scenery!'),
(8, 19, '2024-01-05', 'City lights are mesmerizing!'),
(15, 14, '2024-01-06', 'Abstract art sparks creativity!'),
(6, 10, '2024-01-07', 'Music vibes are on point!'),
(12, 20, '2024-01-08', 'Creative culinary delights!'),
(7, 2, '2024-01-09', 'Love the adventurous spirit!'),
(11, 5, '2024-01-10', 'Delicious looking cuisine!'),
(16, 8, '2024-01-11', 'Adorable pets!'),
(14, 16, '2024-01-12', 'Adventurous spirit unleashed!'),
(4, 18, '2024-01-13', 'Dreaming by the ocean!'),
(2, 9, '2024-01-14', 'Impressive tech innovations!'),
(1, 3, '2024-01-15', 'Nostalgic vintage charm!'),
(9, 15, '2024-01-16', 'Cozy atmosphere, loving it!'),
(17, 11, '2024-01-17', 'Captivating sunset view!'),
(20, 6, '2024-01-18', 'Interior design inspirations'),
(13, 13, '2024-01-19', 'Urban landscapes are fascinating!'),
(19, 17, '2024-01-20', 'Wildlife wonders, so beautiful!');

#create table luu_anh
CREATE TABLE luu_anh (
    nguoi_dung_id INT,
    hinh_id INT,
    ngay_luu DATE,
    PRIMARY KEY (nguoi_dung_id, hinh_id),
    FOREIGN KEY (nguoi_dung_id) REFERENCES nguoi_dung(nguoi_dung_id),
    FOREIGN KEY (hinh_id) REFERENCES hinh_anh(hinh_id)
);

INSERT INTO luu_anh (nguoi_dung_id, hinh_id, ngay_luu) VALUES
(1, 5, '2024-01-01'),
(2, 10, '2024-01-02'),
(3, 15, '2024-01-03'),
(4, 20, '2024-01-04'),
(5, 7, '2024-01-05'),
(6, 14, '2024-01-06'),
(7, 19, '2024-01-07'),
(8, 2, '2024-01-08'),
(9, 11, '2024-01-09'),
(10, 16, '2024-01-10'),
(11, 1, '2024-01-11'),
(12, 3, '2024-01-12'),
(13, 6, '2024-01-13'),
(14, 9, '2024-01-14'),
(15, 12, '2024-01-15'),
(16, 18, '2024-01-16'),
(17, 4, '2024-01-17'),
(18, 8, '2024-01-18'),
(19, 13, '2024-01-19'),
(20, 17, '2024-01-20');
