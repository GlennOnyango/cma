DROP TABLE mpesa;
CREATE TABLE `mpesa` (
  `id` int NOT NULL AUTO_INCREMENT,
  `phone_number` int DEFAULT '4',
  `resultcode` varchar(255) NOT NULL,
  `reciept_number` varchar(255) NOT NULL,
  `date_sent` varchar(255) NOT NULL,
  `amount` varchar(10) NOT NULL,
  `all` varchar(10000) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `reciept_number` (`reciept_number`)
);