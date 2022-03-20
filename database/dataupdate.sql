-- MySQL dump 10.13  Distrib 8.0.27, for Linux (x86_64)
--
-- Host: localhost    Database: cma_data
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
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
/*!50503 SET character_set_client = utf8mb4 */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `business_heads`
--

DROP TABLE IF EXISTS `business_heads`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `business_heads` (
  `business_unit_id` int NOT NULL,
  `business_unit_head` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `business_members`
--

DROP TABLE IF EXISTS `business_members`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `business_members` (
  `business_unit_id` int NOT NULL,
  `business_unit_member` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `business_unit`
--

DROP TABLE IF EXISTS `business_unit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `business_unit` (
  `id` int NOT NULL AUTO_INCREMENT,
  `practice_id` int NOT NULL,
  `business_unit_status` varchar(255) NOT NULL DEFAULT 'inactive',
  `business_brief_description` varchar(255) DEFAULT NULL,
  `preview_video` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `practice_id` (`practice_id`),
  CONSTRAINT `business_unit_ibfk_1` FOREIGN KEY (`practice_id`) REFERENCES `practice_area` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Temporary view structure for view `business_unit_diplay`
--

DROP TABLE IF EXISTS `business_unit_diplay`;
/*!50001 DROP VIEW IF EXISTS `business_unit_diplay`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
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
/*!50503 SET character_set_client = utf8mb4 */;
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
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `category_name` varchar(255) NOT NULL,
  `category_status` varchar(255) NOT NULL DEFAULT 'inactive',
  `category_code` varchar(255) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `consultation`
--

DROP TABLE IF EXISTS `consultation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `contries`
--

DROP TABLE IF EXISTS `contries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contries` (
  `id` int NOT NULL AUTO_INCREMENT,
  `country_name` varchar(255) NOT NULL,
  `country_code` varchar(255) NOT NULL,
  `applicable_to_seller` varchar(255) NOT NULL,
  `country_status` varchar(255) NOT NULL DEFAULT 'inactive',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `countries`
--

DROP TABLE IF EXISTS `countries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `countries` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=250 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Temporary view structure for view `document_subscription_bought`
--

DROP TABLE IF EXISTS `document_subscription_bought`;
/*!50001 DROP VIEW IF EXISTS `document_subscription_bought`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
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
/*!50503 SET character_set_client = utf8mb4 */;
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
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `documents_download`
--

DROP TABLE IF EXISTS `documents_download`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `documents_download` (
  `document_id` int NOT NULL,
  `user_id` int NOT NULL,
  `download_count` int NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `documents_review`
--

DROP TABLE IF EXISTS `documents_review`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `documents_review` (
  `document_id` int NOT NULL,
  `user_id` int NOT NULL,
  `review_status` varchar(10) NOT NULL DEFAULT 'none',
  `review_count` int NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `documents_service`
--

DROP TABLE IF EXISTS `documents_service`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `documents_service` (
  `document_id` int NOT NULL,
  `service_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `documents_subscription`
--

DROP TABLE IF EXISTS `documents_subscription`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `documents_subscription` (
  `document_id` int NOT NULL,
  `subscription_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `knowledge_hub`
--

DROP TABLE IF EXISTS `knowledge_hub`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
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
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `lawyer_type`
--

DROP TABLE IF EXISTS `lawyer_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lawyer_type` (
  `id` int NOT NULL AUTO_INCREMENT,
  `lawyer_type` varchar(255) NOT NULL,
  `lawyer_status` varchar(255) NOT NULL DEFAULT 'inactive',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `members`
--

DROP TABLE IF EXISTS `members`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
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
-- Table structure for table `messages`
--

DROP TABLE IF EXISTS `messages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `messages` (
  `id` int NOT NULL AUTO_INCREMENT,
  `message` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `payment`
--

DROP TABLE IF EXISTS `payment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
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
) ENGINE=InnoDB AUTO_INCREMENT=2980 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `payment_terms`
--

DROP TABLE IF EXISTS `payment_terms`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payment_terms` (
  `id` int NOT NULL AUTO_INCREMENT,
  `payment_terms_name` varchar(255) NOT NULL,
  `payment_term_status` varchar(255) NOT NULL DEFAULT 'inactive',
  `payment_term_text` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `practice_area`
--

DROP TABLE IF EXISTS `practice_area`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `practice_area` (
  `id` int NOT NULL AUTO_INCREMENT,
  `pa_name` varchar(255) NOT NULL,
  `pa_status` varchar(255) NOT NULL DEFAULT 'inactive',
  `pa_description` varchar(500) NOT NULL DEFAULT 'DATA TO be added',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_name` varchar(255) NOT NULL,
  `product_status` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `rm`
--

DROP TABLE IF EXISTS `rm`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rm` (
  `id` int NOT NULL AUTO_INCREMENT,
  `advocate_id` int NOT NULL,
  `client_id` int NOT NULL,
  `status` varchar(100) NOT NULL DEFAULT 'open',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `role` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `service`
--

DROP TABLE IF EXISTS `service`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `service` (
  `id` int NOT NULL AUTO_INCREMENT,
  `service_name` varchar(255) NOT NULL,
  `service_status` varchar(255) NOT NULL DEFAULT 'inactive',
  `service_type` varchar(100) NOT NULL DEFAULT 'added',
  `service_validity` varchar(100) NOT NULL DEFAULT 'added',
  `service_downloads` int NOT NULL DEFAULT '5',
  `service_reviews` int NOT NULL DEFAULT '5',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Temporary view structure for view `service_details_documents`
--

DROP TABLE IF EXISTS `service_details_documents`;
/*!50001 DROP VIEW IF EXISTS `service_details_documents`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
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
/*!50503 SET character_set_client = utf8mb4 */;
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
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `skill_set` (
  `id` int NOT NULL AUTO_INCREMENT,
  `skill_set_name` varchar(255) NOT NULL,
  `pa_id` int NOT NULL,
  `skill_set_status` varchar(255) NOT NULL DEFAULT 'inactive',
  `skill_set_brief_description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `pa_id` (`pa_id`),
  CONSTRAINT `skill_set_ibfk_1` FOREIGN KEY (`pa_id`) REFERENCES `practice_area` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `sub_category`
--

DROP TABLE IF EXISTS `sub_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sub_category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `sub_category_name` varchar(255) NOT NULL,
  `categoryid` int DEFAULT NULL,
  `sub_category_status` varchar(255) NOT NULL DEFAULT 'inactive',
  PRIMARY KEY (`id`),
  KEY `categoryid` (`categoryid`),
  CONSTRAINT `sub_category_ibfk_1` FOREIGN KEY (`categoryid`) REFERENCES `category` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `subscription_features`
--

DROP TABLE IF EXISTS `subscription_features`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `subscription_features` (
  `id` int NOT NULL,
  `feature_name` varchar(255) NOT NULL,
  `presence` int NOT NULL,
  KEY `id` (`id`),
  CONSTRAINT `subscription_features_ibfk_1` FOREIGN KEY (`id`) REFERENCES `subscriptions_new` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Temporary view structure for view `subscription_for_products`
--

DROP TABLE IF EXISTS `subscription_for_products`;
/*!50001 DROP VIEW IF EXISTS `subscription_for_products`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
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
/*!50503 SET character_set_client = utf8mb4 */;
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
/*!50503 SET character_set_client = utf8mb4 */;
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
/*!50503 SET character_set_client = utf8mb4 */;
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
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `user_cert`
--

DROP TABLE IF EXISTS `user_cert`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_cert` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `reg` varchar(100) NOT NULL,
  `kpin` varchar(100) NOT NULL,
  `status` varchar(100) NOT NULL DEFAULT 'declined',
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_id` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Temporary view structure for view `user_cert_all`
--

DROP TABLE IF EXISTS `user_cert_all`;
/*!50001 DROP VIEW IF EXISTS `user_cert_all`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
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
/*!50503 SET character_set_client = utf8mb4 */;
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
-- Table structure for table `videos`
--

DROP TABLE IF EXISTS `videos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `videos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `video_name` varchar(255) NOT NULL,
  `video` varchar(500) NOT NULL,
  `video_preview` varchar(500) NOT NULL,
  `video_brief_description` varchar(255) DEFAULT NULL,
  `price` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `videos_service`
--

DROP TABLE IF EXISTS `videos_service`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `videos_service` (
  `video_id` int NOT NULL,
  `service_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `videos_subscription`
--

DROP TABLE IF EXISTS `videos_subscription`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `videos_subscription` (
  `video_id` int NOT NULL,
  `subscription_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Temporary view structure for view `vw_advocates`
--

DROP TABLE IF EXISTS `vw_advocates`;
/*!50001 DROP VIEW IF EXISTS `vw_advocates`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
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
/*!50503 SET character_set_client = utf8mb4 */;
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
/*!50503 SET character_set_client = utf8mb4 */;
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
/*!50503 SET character_set_client = utf8mb4 */;
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
/*!50503 SET character_set_client = utf8mb4 */;
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
/*!50503 SET character_set_client = utf8mb4 */;
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
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
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
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
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
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
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
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
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
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
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
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
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
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
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
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
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
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
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
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
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
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
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
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
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
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
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
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
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
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
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

-- Dump completed on 2022-03-14  8:42:09
