-- MySQL dump 10.13  Distrib 8.0.27, for Linux (x86_64)
--
-- Host: localhost    Database: cma_data
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `advocates_details`
--

DROP TABLE IF EXISTS `advocates_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `advocates_details` (
  `id` int NOT NULL,
  `lawyer_type` varchar(255) NOT NULL,
  `lawyer_status` varchar(255) NOT NULL,
  `skill_set` varchar(500) DEFAULT 'none',
  `country_id` int DEFAULT '0',
  `lawyer_group` varchar(500) DEFAULT 'none',
  `qualifications` varchar(500) DEFAULT 'none',
  `descriptions` varchar(500) DEFAULT 'none',
  `practice_area` varchar(500) DEFAULT 'none',
  `phone` varchar(20) DEFAULT NULL,
  KEY `id` (`id`),
  CONSTRAINT `advocates_details_ibfk_1` FOREIGN KEY (`id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `advocates_details`
--

LOCK TABLES `advocates_details` WRITE;
/*!40000 ALTER TABLE `advocates_details` DISABLE KEYS */;
INSERT INTO `advocates_details` VALUES (12,'holder','declined','none',116,'none','none','none','none',NULL),(13,'holder','declined','none',116,'none','none','none','none',NULL),(14,'holder','holder','none',116,'none','none','none','none',NULL),(15,'holder','declined','none',116,'none','none','none','none',NULL),(25,'holder','holder','none',116,'none','none','none','none',NULL),(26,'holder','holder','none',116,'none','none','none','none',NULL),(31,'holder','holder','[\"1\",\"2\"]',116,'2','[\"PHD\",\"masters\"]','[\"first class\",\"first class\"]','[\"1\",\"2\",\"3\"]',NULL),(33,'holder','holder','none',0,'none','none','none','none',NULL),(34,'holder','holder','none',0,'none','none','none','none',NULL),(35,'holder','holder','[\"1\",\"3\"]',104,'\"1\"','[\"high school\"]','[\"nice\"]','[\"1\",\"4\"]',NULL),(48,'holder','holder','null',22,'3','[\"n/a\",\"n/a\"]','[\"n/a\",\"n/a\"]','[\"3\"]',NULL),(59,'holder','holder','[\"2\",\"3\"]',116,'2','[\"high school\"]','[\"difficult\"]','[\"1\",\"3\"]',NULL);
/*!40000 ALTER TABLE `advocates_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `business_heads`
--

DROP TABLE IF EXISTS `business_heads`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `business_heads` (
  `business_unit_id` int NOT NULL,
  `business_unit_head` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `business_heads`
--

LOCK TABLES `business_heads` WRITE;
/*!40000 ALTER TABLE `business_heads` DISABLE KEYS */;
INSERT INTO `business_heads` VALUES (1,31);
/*!40000 ALTER TABLE `business_heads` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `business_members`
--

DROP TABLE IF EXISTS `business_members`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `business_members` (
  `business_unit_id` int NOT NULL,
  `business_unit_member` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `business_members`
--

LOCK TABLES `business_members` WRITE;
/*!40000 ALTER TABLE `business_members` DISABLE KEYS */;
INSERT INTO `business_members` VALUES (1,35),(1,48),(1,59);
/*!40000 ALTER TABLE `business_members` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `business_unit`
--

DROP TABLE IF EXISTS `business_unit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `business_unit` (
  `id` int NOT NULL AUTO_INCREMENT,
  `practice_id` int NOT NULL,
  `business_unit_status` varchar(255) NOT NULL DEFAULT 'inactive',
  `business_brief_description` varchar(255) DEFAULT NULL,
  `preview_video` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `practice_id` (`practice_id`),
  CONSTRAINT `business_unit_ibfk_1` FOREIGN KEY (`practice_id`) REFERENCES `practice_area` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `business_unit`
--

LOCK TABLES `business_unit` WRITE;
/*!40000 ALTER TABLE `business_unit` DISABLE KEYS */;
INSERT INTO `business_unit` VALUES (1,1,'active','<p>This is trial one</p>','./uploadPreviewBusinessUnit/forex-trader-analyzing-market-charts-to-plan-commo-2022-02-22-06-34-15-utc.jpg');
/*!40000 ALTER TABLE `business_unit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `business_unit_diplay`
--

DROP TABLE IF EXISTS `business_unit_diplay`;
/*!50001 DROP VIEW IF EXISTS `business_unit_diplay`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8 */;
/*!50001 CREATE VIEW `business_unit_diplay` AS SELECT 
 1 AS `id`,
 1 AS `pa_name`,
 1 AS `business_unit_status`,
 1 AS `business_brief_description`,
 1 AS `preview_video`,
 1 AS `business_unit_head`,
 1 AS `userName`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `business_unit_members`
--

DROP TABLE IF EXISTS `business_unit_members`;
/*!50001 DROP VIEW IF EXISTS `business_unit_members`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8 */;
/*!50001 CREATE VIEW `business_unit_members` AS SELECT 
 1 AS `id`,
 1 AS `pa_name`,
 1 AS `business_unit_status`,
 1 AS `business_brief_description`,
 1 AS `preview_video`,
 1 AS `business_unit_member`,
 1 AS `userName`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `category_name` varchar(255) NOT NULL,
  `category_status` varchar(255) NOT NULL DEFAULT 'inactive',
  `category_code` varchar(255) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'forensic science','active','0'),(2,'commercial','active','0'),(3,'cl','active','0'),(4,'trial1','active',''),(5,'','',''),(6,'','','');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `consultation`
--

DROP TABLE IF EXISTS `consultation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `consultation` (
  `id` int NOT NULL AUTO_INCREMENT,
  `lawyer_type_id` int NOT NULL,
  `practise_area_id` int NOT NULL,
  `lawyers_tobe_consulted` varchar(255) NOT NULL,
  `duration` varchar(255) NOT NULL,
  `billing` varchar(255) NOT NULL,
  `consultation_status` varchar(255) NOT NULL DEFAULT 'inactive',
  `sub_id` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `consultation`
--

LOCK TABLES `consultation` WRITE;
/*!40000 ALTER TABLE `consultation` DISABLE KEYS */;
INSERT INTO `consultation` VALUES (1,1,1,'lawyeremail1','15','6000','active',1),(2,1,1,'lawyeremail1','15','6000','active',1);
/*!40000 ALTER TABLE `consultation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contries`
--

DROP TABLE IF EXISTS `contries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `contries` (
  `id` int NOT NULL AUTO_INCREMENT,
  `country_name` varchar(255) NOT NULL,
  `country_code` varchar(255) NOT NULL,
  `applicable_to_seller` varchar(255) NOT NULL,
  `country_status` varchar(255) NOT NULL DEFAULT 'inactive',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contries`
--

LOCK TABLES `contries` WRITE;
/*!40000 ALTER TABLE `contries` DISABLE KEYS */;
INSERT INTO `contries` VALUES (1,'kenya','254','option1','active'),(2,'Tanzania','255','option1','active'),(3,'uganda','255','option1','In Active');
/*!40000 ALTER TABLE `contries` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `countries`
--

DROP TABLE IF EXISTS `countries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `countries` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=250 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `countries`
--

LOCK TABLES `countries` WRITE;
/*!40000 ALTER TABLE `countries` DISABLE KEYS */;
INSERT INTO `countries` VALUES (5,'Afghanistan'),(6,'Albania'),(7,'Algeria'),(8,'American Samoa'),(9,'Andorra'),(10,'Angola'),(11,'Anguilla'),(12,'Antarctica'),(13,'Antigua And Barbuda'),(14,'Argentina'),(15,'Armenia'),(16,'Aruba'),(17,'Australia'),(18,'\r\nAustria'),(19,'Azerbaijan'),(20,'Bahamas'),(21,'Bahrain'),(22,'Bangladesh'),(23,'Barbados'),(24,'Belarus'),(25,'Belgium'),(26,'Belize'),(27,'Benin'),(28,'Bermuda'),(29,'Bhutan'),(30,'Bolivia'),(31,'Bosnia And Herzegovina'),(32,'\r\nBotswana'),(33,'Bouvet Island'),(34,'Brazil'),(35,'British Indian Ocean Territory'),(36,'Brunei Darussalam'),(37,'Bulgaria'),(38,'Burkina Faso'),(39,'Burundi'),(40,'Cambodia'),(41,'Cameroon'),(42,'Canada'),(43,'Cape\r\nVerde'),(44,'Cayman Islands'),(45,'Central African Republic'),(46,'Chad'),(47,'Chile'),(48,'China'),(49,'Christmas Island'),(50,'Cocos (keeling) Islands'),(51,'Colombia'),(52,'Comoros'),(53,'Congo'),(54,'Congo'),(55,'The\r\nDemocratic Republic Of The'),(56,'Cook Islands'),(57,'Costa Rica'),(58,'Croatia'),(59,'Cuba'),(60,'Cyprus'),(61,'Czech Republic'),(62,'Denmark'),(63,'Djibouti'),(64,'Dominica'),(65,'Dominican\r\nRepublic'),(66,'East Timor'),(67,'Ecuador'),(68,'Egypt'),(69,'El Salvador'),(70,'Equatorial Guinea'),(71,'Eritrea'),(72,'Estonia'),(73,'Ethiopia'),(74,'Falkland Islands (malvinas)'),(75,'Faroe Islands'),(76,'Fiji'),(77,'\r\nFinland'),(78,'France'),(79,'French Guiana'),(80,'French Polynesia'),(81,'French Southern Territories'),(82,'Gabon'),(83,'Gambia'),(84,'Georgia'),(85,'Germany'),(86,'Ghana'),(87,'Gibraltar'),(88,'Greece'),(89,'Greenland'),(90,'\r\nGrenada'),(91,'Guadeloupe'),(92,'Guam'),(93,'Guatemala'),(94,'Guinea'),(95,'Guinea-bissau'),(96,'Guyana'),(97,'Haiti'),(98,'Heard Island And Mcdonald Islands'),(99,'Holy See (vatican City State)'),(100,'\r\nHonduras'),(101,'Hong Kong'),(102,'Hungary'),(103,'Iceland'),(104,'India'),(105,'Indonesia'),(106,'Iran'),(107,'Islamic Republic Of'),(108,'Iraq'),(109,'Ireland'),(110,'Israel'),(111,'Italy'),(112,'Jamaica'),(113,'Japan'),(114,'Jordan'),(115,'Kazakstan'),(116,'\r\nKenya'),(117,'Kiribati'),(118,'Korea'),(119,'Korea'),(120,'Republic Of'),(121,'Kosovo'),(122,'Kuwait'),(123,'Kyrgyzstan'),(124,'Latvia'),(125,'\r\nLebanon'),(126,'Lesotho'),(127,'Liberia'),(128,'Libyan Arab Jamahiriya'),(129,'Liechtenstein'),(130,'Lithuania'),(131,'Luxembourg'),(132,'Macau'),(133,'Macedonia'),(134,'The Former Yugoslav Republic Of'),(135,'\r\nMadagascar'),(136,'Malawi'),(137,'Malaysia'),(138,'Maldives'),(139,'Mali'),(140,'Malta'),(141,'Marshall Islands'),(142,'Martinique'),(143,'Mauritania'),(144,'Mauritius'),(145,'Mayotte'),(146,'Mexico'),(147,'Micronesia'),(148,'Federated\r\nStates Of'),(149,'Moldova'),(150,'Republic Of'),(151,'Monaco'),(152,'Mongolia'),(153,'Montserrat'),(154,'Montenegro'),(155,'Morocco'),(156,'Mozambique'),(157,'Myanmar'),(158,'Namibia'),(159,'Nauru'),(160,'Nepal'),(161,'Netherlands'),(162,'\r\nNetherlands Antilles'),(163,'New Caledonia'),(164,'New Zealand'),(165,'Nicaragua'),(166,'Niger'),(167,'Nigeria'),(168,'Niue'),(169,'Norfolk Island'),(170,'Northern Mariana Islands'),(171,'Norway'),(172,'Oman'),(173,'Pakistan'),(174,'\r\nPalau'),(175,'Palestinian Territory'),(176,'Occupied'),(177,'Panama'),(178,'Papua New Guinea'),(179,'Paraguay'),(180,'Peru'),(181,'Philippines'),(182,'Pitcairn'),(183,'Poland'),(184,'Portugal'),(185,'Puerto Rico'),(186,'Qatar'),(187,'\r\nReunion'),(188,'Romania'),(189,'Russian Federation'),(190,'Rwanda'),(191,'Saint Helena'),(192,'Saint Kitts And Nevis'),(193,'Saint Lucia'),(194,'Saint Pierre And Miquelon'),(195,'Saint Vincent And The\r\nGrenadines'),(196,'Samoa'),(197,'San Marino'),(198,'Sao Tome And Principe'),(199,'Saudi Arabia'),(200,'Senegal'),(201,'Serbia'),(202,'Seychelles'),(203,'Sierra Leone'),(204,'Singapore'),(205,'Slovakia'),(206,'Slovenia'),(207,'Solomon\r\nIslands'),(208,'Somalia'),(209,'South Africa'),(210,'South Georgia And The South Sandwich Islands'),(211,'Spain'),(212,'Sri Lanka'),(213,'Sudan'),(214,'Suriname'),(215,'Svalbard And Jan Mayen'),(216,'Swaziland'),(217,'\r\nSweden'),(218,'Switzerland'),(219,'Syrian Arab Republic'),(220,'Taiwan'),(221,'Province Of China'),(222,'Tajikistan'),(223,'Tanzania'),(224,'United Republic Of'),(225,'Thailand'),(226,'Togo'),(227,'Tokelau'),(228,'Tonga'),(229,'\r\nTrinidad And Tobago'),(230,'Tunisia'),(231,'Turkey'),(232,'Turkmenistan'),(233,'Turks And Caicos Islands'),(234,'Tuvalu'),(235,'Uganda'),(236,'Ukraine'),(237,'United Arab Emirates'),(238,'United Kingdom'),(239,'United\r\nStates'),(240,'United States Minor Outlying Islands'),(241,'Uruguay'),(242,'Uzbekistan'),(243,'Vanuatu'),(244,'Venezuela'),(245,'Viet Nam'),(246,'Virgin Islands'),(247,'British'),(248,'Virgin Islands'),(249,'U.s.');
/*!40000 ALTER TABLE `countries` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `document_subscription_bought`
--

DROP TABLE IF EXISTS `document_subscription_bought`;
/*!50001 DROP VIEW IF EXISTS `document_subscription_bought`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8 */;
/*!50001 CREATE VIEW `document_subscription_bought` AS SELECT 
 1 AS `id`,
 1 AS `document_name`,
 1 AS `document`,
 1 AS `category_id`,
 1 AS `subscription_id`,
 1 AS `category_name`,
 1 AS `sub_category_id`,
 1 AS `review_status`,
 1 AS `review_count`,
 1 AS `download_count`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `documents`
--

DROP TABLE IF EXISTS `documents`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `documents` (
  `id` int NOT NULL AUTO_INCREMENT,
  `document_name` varchar(255) NOT NULL,
  `document_price` int NOT NULL,
  `document_preview` varchar(500) NOT NULL,
  `document` varchar(500) NOT NULL,
  `category_id` int NOT NULL,
  `sub_category_id` int NOT NULL,
  `toc_number` varchar(250) NOT NULL,
  `toc_introduction` varchar(2000) NOT NULL,
  `document_description` varchar(250) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `category_id` (`category_id`),
  KEY `sub_category_id` (`sub_category_id`),
  CONSTRAINT `Documents_ibfk_4` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`),
  CONSTRAINT `Documents_ibfk_5` FOREIGN KEY (`sub_category_id`) REFERENCES `sub_category` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `documents`
--

LOCK TABLES `documents` WRITE;
/*!40000 ALTER TABLE `documents` DISABLE KEYS */;
INSERT INTO `documents` VALUES (3,'Test New',5000,'./uploadPreviews/doc.pdf','./uploadDocuments/doc.pdf',2,2,'[\"1\",\"2\"]','[\"Diplomacy\",\"Odessy\"]',''),(4,'affidavits',900,'./uploadPreviews/20220217_103338.jpg','./uploadDocuments/J Care Application Form 2022 -1.pdf',1,1,'[\"1\"]','[\"Introduction\"]',''),(5,'sales agreement',950,'./uploadPreviews/document-nigeria.jpg','./uploadDocuments/CART FUNCTIONALITY IN JAVASCRIPT (2).docx',2,2,'[\"1\",\"2\"]','[\"introduction\",\"prefix\"]',''),(6,'employment contract',200,'','',2,2,'[\"1\",\"2\"]','[\"introduction\",\"prefix\"]',''),(7,'Night Test',150,'./uploadPreviews/Free IT material.pdf','./uploadDocuments/Free IT material.pdf',2,2,'[\"1\"]','[\"IT Stuff\"]',''),(8,'Night Test Two',200,'./uploadPreviews/Free IT material.pdf','./uploadDocuments/Free IT material.pdf',2,2,'[\"1\"]','[\"IT Stuff\"]','<p>IT stuff at night</p>'),(9,'Night Test Three',150,'./uploadPreviews/Free IT material.pdf','./uploadDocuments/Free IT material.pdf',1,1,'[\"1\"]','[\"No more Poly\"]','<p>Ploy carbonate</p>');
/*!40000 ALTER TABLE `documents` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `documents_download`
--

DROP TABLE IF EXISTS `documents_download`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `documents_download` (
  `document_id` int NOT NULL,
  `user_id` int NOT NULL,
  `download_count` int NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `documents_download`
--

LOCK TABLES `documents_download` WRITE;
/*!40000 ALTER TABLE `documents_download` DISABLE KEYS */;
INSERT INTO `documents_download` VALUES (4,16,6),(5,16,0),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6),(6,16,6);
/*!40000 ALTER TABLE `documents_download` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `documents_review`
--

DROP TABLE IF EXISTS `documents_review`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `documents_review` (
  `document_id` int NOT NULL,
  `user_id` int NOT NULL,
  `review_status` varchar(10) NOT NULL DEFAULT 'none',
  `review_count` int NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `documents_review`
--

LOCK TABLES `documents_review` WRITE;
/*!40000 ALTER TABLE `documents_review` DISABLE KEYS */;
INSERT INTO `documents_review` VALUES (4,16,'review',10),(5,16,'review',4),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6),(6,16,'none',6);
/*!40000 ALTER TABLE `documents_review` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `documents_service`
--

DROP TABLE IF EXISTS `documents_service`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `documents_service` (
  `document_id` int NOT NULL,
  `service_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `documents_service`
--

LOCK TABLES `documents_service` WRITE;
/*!40000 ALTER TABLE `documents_service` DISABLE KEYS */;
INSERT INTO `documents_service` VALUES (3,4),(3,9),(9,4),(9,9);
/*!40000 ALTER TABLE `documents_service` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `documents_subscription`
--

DROP TABLE IF EXISTS `documents_subscription`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `documents_subscription` (
  `document_id` int NOT NULL,
  `subscription_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `documents_subscription`
--

LOCK TABLES `documents_subscription` WRITE;
/*!40000 ALTER TABLE `documents_subscription` DISABLE KEYS */;
INSERT INTO `documents_subscription` VALUES (3,8),(3,9),(3,10),(4,17),(5,18),(6,20);
/*!40000 ALTER TABLE `documents_subscription` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `knowledge_hub`
--

DROP TABLE IF EXISTS `knowledge_hub`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `knowledge_hub` (
  `id` int NOT NULL AUTO_INCREMENT,
  `article_name` varchar(255) NOT NULL,
  `article_category` varchar(255) NOT NULL,
  `article_sub_category` varchar(255) NOT NULL,
  `image_preview` varchar(500) DEFAULT NULL,
  `status` varchar(20) NOT NULL,
  `articles` varchar(500) DEFAULT NULL,
  `description` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `knowledge_hub`
--

LOCK TABLES `knowledge_hub` WRITE;
/*!40000 ALTER TABLE `knowledge_hub` DISABLE KEYS */;
INSERT INTO `knowledge_hub` VALUES (1,'Test','Test','Test','preview ->','active','articles ->',''),(2,'test1','test1','test1','preview ->','inactive','articles ->',''),(3,'Test2','Test2','Test2','','active','Array',''),(4,'Test','Test','Test','preview ->,./uploadPreviewshub/Assignment_2_-_Report.pdf','active','articles ->,./uploadarticles/Assignment_2_-_Report.pdf',''),(5,'tax dues','kra','county govt','preview ->,./uploadPreviewshub/basketball.png','active','articles ->,./uploadarticles/~$RT FUNCTIONALITY IN JAVASCRIPT.docx',''),(6,'Hub trial','trial','trial','','active','articles ->,./uploadarticles/material-dashboard.js.map',''),(7,'Hub trial','trial','trial','','active','',''),(8,'Hub trial 1','trial 1','trial 1','','active','','hub1');
/*!40000 ALTER TABLE `knowledge_hub` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lawyer_type`
--

DROP TABLE IF EXISTS `lawyer_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `lawyer_type` (
  `id` int NOT NULL AUTO_INCREMENT,
  `lawyer_type` varchar(255) NOT NULL,
  `lawyer_status` varchar(255) NOT NULL DEFAULT 'inactive',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lawyer_type`
--

LOCK TABLES `lawyer_type` WRITE;
/*!40000 ALTER TABLE `lawyer_type` DISABLE KEYS */;
INSERT INTO `lawyer_type` VALUES (1,'partner','active'),(2,'senior associate','active'),(3,'associate','active'),(4,'Test lawyer Type change','active');
/*!40000 ALTER TABLE `lawyer_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `members`
--

DROP TABLE IF EXISTS `members`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
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
  `user_image` varchar(100) NOT NULL DEFAULT './userImage/tomato.png',
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  KEY `roleId` (`roleId`),
  CONSTRAINT `members_ibfk_1` FOREIGN KEY (`roleId`) REFERENCES `role` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `members`
--

LOCK TABLES `members` WRITE;
/*!40000 ALTER TABLE `members` DISABLE KEYS */;
INSERT INTO `members` VALUES (10,4,'Glenn','cleaner','jumping@gmail.com','0719458873','active','','2022-03-04 17:09:15','2022-03-04 17:09:15','./userImage/Webp.net-resizeimage.jpg');
/*!40000 ALTER TABLE `members` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `messages`
--

DROP TABLE IF EXISTS `messages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `messages` (
  `id` int NOT NULL AUTO_INCREMENT,
  `message` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `messages`
--

LOCK TABLES `messages` WRITE;
/*!40000 ALTER TABLE `messages` DISABLE KEYS */;
INSERT INTO `messages` VALUES (1,'Test MySQL Event 1','2022-02-16 05:53:23'),(2,'Test MySQL Event 2','2022-02-16 05:57:03'),(3,'Test MySQL recurring Event','2022-02-16 06:02:17'),(4,'Test MySQL recurring Event','2022-02-16 06:03:17'),(5,'Test MySQL recurring Event','2022-02-16 06:04:17'),(6,'Test MySQL recurring Event','2022-02-16 06:05:17'),(7,'Test MySQL recurring Event','2022-02-16 06:06:17'),(8,'Test MySQL recurring Event','2022-02-16 06:07:17');
/*!40000 ALTER TABLE `messages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment`
--

DROP TABLE IF EXISTS `payment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `payment` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `refrence_number` varchar(100) NOT NULL,
  `dateCreated` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `amount` int NOT NULL,
  `type_paid` varchar(100) NOT NULL,
  `billing_type` varchar(100) NOT NULL DEFAULT 'monthly',
  `product_id` int NOT NULL,
  `status` varchar(100) DEFAULT 'active',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2980 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment`
--

LOCK TABLES `payment` WRITE;
/*!40000 ALTER TABLE `payment` DISABLE KEYS */;
INSERT INTO `payment` VALUES (2973,16,'4 cma_lll 468','2022-03-01 21:16:56',2400,'subscriptions','annually',17,'active'),(2974,16,'3 cma_lll 802','2022-03-02 10:03:30',500,'subscriptions','monthly',18,'active'),(2975,16,'3 cma_lll 454','2022-03-02 21:07:47',5000,'videos','la',6,'active'),(2976,16,'3 cma_lll 107','2022-03-02 23:14:10',150,'documents','la',9,'active'),(2977,29,'7 cma_lll 172','2022-03-09 10:15:43',150,'documents','la',9,'active'),(2978,29,'7 cma_lll 208','2022-03-09 10:18:51',5000,'videos','la',6,'active'),(2979,29,'2 cma_lll 491','2022-03-09 10:45:03',5000,'documents','la',3,'active');
/*!40000 ALTER TABLE `payment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment_terms`
--

DROP TABLE IF EXISTS `payment_terms`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `payment_terms` (
  `id` int NOT NULL AUTO_INCREMENT,
  `payment_terms_name` varchar(255) NOT NULL,
  `payment_term_status` varchar(255) NOT NULL DEFAULT 'inactive',
  `payment_term_text` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment_terms`
--

LOCK TABLES `payment_terms` WRITE;
/*!40000 ALTER TABLE `payment_terms` DISABLE KEYS */;
INSERT INTO `payment_terms` VALUES (1,'standard payment terms','active','     <p>refunds available</p>\r\n     '),(2,'elite','active','     <p>all payments should be in visa</p>\r\n     '),(3,'Payment Terms Test change','active','<p>Payment terms</p>');
/*!40000 ALTER TABLE `payment_terms` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `practice_area`
--

DROP TABLE IF EXISTS `practice_area`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `practice_area` (
  `id` int NOT NULL AUTO_INCREMENT,
  `pa_name` varchar(255) NOT NULL,
  `pa_status` varchar(255) NOT NULL DEFAULT 'inactive',
  `pa_description` varchar(500) NOT NULL DEFAULT 'DATA TO be added',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `practice_area`
--

LOCK TABLES `practice_area` WRITE;
/*!40000 ALTER TABLE `practice_area` DISABLE KEYS */;
INSERT INTO `practice_area` VALUES (1,'commercial','inactive','new'),(2,'aviation law','active','DATA TO be added'),(3,'Capital Markets','active','new'),(4,'new practise','active','new');
/*!40000 ALTER TABLE `practice_area` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `product` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_name` varchar(255) NOT NULL,
  `product_status` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'cm sme','inactive'),(2,'cm property digest','inactive'),(3,'ace litigator','inactive'),(4,'Netsheria','inactive'),(5,'Netsheria','inactive'),(6,'cm sme','active'),(7,'diaspora club','inactive'),(8,'Test Product change','inactive'),(9,'CM Ardhi club','Status'),(10,'Diaspora Club','active'),(11,'Membership','inactive'),(12,'CM Ardhi Club','active');
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rm`
--

DROP TABLE IF EXISTS `rm`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `rm` (
  `id` int NOT NULL AUTO_INCREMENT,
  `advocate_id` int NOT NULL,
  `client_id` int NOT NULL,
  `status` varchar(100) NOT NULL DEFAULT 'open',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rm`
--

LOCK TABLES `rm` WRITE;
/*!40000 ALTER TABLE `rm` DISABLE KEYS */;
INSERT INTO `rm` VALUES (1,31,16,'open'),(3,35,29,'open'),(4,31,29,'open'),(5,31,16,'open'),(6,31,29,'open'),(7,31,16,'open'),(8,35,16,'open'),(9,31,16,'open'),(10,31,16,'open'),(11,35,16,'open'),(12,31,16,'open'),(13,35,16,'open'),(14,31,16,'open'),(15,31,16,'open'),(16,35,29,'open'),(17,31,16,'open'),(18,35,16,'open'),(19,31,16,'open'),(20,31,16,'open');
/*!40000 ALTER TABLE `rm` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `role` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES (1,'admin'),(2,'advocate'),(3,'user'),(4,'members');
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `service`
--

DROP TABLE IF EXISTS `service`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `service` (
  `id` int NOT NULL AUTO_INCREMENT,
  `service_name` varchar(255) NOT NULL,
  `service_status` varchar(255) NOT NULL DEFAULT 'inactive',
  `service_type` varchar(100) NOT NULL DEFAULT 'added',
  `service_validity` varchar(100) NOT NULL DEFAULT 'added',
  `service_downloads` int NOT NULL DEFAULT '5',
  `service_reviews` int NOT NULL DEFAULT '5',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `service`
--

LOCK TABLES `service` WRITE;
/*!40000 ALTER TABLE `service` DISABLE KEYS */;
INSERT INTO `service` VALUES (4,'legal documents portal','active','documents','yearly',5,5),(6,'webinars','active','videos','quarterly',5,5),(9,'TeddOnyi','inactive','documents','yearly',2,6),(10,'Latest Test','active','videos','half',10,10);
/*!40000 ALTER TABLE `service` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `service_details_documents`
--

DROP TABLE IF EXISTS `service_details_documents`;
/*!50001 DROP VIEW IF EXISTS `service_details_documents`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8 */;
/*!50001 CREATE VIEW `service_details_documents` AS SELECT 
 1 AS `id`,
 1 AS `document_name`,
 1 AS `document_preview`,
 1 AS `document_description`,
 1 AS `price`,
 1 AS `service_id`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `service_details_videos`
--

DROP TABLE IF EXISTS `service_details_videos`;
/*!50001 DROP VIEW IF EXISTS `service_details_videos`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8 */;
/*!50001 CREATE VIEW `service_details_videos` AS SELECT 
 1 AS `id`,
 1 AS `video_name`,
 1 AS `video_preview`,
 1 AS `video_brief_description`,
 1 AS `price`,
 1 AS `service_id`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `skill_set`
--

DROP TABLE IF EXISTS `skill_set`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `skill_set` (
  `id` int NOT NULL AUTO_INCREMENT,
  `skill_set_name` varchar(255) NOT NULL,
  `pa_id` int NOT NULL,
  `skill_set_status` varchar(255) NOT NULL DEFAULT 'inactive',
  `skill_set_brief_description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `pa_id` (`pa_id`),
  CONSTRAINT `skill_set_ibfk_1` FOREIGN KEY (`pa_id`) REFERENCES `practice_area` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `skill_set`
--

LOCK TABLES `skill_set` WRITE;
/*!40000 ALTER TABLE `skill_set` DISABLE KEYS */;
INSERT INTO `skill_set` VALUES (1,'verbal cue',1,'active','This is for effective communication'),(2,'family matters',1,'active','family related'),(3,'Communication',1,'active','This is for effective communication');
/*!40000 ALTER TABLE `skill_set` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sub_category`
--

DROP TABLE IF EXISTS `sub_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `sub_category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `sub_category_name` varchar(255) NOT NULL,
  `categoryid` int DEFAULT NULL,
  `sub_category_status` varchar(255) NOT NULL DEFAULT 'inactive',
  PRIMARY KEY (`id`),
  KEY `categoryid` (`categoryid`),
  CONSTRAINT `sub_category_ibfk_1` FOREIGN KEY (`categoryid`) REFERENCES `category` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sub_category`
--

LOCK TABLES `sub_category` WRITE;
/*!40000 ALTER TABLE `sub_category` DISABLE KEYS */;
INSERT INTO `sub_category` VALUES (1,'new',1,'active'),(2,'old',2,'inactive');
/*!40000 ALTER TABLE `sub_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subscription_features`
--

DROP TABLE IF EXISTS `subscription_features`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `subscription_features` (
  `id` int NOT NULL,
  `feature_name` varchar(255) NOT NULL,
  `presence` int NOT NULL,
  KEY `id` (`id`),
  CONSTRAINT `subscription_features_ibfk_1` FOREIGN KEY (`id`) REFERENCES `subscriptions_new` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subscription_features`
--

LOCK TABLES `subscription_features` WRITE;
/*!40000 ALTER TABLE `subscription_features` DISABLE KEYS */;
INSERT INTO `subscription_features` VALUES (14,'welcome',1),(14,'con',0),(15,'Yes it has',1),(15,'not today',0),(16,'Muchisomo',1),(16,'salute',1),(16,'kebab',0),(16,'alfredo',0),(17,'product one',1),(17,'play',1),(17,'product three',0),(17,'play1',0),(18,'10 document reviews',1),(18,'inhouse counsel',0),(19,'free legal templates',1),(19,'legal advice consultation',0),(20,'unlimited contract reviews',1),(20,'legal consultation',0);
/*!40000 ALTER TABLE `subscription_features` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `subscription_for_products`
--

DROP TABLE IF EXISTS `subscription_for_products`;
/*!50001 DROP VIEW IF EXISTS `subscription_for_products`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8 */;
/*!50001 CREATE VIEW `subscription_for_products` AS SELECT 
 1 AS `id`,
 1 AS `subscriptions_name`,
 1 AS `product_id`,
 1 AS `discount_applicable`,
 1 AS `status`,
 1 AS `percentage_discount`,
 1 AS `downloads_limit`,
 1 AS `consultaion_hours`,
 1 AS `review_limit`,
 1 AS `payment_terms_id`,
 1 AS `description`,
 1 AS `price`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `subscription_main`
--

DROP TABLE IF EXISTS `subscription_main`;
/*!50001 DROP VIEW IF EXISTS `subscription_main`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8 */;
/*!50001 CREATE VIEW `subscription_main` AS SELECT 
 1 AS `id`,
 1 AS `subscriptions_name`,
 1 AS `product_name`,
 1 AS `status`,
 1 AS `product_status`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `subscription_with_features`
--

DROP TABLE IF EXISTS `subscription_with_features`;
/*!50001 DROP VIEW IF EXISTS `subscription_with_features`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8 */;
/*!50001 CREATE VIEW `subscription_with_features` AS SELECT 
 1 AS `id`,
 1 AS `subscriptions_name`,
 1 AS `product_id`,
 1 AS `discount_applicable`,
 1 AS `status`,
 1 AS `percentage_discount`,
 1 AS `downloads_limit`,
 1 AS `consultaion_hours`,
 1 AS `review_limit`,
 1 AS `payment_terms_id`,
 1 AS `description`,
 1 AS `price`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `subscriptions_new`
--

DROP TABLE IF EXISTS `subscriptions_new`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `subscriptions_new` (
  `id` int NOT NULL AUTO_INCREMENT,
  `subscriptions_name` varchar(255) NOT NULL,
  `product_id` int DEFAULT '0',
  `discount_applicable` varchar(255) NOT NULL DEFAULT 'NO',
  `status` varchar(255) NOT NULL DEFAULT 'inactive',
  `percentage_discount` int DEFAULT '0',
  `downloads_limit` int DEFAULT NULL,
  `consultaion_hours` int DEFAULT NULL,
  `review_limit` int DEFAULT NULL,
  `payment_terms_id` int DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `price` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `payment_terms_id` (`payment_terms_id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `subscriptions_new_ibfk_1` FOREIGN KEY (`payment_terms_id`) REFERENCES `payment_terms` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subscriptions_new`
--

LOCK TABLES `subscriptions_new` WRITE;
/*!40000 ALTER TABLE `subscriptions_new` DISABLE KEYS */;
INSERT INTO `subscriptions_new` VALUES (14,'Test After',10,'yes','active',2,12,120,12,2,'<p>dasdasd</p>',120),(15,'Test Sub without product',0,'no','active',5,12,120,12,2,'<p>power to the people</p>',300),(16,'Another without product',0,'yes','active',5,12,120,12,1,'Testing all sides',500),(17,'Test with product',10,'no','active',10,12,120,12,3,'This has a product net 2',200),(18,'standard',6,'no','active',10,5,10,5,1,'<p>get more customers</p>',500),(19,'new subscription',12,'yes','active',5,10,10,5,3,'<p>very new</p>',500),(20,'elite ',6,'yes','active',5,6,7,6,2,'<p>latest subscription</p>',300);
/*!40000 ALTER TABLE `subscriptions_new` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_cert`
--

DROP TABLE IF EXISTS `user_cert`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `user_cert` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `reg` varchar(100) NOT NULL,
  `kpin` varchar(100) NOT NULL,
  `status` varchar(100) NOT NULL DEFAULT 'declined',
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_id` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_cert`
--

LOCK TABLES `user_cert` WRITE;
/*!40000 ALTER TABLE `user_cert` DISABLE KEYS */;
INSERT INTO `user_cert` VALUES (1,16,'./uploadDocuments/blocka.xlsx','./uploadDocuments/blockb.xlsx','approved'),(2,29,'./uploadDocuments/Glenn_Onyango.pdf','./uploadDocuments/Glenn_Onyango.pdf','approved');
/*!40000 ALTER TABLE `user_cert` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `user_cert_all`
--

DROP TABLE IF EXISTS `user_cert_all`;
/*!50001 DROP VIEW IF EXISTS `user_cert_all`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8 */;
/*!50001 CREATE VIEW `user_cert_all` AS SELECT 
 1 AS `id`,
 1 AS `name`,
 1 AS `reg`,
 1 AS `kra`,
 1 AS `status`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `roleId` int DEFAULT '3',
  `userName` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `businessName` varchar(255) NOT NULL,
  `registrationNumber` varchar(255) NOT NULL,
  `physicalAddress` varchar(255) NOT NULL,
  `subscribeToNewsletter` varchar(11) NOT NULL DEFAULT '0',
  `user_password` varchar(255) NOT NULL,
  `contactemail` varchar(255) DEFAULT NULL,
  `contactPhoneNumber` varchar(255) DEFAULT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '0',
  `dateCreated` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `dateUpdated` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `user_image` varchar(100) DEFAULT NULL,
  `user_directory` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  KEY `roleId` (`roleId`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`roleId`) REFERENCES `role` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=60 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (8,3,'glenn Onyango','glenntedd@gmail.com','Glee Designs','12345','Kisumu-Busia RD','','2f797da6590d27683e5d80f324ca6aa7','glenntedd@gmail.com','+254719458873',1,'2021-10-28 08:30:46','2021-10-28 08:30:46',NULL,'/var/www/html/cm_version2/controller/usersDirectories/c708ef3dd2e4aa53de6ed4152e858311'),(9,1,'cm advocates','CMAdvocatesadmin@gmail.com','','','','','21232f297a57a5a743894a0e4a801fc3','','',1,'2021-10-28 08:36:55','2021-10-28 08:36:55',NULL,NULL),(10,1,'Opiyo','opiyo@gmail.com','','','','0','5e3af4ec8bdb0c28dee0b40f2eef3bdc',NULL,NULL,0,'2021-10-05 15:04:58','2021-10-05 15:04:58',NULL,NULL),(12,2,'','glennonyango@yahoo.com','','','','0','f84be11974a1736684ade98804ee9364','','',0,'2021-10-28 11:21:01','2021-10-28 11:21:01',NULL,NULL),(13,2,'','mugoethan@gmail.com','','','','0','0fa2f51d935a848c2266c7878b43eed0','','',0,'2021-10-28 11:39:34','2021-10-28 11:39:34',NULL,NULL),(14,2,'','cyrus maina','','','','0','3b3b564001b848b1faa126f5fb4f6d3d','','',0,'2021-10-28 11:51:34','2021-10-28 11:51:34',NULL,NULL),(15,2,'','rmulamba@barizicommunications.com','','','','0','b7d96ee119b2631f01967d148ba6ac5c','','',0,'2021-10-28 13:07:04','2021-10-28 13:07:04',NULL,NULL),(16,3,'ethan','mugoethan78@gmail.com','Pro Tender','555','kileleshwa','','1a1dc91c907325c69271ddf0c944bc72','','0701973394',1,'2021-10-29 18:18:55','2021-10-29 18:18:55',NULL,'/var/www/html/cm_version2/controller/usersDirectories/dee05abc230c51161f953a239074177d'),(19,3,'Dianah','dgichuru@cmadvocates.com','Dee Limited','12345','IM House','','6128733cebca8f6f14162dd45766d8f3','dgichuru@cmadvocates.com','0721873805',1,'2021-11-15 11:30:46','2021-11-15 11:30:46',NULL,'/var/www/html/cm_version2/controller/usersDirectories/de25565e61751258958fbb52110fc7b1'),(21,3,'john','johnmugo68@gmail.com','johns butchery','223','dagoretti','','f63f4fbc9f8c85d409f2f59f2b9e12d5','mugoethan78@gmail.com','0700000',1,'2021-11-26 10:49:02','2021-11-26 10:49:02',NULL,'/var/www/html/cm_version2/controller/usersDirectories/952764400a340a53379905cf03a73e1c'),(22,2,'','newlawyer@gmail.com','','','','0','b9238aa4114496fafc20ea9611e169d1','','',0,'2021-11-28 10:16:09','2021-11-28 10:16:09',NULL,NULL),(25,2,'','sherlin@gmail.com','','','','0','48cd16d32cbc24fccafdcf13840966ca','','',0,'2021-11-28 12:46:33','2021-11-28 12:46:33',NULL,NULL),(26,2,'','chege@gmail.com','','','','0','7701d1d213c6644036e8a450f1c3d3e1','','',0,'2021-11-29 13:37:31','2021-11-29 13:37:31',NULL,NULL),(29,3,'glennonyango','glennonyango@gmail.com','tripod','12345','40100','','202cb962ac59075b964b07152d234b70','glennonyango@gmail.com','+254719458873',1,'2021-11-30 18:09:59','2021-11-30 18:09:59','null','/var/www/html/cm_version2/controller/usersDirectories/6ba77ff8be7228b17b8196407d4fdf74'),(31,2,'azzzzzizzz','azizswada@gmail.com','','','','0','e478e02c0a3ddfaabdff9c5258132616','','555',0,'2022-01-20 19:35:02','2022-01-20 19:35:02','',NULL),(33,2,'','wambuitrial@gmail.com','','','','0','81dc9bdb52d04dc20036dbd8313ed055','','',0,'2022-01-25 08:08:35','2022-01-25 08:08:35',NULL,NULL),(34,2,'','bchege@barizicommunications.com','','','','0','641d252f129942ee48a2ea35415db98a','','',0,'2022-01-25 09:09:34','2022-01-25 09:09:34',NULL,NULL),(35,2,'ron','ronshallom@gmail.com','','','','0','81dc9bdb52d04dc20036dbd8313ed055','','222',0,'2022-01-27 16:11:35','2022-01-27 16:11:35','',NULL),(37,3,'joshua','joshua@gmail.com','abe','222','westlands','','81dc9bdb52d04dc20036dbd8313ed055','mugoethan@gmail.com','333',1,'2022-02-04 08:46:33','2022-02-04 08:46:33','null','/var/www/html/cm_version2/controller/usersDirectories/ab21d12ae9adb2a8a501f83015b47d6c'),(39,3,'Bee Chege','madongo@barizicommunications.com','Barizi','123456789','Nairobi','','827ccb0eea8a706c4c34a16891f84e7b','madongo@barizicommunications.com','0712345678',1,'2022-02-04 08:51:14','2022-02-04 08:51:14','null','/var/www/html/cm_version2/controller/usersDirectories/e988ebd78e40c13460d74e9ff2407f5b'),(48,2,'Judy','judy.muriuki715@gmail.com','','','','0','eb9b431e3142b3db7d6c6826d5b431d7','','n/a',0,'2022-02-10 12:45:10','2022-02-10 12:45:10','',NULL),(49,3,'riskshouse','cokumu75@gmail.com','Test Company','12345','Langata Link Ltd, Nairobi, Kenya','null','30806178552dabbc943682d6c430148f','cokumu75@gmail.com','0728241122',1,'2022-02-15 09:22:41','2022-02-15 09:22:41','null','/var/www/html/cm_version2/controller/usersDirectories/e5b1a3c7f5a6fb67f113b0cd937136e3'),(50,3,'lusui','lusuiallan@gmail.com','','','','null','81dc9bdb52d04dc20036dbd8313ed055','lusuiallan@gmail.com','555',1,'2022-02-15 15:30:17','2022-02-15 15:30:17','null','/var/www/html/cm_version2/controller/usersDirectories/a8192505050f0a1b4c983f3736e096d0'),(51,3,'Maureen','mwakagwi@barizicommunications.com','','','','null','674f3c2c1a8a6f90461e8a66fb5550ba','mwakagwi@barizicommunications.com','0712345678',1,'2022-02-16 12:48:29','2022-02-16 12:48:29','null','/var/www/html/cm_version2/controller/usersDirectories/8464f1e33530ea8f3ef474259823c651'),(58,3,'Andrew Tedd','gonyango@dewcis.com','Glee Designs','12345','Kisumu-Busia RD','null','2f797da6590d27683e5d80f324ca6aa7','gonyango@dewcis.com','0716381767',1,'2022-02-20 13:36:42','2022-02-20 13:36:42','null','/var/www/html/cm_version2/controller/usersDirectories/6859af5c19817588883ab28749d92d01'),(59,2,'nyathira','nyathirakanga@gmail.com','','','','0','81dc9bdb52d04dc20036dbd8313ed055','','555',0,'2022-03-01 14:17:14','2022-03-01 14:17:14','',NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `videos`
--

DROP TABLE IF EXISTS `videos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `videos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `video_name` varchar(255) NOT NULL,
  `video` varchar(500) NOT NULL,
  `video_preview` varchar(500) NOT NULL,
  `video_brief_description` varchar(255) DEFAULT NULL,
  `price` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `videos`
--

LOCK TABLES `videos` WRITE;
/*!40000 ALTER TABLE `videos` DISABLE KEYS */;
INSERT INTO `videos` VALUES (5,'Netsheria','./uploadVideo/short.mp4','./uploadPreviews/short.mp4','This is the first test after update',300),(6,' Morning test','./uploadVideo/short.mp4','./uploadPreviews/short.mp4','This the morning test',5000),(7,'Another morning test','','','This is another morning test',200),(8,'Another morning test','./uploadVideo/netsheria.mp4','./uploadPreviews/netsheria.mp4','This is another morning test',200);
/*!40000 ALTER TABLE `videos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `videos_service`
--

DROP TABLE IF EXISTS `videos_service`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `videos_service` (
  `video_id` int NOT NULL,
  `service_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `videos_service`
--

LOCK TABLES `videos_service` WRITE;
/*!40000 ALTER TABLE `videos_service` DISABLE KEYS */;
INSERT INTO `videos_service` VALUES (5,6),(6,6),(7,10),(8,10);
/*!40000 ALTER TABLE `videos_service` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `videos_subscription`
--

DROP TABLE IF EXISTS `videos_subscription`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `videos_subscription` (
  `video_id` int NOT NULL,
  `subscription_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `videos_subscription`
--

LOCK TABLES `videos_subscription` WRITE;
/*!40000 ALTER TABLE `videos_subscription` DISABLE KEYS */;
INSERT INTO `videos_subscription` VALUES (5,9),(5,10),(5,3),(6,18),(7,17),(7,19),(8,17),(8,19);
/*!40000 ALTER TABLE `videos_subscription` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `vw_advocates`
--

DROP TABLE IF EXISTS `vw_advocates`;
/*!50001 DROP VIEW IF EXISTS `vw_advocates`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8 */;
/*!50001 CREATE VIEW `vw_advocates` AS SELECT 
 1 AS `id`,
 1 AS `email`,
 1 AS `userName`,
 1 AS `user_image`,
 1 AS `phone`,
 1 AS `skill_set`,
 1 AS `country`,
 1 AS `lawyer_group`,
 1 AS `qualifications`,
 1 AS `descriptions`,
 1 AS `practice_area`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `vw_document`
--

DROP TABLE IF EXISTS `vw_document`;
/*!50001 DROP VIEW IF EXISTS `vw_document`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8 */;
/*!50001 CREATE VIEW `vw_document` AS SELECT 
 1 AS `id`,
 1 AS `document_name`,
 1 AS `document`,
 1 AS `subscriptions_name`,
 1 AS `category_id`,
 1 AS `subscription_id`,
 1 AS `category_name`,
 1 AS `sub_category_id`,
 1 AS `status`,
 1 AS `downloads_limit`,
 1 AS `consultaion_hours`,
 1 AS `review_limit`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `vw_document_service`
--

DROP TABLE IF EXISTS `vw_document_service`;
/*!50001 DROP VIEW IF EXISTS `vw_document_service`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8 */;
/*!50001 CREATE VIEW `vw_document_service` AS SELECT 
 1 AS `id`,
 1 AS `document_name`,
 1 AS `document`,
 1 AS `document_price`,
 1 AS `category_name`,
 1 AS `service_id`,
 1 AS `service_name`,
 1 AS `category_id`,
 1 AS `service_downloads`,
 1 AS `document_description`,
 1 AS `service_reviews`,
 1 AS `service_validity`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `vw_lawyers`
--

DROP TABLE IF EXISTS `vw_lawyers`;
/*!50001 DROP VIEW IF EXISTS `vw_lawyers`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8 */;
/*!50001 CREATE VIEW `vw_lawyers` AS SELECT 
 1 AS `id`,
 1 AS `userName`,
 1 AS `email`,
 1 AS `lawyer_status`,
 1 AS `lawyer_type`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `vw_videos`
--

DROP TABLE IF EXISTS `vw_videos`;
/*!50001 DROP VIEW IF EXISTS `vw_videos`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8 */;
/*!50001 CREATE VIEW `vw_videos` AS SELECT 
 1 AS `id`,
 1 AS `video_name`,
 1 AS `subscriptions_name`,
 1 AS `video`,
 1 AS `status`,
 1 AS `subscription_id`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `vw_videos_service`
--

DROP TABLE IF EXISTS `vw_videos_service`;
/*!50001 DROP VIEW IF EXISTS `vw_videos_service`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8 */;
/*!50001 CREATE VIEW `vw_videos_service` AS SELECT 
 1 AS `id`,
 1 AS `video_name`,
 1 AS `video_preview`,
 1 AS `price`,
 1 AS `video`,
 1 AS `service_id`,
 1 AS `service_name`,
 1 AS `service_validity`*/;
SET character_set_client = @saved_cs_client;

--
-- Final view structure for view `business_unit_diplay`
--

/*!50001 DROP VIEW IF EXISTS `business_unit_diplay`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `business_unit_diplay` AS select `business_unit`.`id` AS `id`,`practice_area`.`pa_name` AS `pa_name`,`business_unit`.`business_unit_status` AS `business_unit_status`,`business_unit`.`business_brief_description` AS `business_brief_description`,`business_unit`.`preview_video` AS `preview_video`,`business_heads`.`business_unit_head` AS `business_unit_head`,`users`.`userName` AS `userName` from (((`business_unit` join `business_heads` on((`business_unit`.`id` = `business_heads`.`business_unit_id`))) join `practice_area` on((`business_unit`.`id` = `practice_area`.`id`))) join `users` on((`business_heads`.`business_unit_head` = `users`.`id`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `business_unit_members`
--

/*!50001 DROP VIEW IF EXISTS `business_unit_members`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `business_unit_members` AS select `business_unit`.`id` AS `id`,`practice_area`.`pa_name` AS `pa_name`,`business_unit`.`business_unit_status` AS `business_unit_status`,`business_unit`.`business_brief_description` AS `business_brief_description`,`business_unit`.`preview_video` AS `preview_video`,`business_members`.`business_unit_member` AS `business_unit_member`,`users`.`userName` AS `userName` from (((`business_unit` join `business_members` on((`business_unit`.`id` = `business_members`.`business_unit_id`))) join `practice_area` on((`business_unit`.`id` = `practice_area`.`id`))) join `users` on((`business_members`.`business_unit_member` = `users`.`id`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `document_subscription_bought`
--

/*!50001 DROP VIEW IF EXISTS `document_subscription_bought`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `document_subscription_bought` AS select `documents`.`id` AS `id`,`documents`.`document_name` AS `document_name`,`documents`.`document` AS `document`,`documents`.`category_id` AS `category_id`,`documents_subscription`.`subscription_id` AS `subscription_id`,`category`.`category_name` AS `category_name`,`documents`.`sub_category_id` AS `sub_category_id`,`documents_review`.`review_status` AS `review_status`,`documents_review`.`review_count` AS `review_count`,`documents_download`.`download_count` AS `download_count` from ((((`documents` join `documents_subscription` on((`documents`.`id` = `documents_subscription`.`document_id`))) join `category` on((`documents`.`category_id` = `category`.`id`))) join `documents_review` on((`documents`.`id` = `documents_review`.`document_id`))) join `documents_download` on((`documents`.`id` = `documents_download`.`document_id`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `service_details_documents`
--

/*!50001 DROP VIEW IF EXISTS `service_details_documents`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `service_details_documents` AS select `documents`.`id` AS `id`,`documents`.`document_name` AS `document_name`,`documents`.`document_preview` AS `document_preview`,`documents`.`document_description` AS `document_description`,`documents`.`document_price` AS `price`,`documents_service`.`service_id` AS `service_id` from (`documents` join `documents_service` on((`documents`.`id` = `documents_service`.`document_id`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `service_details_videos`
--

/*!50001 DROP VIEW IF EXISTS `service_details_videos`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `service_details_videos` AS select `videos`.`id` AS `id`,`videos`.`video_name` AS `video_name`,`videos`.`video_preview` AS `video_preview`,`videos`.`video_brief_description` AS `video_brief_description`,`videos`.`price` AS `price`,`videos_service`.`service_id` AS `service_id` from (`videos` join `videos_service` on((`videos`.`id` = `videos_service`.`video_id`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `subscription_for_products`
--

/*!50001 DROP VIEW IF EXISTS `subscription_for_products`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `subscription_for_products` AS select `subscriptions_new`.`id` AS `id`,`subscriptions_new`.`subscriptions_name` AS `subscriptions_name`,`subscriptions_new`.`product_id` AS `product_id`,`subscriptions_new`.`discount_applicable` AS `discount_applicable`,`subscriptions_new`.`status` AS `status`,`subscriptions_new`.`percentage_discount` AS `percentage_discount`,`subscriptions_new`.`downloads_limit` AS `downloads_limit`,`subscriptions_new`.`consultaion_hours` AS `consultaion_hours`,`subscriptions_new`.`review_limit` AS `review_limit`,`subscriptions_new`.`payment_terms_id` AS `payment_terms_id`,`subscriptions_new`.`description` AS `description`,`subscriptions_new`.`price` AS `price` from (`subscriptions_new` join `product` on((`subscriptions_new`.`product_id` = `product`.`id`))) where ((`subscriptions_new`.`status` = 'active') and (`product`.`product_status` = 'active')) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `subscription_main`
--

/*!50001 DROP VIEW IF EXISTS `subscription_main`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `subscription_main` AS select `subscriptions_new`.`id` AS `id`,`subscriptions_new`.`subscriptions_name` AS `subscriptions_name`,`product`.`product_name` AS `product_name`,`subscriptions_new`.`status` AS `status`,`product`.`product_status` AS `product_status` from (`subscriptions_new` join `product` on((`subscriptions_new`.`product_id` = `product`.`id`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `subscription_with_features`
--

/*!50001 DROP VIEW IF EXISTS `subscription_with_features`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `subscription_with_features` AS select `subscriptions_new`.`id` AS `id`,`subscriptions_new`.`subscriptions_name` AS `subscriptions_name`,`subscriptions_new`.`product_id` AS `product_id`,`subscriptions_new`.`discount_applicable` AS `discount_applicable`,`subscriptions_new`.`status` AS `status`,`subscriptions_new`.`percentage_discount` AS `percentage_discount`,`subscriptions_new`.`downloads_limit` AS `downloads_limit`,`subscriptions_new`.`consultaion_hours` AS `consultaion_hours`,`subscriptions_new`.`review_limit` AS `review_limit`,`subscriptions_new`.`payment_terms_id` AS `payment_terms_id`,`subscriptions_new`.`description` AS `description`,`subscriptions_new`.`price` AS `price` from `subscriptions_new` where ((`subscriptions_new`.`status` = 'active') and (`subscriptions_new`.`product_id` = 0)) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `user_cert_all`
--

/*!50001 DROP VIEW IF EXISTS `user_cert_all`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `user_cert_all` AS select `user_cert`.`user_id` AS `id`,`users`.`userName` AS `name`,`user_cert`.`reg` AS `reg`,`user_cert`.`kpin` AS `kra`,`user_cert`.`status` AS `status` from (`user_cert` join `users` on((`user_cert`.`user_id` = `users`.`id`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `vw_advocates`
--

/*!50001 DROP VIEW IF EXISTS `vw_advocates`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `vw_advocates` AS select `users`.`id` AS `id`,`users`.`email` AS `email`,`users`.`userName` AS `userName`,`users`.`user_image` AS `user_image`,`users`.`contactPhoneNumber` AS `phone`,`advocates_details`.`skill_set` AS `skill_set`,`countries`.`name` AS `country`,`advocates_details`.`lawyer_group` AS `lawyer_group`,`advocates_details`.`qualifications` AS `qualifications`,`advocates_details`.`descriptions` AS `descriptions`,`advocates_details`.`practice_area` AS `practice_area` from ((`users` join `advocates_details` on((`users`.`id` = `advocates_details`.`id`))) join `countries` on((`advocates_details`.`country_id` = `countries`.`id`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `vw_document`
--

/*!50001 DROP VIEW IF EXISTS `vw_document`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `vw_document` AS select `documents`.`id` AS `id`,`documents`.`document_name` AS `document_name`,`documents`.`document` AS `document`,`subscriptions_new`.`subscriptions_name` AS `subscriptions_name`,`documents`.`category_id` AS `category_id`,`documents_subscription`.`subscription_id` AS `subscription_id`,`category`.`category_name` AS `category_name`,`documents`.`sub_category_id` AS `sub_category_id`,`subscriptions_new`.`status` AS `status`,`subscriptions_new`.`downloads_limit` AS `downloads_limit`,`subscriptions_new`.`consultaion_hours` AS `consultaion_hours`,`subscriptions_new`.`review_limit` AS `review_limit` from (((`documents` join `documents_subscription` on((`documents`.`id` = `documents_subscription`.`document_id`))) join `category` on((`documents`.`category_id` = `category`.`id`))) join `subscriptions_new` on((`subscriptions_new`.`id` = `documents_subscription`.`subscription_id`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `vw_document_service`
--

/*!50001 DROP VIEW IF EXISTS `vw_document_service`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `vw_document_service` AS select `documents`.`id` AS `id`,`documents`.`document_name` AS `document_name`,`documents`.`document` AS `document`,`documents`.`document_price` AS `document_price`,`category`.`category_name` AS `category_name`,`documents_service`.`service_id` AS `service_id`,`service`.`service_name` AS `service_name`,`documents`.`category_id` AS `category_id`,`service`.`service_downloads` AS `service_downloads`,`documents`.`document_description` AS `document_description`,`service`.`service_reviews` AS `service_reviews`,`service`.`service_validity` AS `service_validity` from (((`documents` join `category` on((`documents`.`category_id` = `category`.`id`))) join `documents_service` on((`documents`.`id` = `documents_service`.`document_id`))) join `service` on((`documents_service`.`service_id` = `service`.`id`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `vw_lawyers`
--

/*!50001 DROP VIEW IF EXISTS `vw_lawyers`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `vw_lawyers` AS select `users`.`id` AS `id`,`users`.`userName` AS `userName`,`users`.`email` AS `email`,`advocates_details`.`lawyer_status` AS `lawyer_status`,`advocates_details`.`lawyer_type` AS `lawyer_type` from (`users` join `advocates_details` on((`users`.`id` = `advocates_details`.`id`))) where (`users`.`roleId` = 2) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `vw_videos`
--

/*!50001 DROP VIEW IF EXISTS `vw_videos`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `vw_videos` AS select `videos`.`id` AS `id`,`videos`.`video_name` AS `video_name`,`subscriptions_new`.`subscriptions_name` AS `subscriptions_name`,`videos`.`video` AS `video`,`subscriptions_new`.`status` AS `status`,`videos_subscription`.`subscription_id` AS `subscription_id` from ((`videos` join `videos_subscription` on((`videos`.`id` = `videos_subscription`.`video_id`))) join `subscriptions_new` on((`videos_subscription`.`subscription_id` = `subscriptions_new`.`id`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `vw_videos_service`
--

/*!50001 DROP VIEW IF EXISTS `vw_videos_service`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `vw_videos_service` AS select `videos`.`id` AS `id`,`videos`.`video_name` AS `video_name`,`videos`.`video_preview` AS `video_preview`,`videos`.`price` AS `price`,`videos`.`video` AS `video`,`videos_service`.`service_id` AS `service_id`,`service`.`service_name` AS `service_name`,`service`.`service_validity` AS `service_validity` from ((`videos` join `videos_service` on((`videos`.`id` = `videos_service`.`video_id`))) join `service` on((`videos_service`.`service_id` = `service`.`id`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-03-14  8:46:59
