DROP TABLE IF EXISTS `practice_area`;
CREATE TABLE `practice_area` (
  `id` int NOT NULL AUTO_INCREMENT,
  `pa_name` varchar(255) NOT NULL,
  `pa_status` varchar(255) NOT NULL DEFAULT 'inactive',
  `pa_description` varchar(500) NOT NULL DEFAULT 'DATA TO be added',
  PRIMARY KEY (`id`)
);
INSERT INTO `practice_area` VALUES (1,'commercial','inactive','new'),(2,'aviation law','active','DATA TO be added'),(3,'Capital Markets','active','new'),(4,'new practise','active','new');
