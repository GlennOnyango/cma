DROP TABLE IF EXISTS `sub_category`;
CREATE TABLE `sub_category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `sub_category_name` varchar(255) NOT NULL,
  `categoryid` int DEFAULT NULL,
  `sub_category_status` varchar(255) NOT NULL DEFAULT 'inactive',
  PRIMARY KEY (`id`),
  KEY `categoryid` (`categoryid`),
  CONSTRAINT `sub_category_ibfk_1` FOREIGN KEY (`categoryid`) REFERENCES `category` (`id`)
);

--ALTER TABLE members ADD COLUMN user_image VARCHAR(100) NOT NULL DEFAULT './userImage/tomato.png';



DROP TABLE IF EXISTS `category`;
CREATE TABLE `category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `category_name` varchar(255) NOT NULL,
  `category_status` varchar(255) NOT NULL DEFAULT 'inactive',
  `category_code` varchar(255) NOT NULL DEFAULT '0',
  image_cat VARCHAR(100) NOT NULL DEFAULT './userImage/tomato.png',
  PRIMARY KEY (`id`)
);

-- ALTER TABLE category ADD COLUMN image_cat VARCHAR(100) NOT NULL DEFAULT './userImage/tomato.png';
