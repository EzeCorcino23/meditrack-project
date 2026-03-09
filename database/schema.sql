CREATE DATABASE meditrack;
USE meditrack;

CREATE TABLE usuarios (
 id INT AUTO_INCREMENT PRIMARY KEY,
 nombre VARCHAR(100),
 correo VARCHAR(150) UNIQUE,
 password_hash VARCHAR(225),
 rol ENUM('admin','doctor','recepcion'),
 doctor_id INT,
 activo BOOLEAN,
 primer_acceso BOOLEAN,
 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE clinica (
 id INT AUTO_INCREMENT PRIMARY KEY,
 nombre VARCHAR(150),
 especialidad VARCHAR(100),
 direccion TEXT,
 telefono VARCHAR(20),
 correo VARCHAR(150),
 sitio_web VARCHAR(200),
 logo_url VARCHAR(255)
);

CREATE TABLE pacientes (
 id INT AUTO_INCREMENT PRIMARY KEY,
 nombre VARCHAR(100),
 edad INT,
 sexo ENUM('M','F'),
 telefono VARCHAR(20),
 fecha_nac DATE,
 tipo ENUM('vip','estandar','regular'),
 alergias TEXT,
 doctor_id INT,
 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE expedientes (
 id INT AUTO_INCREMENT PRIMARY KEY,
 paciente_id INT,
 doctor_id INT,
 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
 updated_at TIMESTAMP
);

CREATE TABLE consultas (
 id INT AUTO_INCREMENT PRIMARY KEY,
 expediente_id INT,
 paciente_id INT,
 doctor_id INT,
 fecha DATE,
 motivo TEXT,
 diagnostico TEXT,
 tratamiento TEXT,
 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE medicamentos (
 id INT AUTO_INCREMENT PRIMARY KEY,
 paciente_id INT,
 consulta_id INT,
 nombre VARCHAR(150),
 dosis VARCHAR(50),
 frecuencia VARCHAR(50),
 duracion VARCHAR(50),
 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE signos_vitales (
 id INT AUTO_INCREMENT PRIMARY KEY,
 paciente_id INT,
 consulta_id INT,
 presion VARCHAR(20),
 peso DECIMAL(5,2),
 temperatura DECIMAL(4,2),
 pulso INT,
 talla DECIMAL(4,2),
 fecha DATE
);

CREATE TABLE condiciones_cronicas (
 id INT AUTO_INCREMENT PRIMARY KEY,
 paciente_id INT,
 condicion VARCHAR(200),
 fecha_inicio DATE,
 estado ENUM('activa','controlada','inactiva'),
 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE notas_clinicas (
 id INT AUTO_INCREMENT PRIMARY KEY,
 paciente_id INT,
 consulta_id INT,
 doctor_id INT,
 nota TEXT,
 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE laboratorio (
 id INT AUTO_INCREMENT PRIMARY KEY,
 paciente_id INT,
 tipo_examen VARCHAR(150),
 fecha DATE,
 archivo_url TEXT,
 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE alertas_clinicas (
 id INT AUTO_INCREMENT PRIMARY KEY,
 paciente_id INT,
 doctor_id INT,
 tipo ENUM('critica','advertencia','recordatorio'),
 mensaje TEXT,
 vista BOOLEAN,
 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE citas (
 id INT AUTO_INCREMENT PRIMARY KEY,
 paciente_id INT,
 doctor_id INT,
 recepcion_id INT,
 fecha DATE,
 hora TIME,
 motivo VARCHAR(200),
 estado ENUM('pendiente','en espera','atendido','cancelado'),
 hora_llegada TIMESTAMP,
 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE auditoria (
 id INT AUTO_INCREMENT PRIMARY KEY,
 usuario_id INT,
 accion VARCHAR(200),
 modulo VARCHAR(100),
 ip VARCHAR(45),
 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);