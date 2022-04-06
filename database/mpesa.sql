DROP TABLE mpesa;
CREATE TABLE `mpesa` (
  `id` int NOT NULL AUTO_INCREMENT,
  `phone_number` bigint ,
  `reciept_number` varchar(255),
  `date_sent` varchar(255),
  `amount` varchar(100),
  `item` varchar(100),
  `MerchantRequestID` varchar(100) ,
  `all` varchar(10000),
  `sta` varchar(100) DEFAULT 'pending',
  PRIMARY KEY (`id`),
  UNIQUE KEY `reciept_number` (`reciept_number`)
);

      
      
      
  