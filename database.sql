CREATE DATABASE galeri_seni;

USE galeri_seni;

CREATE TABLE karya_seni (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama_karya VARCHAR(255),
    deskripsi TEXT,
    gambar VARCHAR(255)
);

INSERT INTO karya_seni (nama_karya, deskripsi, gambar) VALUES
('Lukisan 1', 'Deskripsi lukisan 1', 'lukisan1.jpg'),
('Lukisan 2', 'Deskripsi lukisan 2', 'lukisan2.jpg');
