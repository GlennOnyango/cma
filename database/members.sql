DROP TABLE IF EXISTS `members`;
CREATE TABLE `members` (
  `id` int NOT NULL AUTO_INCREMENT,
  `roleId` int DEFAULT '4',
  `userName` varchar(255) NOT NULL,
  `userRole` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `contact_number` varchar(10) NOT NULL,
  `status` varchar(10) NOT NULL DEFAULT 'active',
  `description` varchar(1000) DEFAULT NULL,
  `dateCreated` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `dateUpdated` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  KEY `roleId` (`roleId`),
  CONSTRAINT `members_ibfk_1` FOREIGN KEY (`roleId`) REFERENCES `role` (`id`)
);
 ALTER TABLE members ADD COLUMN user_image VARCHAR(100) NOT NULL DEFAULT './userImage/tomato.png';

