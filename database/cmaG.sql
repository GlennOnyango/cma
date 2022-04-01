///////////////////////////////////

DROP TABLE IF EXISTS `advocates_details`;
CREATE TABLE `advocates_details` (
  `id` int NOT NULL,
  `lawyer_type` varchar(255) NOT NULL,
  `lawyer_status` varchar(255) NOT NULL,
  KEY `id` (`id`),
  CONSTRAINT `advocates_details_ibfk_1` FOREIGN KEY (`id`) REFERENCES `users` (`id`)
)

INSERT INTO `advocates_details` VALUES (12,'holder','declined'),(13,'holder','declined'),(14,'holder','holder'),(15,'holder','declined'),(25,'holder','holder'),(26,'holder','holder');



DROP TABLE IF EXISTS `category`;
CREATE TABLE `category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `category_name` varchar(255) NOT NULL,
  `category_status` varchar(255) NOT NULL DEFAULT 'inactive',
  `category_code` varchar(255) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ;
INSERT INTO `category` VALUES (1,'forensic science','active','0'),(2,'commercial','active','0'),(3,'cl','active','0'),(4,'trial1','active',''),(5,'','',''),(6,'','','');

DROP TABLE IF EXISTS `consultation`;
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
);
INSERT INTO `consultation` VALUES (1,1,1,'lawyeremail1','15','6000','active',1),(2,1,1,'lawyeremail1','15','6000','active',1);

DROP TABLE IF EXISTS `contries`;
CREATE TABLE `contries` (
  `id` int NOT NULL AUTO_INCREMENT,
  `country_name` varchar(255) NOT NULL,
  `country_code` varchar(255) NOT NULL,
  `applicable_to_seller` varchar(255) NOT NULL,
  `country_status` varchar(255) NOT NULL DEFAULT 'inactive',
  PRIMARY KEY (`id`)
) ;

INSERT INTO `contries` VALUES (1,'kenya','254','option1','active'),(2,'Tanzania','255','option1','active'),(3,'uganda','255','option1','In Active');

DROP TABLE IF EXISTS `documents_review`;
CREATE TABLE `documents_review` (
  `id` int NOT NULL AUTO_INCREMENT,
  `document_id` int NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `document_id` (`document_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `documents_review_ibfk_1` FOREIGN KEY (`document_id`) REFERENCES `Documents` (`id`),
  CONSTRAINT `documents_review_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `documents_review` VALUES (3,9,29),(4,9,29),(5,9,29),(6,1,16),(7,1,16),(8,1,16),(9,5,16),(10,1,16),(11,1,16),(12,8,29),(13,8,29),(14,8,29),(15,8,29),(16,12,16),(17,1,16),(18,1,16),(19,1,16),(20,1,16),(21,1,16),(22,1,16),(23,3,16),(24,1,16),(25,1,16),(26,1,16),(27,1,16),(28,1,16),(29,1,16),(30,1,16),(31,1,16),(32,1,16),(33,1,16),(34,2,16),(35,1,16),(36,1,16),(37,1,16),(38,1,16),(39,2,16),(40,1,16),(41,1,16);


DROP TABLE IF EXISTS `knowledge_hub`;
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
) ;
INSERT INTO `knowledge_hub` VALUES (1,'Test','Test','Test','preview ->','active','articles ->',''),(2,'test1','test1','test1','preview ->','inactive','articles ->',''),(3,'Test2','Test2','Test2','','active','Array',''),(4,'Test','Test','Test','preview ->,./uploadPreviewshub/Assignment_2_-_Report.pdf','active','articles ->,./uploadarticles/Assignment_2_-_Report.pdf',''),(5,'tax dues','kra','county govt','preview ->,./uploadPreviewshub/basketball.png','active','articles ->,./uploadarticles/~$RT FUNCTIONALITY IN JAVASCRIPT.docx',''),(6,'Hub trial','trial','trial','','active','articles ->,./uploadarticles/material-dashboard.js.map',''),(7,'Hub trial','trial','trial','','active','',''),(8,'Hub trial 1','trial 1','trial 1','','active','','hub1');


DROP TABLE IF EXISTS `lawyer_type`;
CREATE TABLE `lawyer_type` (
  `id` int NOT NULL AUTO_INCREMENT,
  `lawyer_type` varchar(255) NOT NULL,
  `lawyer_status` varchar(255) NOT NULL DEFAULT 'inactive',
  PRIMARY KEY (`id`)
) ;

INSERT INTO `lawyer_type` VALUES (1,'partner','active'),(2,'senior associate','inactive'),(3,'associate','active'),(4,'Test lawyer Type change','inactive');


DROP TABLE IF EXISTS `payment`;
CREATE TABLE `payment` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `refrence_number` varchar(100) NOT NULL,
  `dateCreated` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `amount` int NOT NULL,
  `service_id` int NOT NULL DEFAULT 0,
  `type_paid` varchar(100) NOT NULL,
  `billing_type` varchar(100) NOT NULL DEFAULT 'monthly',
  `product_id` int NOT NULL,
  `status` varchar(100) DEFAULT 'active',
  PRIMARY KEY (`id`)
);
--ALTER TABLE payment ADD COLUMN `service_id` int NOT NULL DEFAULT 0;


DROP TABLE IF EXISTS `payment_terms`;
CREATE TABLE `payment_terms` (
  `id` int NOT NULL AUTO_INCREMENT,
  `payment_terms_name` varchar(255) NOT NULL,
  `payment_term_status` varchar(255) NOT NULL DEFAULT 'inactive',
  `payment_term_text` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
);
INSERT INTO `payment_terms` VALUES (1,'standard payment terms','active','     <p>refunds available</p>\r\n     '),(2,'elite','active','     <p>all payments should be in visa</p>\r\n     '),(3,'Payment Terms Test change','active','<p>Payment terms</p>');


DROP TABLE IF EXISTS `product`;
CREATE TABLE `product` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_name` varchar(255) NOT NULL,
  `product_status` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
);
INSERT INTO `product` VALUES (1,'cm sme','inactive'),(2,'cm property digest','inactive'),(3,'ace litigator','inactive'),(4,'Netsheria','inactive'),(5,'Netsheria','inactive'),(6,'cm sme','active'),(7,'diaspora club','inactive'),(8,'Test Product change','inactive'),(9,'new(test)','active'),(10,'New Club','active'),(11,'Membership','active');

DROP TABLE IF EXISTS `role`;
CREATE TABLE `role` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ;
INSERT INTO `role` VALUES (1,'admin'),(2,'advocate'),(3,'user'),(4,'members');


DROP TABLE IF EXISTS `skill_set`;
CREATE TABLE `skill_set` (
  `id` int NOT NULL AUTO_INCREMENT,
  `skill_set_name` varchar(255) NOT NULL,
  `pa_id` int NOT NULL,
  `skill_set_status` varchar(255) NOT NULL DEFAULT 'inactive',
  `skill_set_brief_description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `pa_id` (`pa_id`),
  CONSTRAINT `skill_set_ibfk_1` FOREIGN KEY (`pa_id`) REFERENCES `practice_area` (`id`)
) ;
INSERT INTO `skill_set` VALUES (1,'verbal cue',1,'active','This is for effective communication'),(2,'family matters',1,'active','family related'),(3,'Communication',1,'active','This is for effective communication');

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

INSERT INTO `sub_category` VALUES (1,'new',1,'active'),(2,'old',2,'inactive');

DROP TABLE IF EXISTS `subscriptions`;
CREATE TABLE `subscriptions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `subscriptions_name` varchar(255) NOT NULL,
  `product_id` int DEFAULT '0',
  `service_id` int DEFAULT '0',
  `limit_users` varchar(255) NOT NULL DEFAULT 'NO',
  `discount_applicable` varchar(255) NOT NULL DEFAULT 'NO',
  `offer_applicable` varchar(255) NOT NULL DEFAULT 'NO',
  `sub_status` varchar(255) NOT NULL DEFAULT 'inactive',
  `validity` varchar(255) DEFAULT NULL,
  `downloads` int DEFAULT NULL,
  `con_hours` int DEFAULT NULL,
  `payment_terms_id` int DEFAULT NULL,
  `document_bundle` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `benefits` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `price` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `payment_terms_id` (`payment_terms_id`),
  KEY `service_id` (`service_id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `subscriptions_ibfk_1` FOREIGN KEY (`payment_terms_id`) REFERENCES `payment_terms` (`id`)
);

INSERT INTO `subscriptions` VALUES (1,'Test',6,1,'yes','no','yes','active','quarter',10,2,1,'sdasdas','afasdasd','aafasdasd','2',129),(3,'standard',6,0,'yes','yes','yes','active','quarter',10,5,1,'10','standard','<p>standard</p>','2',40000),(4,'Gold Plan',6,1,'no','no','no','active','yearly',5,3,1,'','This is for Gold Members','1. Secondment program.\r\n2. Setting up in-house legal council','2',1),(5,'silver plan',6,1,'no','no','Offer Applicable','Status','yearly',5,10,1,'10','new','<p>fantastic</p>','2',10),(6,'virtual legal officer',6,4,'no','no','no','active','quarter',10,5,1,'','new','<p>new</p>','2',10),(7,'subscription 1',0,0,'no','no','no','active','Select Validity',5,5,3,'5','new','<p>new</p>','2',500),(8,'subscription 1',0,0,'no','no','no','active','quarter',5,5,1,'5','new','new','2',500),(9,'subscription 1',0,0,'no','no','Offer Applicable','active','quarter',5,5,1,'10','new','<p>.introduction</p>','2',500),(10,'Test123',8,6,'yes','yes','yes','active','quarter',5,5,1,'5','Test','<p>Test</p>','2',40000),(11,'new subscription',9,6,'no','no','no','active','half',5,5,1,'5','new','<p>1.introduction</p>','2',500),(12,'new subscription',9,6,'no','no','no','active','half',5,3,2,'5','new','new','2',200),(13,'documentts',9,6,'no','no','no','active','half',5,5,1,'5','new','<p>well used</p>','2',500),(14,'sme subscription',10,6,'no','no','no','active','quarter',10,5,3,'5','new','new','2',300),(15,'service subscription',9,5,'no','yes','yes','active','half',5,5,1,'3','new','<p>new</p>','2',450),(16,'Test 4:41',9,6,'yes','yes','yes','active','quarter',5,5,1,'5','yes','<p>no</p>','',909),(17,'servicew',9,7,'no','no','no','active','yearly',5,5,1,'5','new','<p>1.introduction</p>\r\n<p>2.background</p>','',500);

DROP TABLE IF EXISTS `user_cert`;
CREATE TABLE `user_cert` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `reg` varchar(100) NOT NULL,
  `kpin` varchar(100) NOT NULL,
  `status` varchar(100) NOT NULL DEFAULT 'declined',
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_id` (`user_id`)
);

INSERT INTO `user_cert` VALUES (1,16,'./uploadDocuments/blocka.xlsx','./uploadDocuments/blockb.xlsx','approved'),(2,29,'./uploadDocuments/Glenn_Onyango.pdf','./uploadDocuments/Glenn_Onyango.pdf','approved');



DROP TABLE IF EXISTS `users`;
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
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  KEY `roleId` (`roleId`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`roleId`) REFERENCES `role` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb3;

ALTER TABLE users ADD COLUMN user_directory VARCHAR(100) NULL ;


INSERT INTO `users` VALUES (8,3,'glenn Onyango','glenntedd@gmail.com','Glee Designs','12345','Kisumu-Busia RD','','202cb962ac59075b964b07152d234b70','glenntedd@gmail.com','+254719458873',1,'2021-10-28 08:30:46','2021-10-28 08:30:46',NULL),(9,1,'cma advocates','CMAdvocatesadmin@gmail.com','','','','','21232f297a57a5a743894a0e4a801fc3','','',1,'2021-10-28 08:36:55','2021-10-28 08:36:55',NULL),(10,1,'Opiyo','opiyo@gmail.com','','','','0','5e3af4ec8bdb0c28dee0b40f2eef3bdc',NULL,NULL,0,'2021-10-05 15:04:58','2021-10-05 15:04:58',NULL),(12,2,'','glennonyango@yahoo.com','','','','0','f84be11974a1736684ade98804ee9364','','',0,'2021-10-28 11:21:01','2021-10-28 11:21:01',NULL),(13,2,'','mugoethan@gmail.com','','','','0','0fa2f51d935a848c2266c7878b43eed0','','',0,'2021-10-28 11:39:34','2021-10-28 11:39:34',NULL),(14,2,'','cyrus maina','','','','0','3b3b564001b848b1faa126f5fb4f6d3d','','',0,'2021-10-28 11:51:34','2021-10-28 11:51:34',NULL),(15,2,'','rmulamba@barizicommunications.com','','','','0','b7d96ee119b2631f01967d148ba6ac5c','','',0,'2021-10-28 13:07:04','2021-10-28 13:07:04',NULL),(16,3,'ethan','mugoethan78@gmail.com','Pro Tender','555','kileleshwa','','1a1dc91c907325c69271ddf0c944bc72','','0701973394',1,'2021-10-29 18:18:55','2021-10-29 18:18:55',NULL),(19,3,'Dianah','dgichuru@cmadvocates.com','Dee Limited','12345','IM House','','6128733cebca8f6f14162dd45766d8f3','dgichuru@cmadvocates.com','0721873805',1,'2021-11-15 11:30:46','2021-11-15 11:30:46',NULL),(21,3,'john','johnmugo68@gmail.com','johns butchery','223','dagoretti','','f63f4fbc9f8c85d409f2f59f2b9e12d5','mugoethan78@gmail.com','0700000',1,'2021-11-26 10:49:02','2021-11-26 10:49:02',NULL),(22,2,'','newlawyer@gmail.com','','','','0','b9238aa4114496fafc20ea9611e169d1','','',0,'2021-11-28 10:16:09','2021-11-28 10:16:09',NULL),(25,2,'','sherlin@gmail.com','','','','0','48cd16d32cbc24fccafdcf13840966ca','','',0,'2021-11-28 12:46:33','2021-11-28 12:46:33',NULL),(26,2,'','chege@gmail.com','','','','0','7701d1d213c6644036e8a450f1c3d3e1','','',0,'2021-11-29 13:37:31','2021-11-29 13:37:31',NULL),(29,3,'glennonyango','glennonyango@gmail.com','tripod','12345','40101','','202cb962ac59075b964b07152d234b70','glennonyango@gmail.com','+254719458873',1,'2021-11-30 18:09:59','2021-11-30 18:09:59','null');



CREATE VIEW `vw_document_payment` AS select `Documents`.`id` AS `id`,`Documents`.`document_name` AS `document_name`,`Documents`.`document_price` AS `document_price`,`category`.`category_name` AS `category_name`,`Documents`.`document` AS `document` from (`Documents` join `category` on((`Documents`.`category_id` = `category`.`id`))) ;
CREATE VIEW `vw_lawyers` AS select `users`.`id` AS `id`,`users`.`userName` AS `userName`,`users`.`email` AS `email`,`advocates_details`.`lawyer_status` AS `lawyer_status`,`advocates_details`.`lawyer_type` AS `lawyer_type` from (`users` join `advocates_details` on((`users`.`id` = `advocates_details`.`id`))) where (`users`.`roleId` = 2) ;

CREATE VIEW `vw_subscriptions` AS 
select 
`subscriptions`.`id` AS `id`,
`subscriptions`.`subscriptions_name` AS `subscriptions_name`,
`subscriptions`.`validity` AS `validity`,
`product`.`product_name` AS `product_name`,
`subscriptions`.`sub_status` AS `sub_status`,
`subscriptions`.`product_id` AS `prod_id`,
`subscriptions`.`service_id` AS `serv_id`,
`subscriptions`.`description` AS `description`
from `subscriptions` 
join `product` on `subscriptions`.`product_id` = `product`.`id`;
--join `service` on `subscriptions`.`service_id` = `service`.`id`;
--sub should not have service;


-----cREATING eVENTS
CREATE EVENT test_event_03
ON SCHEDULE EVERY 1 MINUTE
STARTS CURRENT_TIMESTAMP
DO
   INSERT INTO messages(message,created_at)
   VALUES('Test MySQL recurring Event',NOW());


---Updates


