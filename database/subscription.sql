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
);

CREATE TABLE `subscription_features` (
  `id` int NOT NULL ,
  `feature_name` varchar(255) NOT NULL,
  `presence` int NOT NULL,
  KEY `id` (`id`),
  CONSTRAINT `subscription_features_ibfk_1` FOREIGN KEY (`id`) REFERENCES `subscriptions_new` (`id`)
);

CREATE VIEW `subscription_main` AS SELECT 
  subscriptions_new.id,subscriptions_new.subscriptions_name,product.product_name,subscriptions_new.status,product.product_status 
  FROM subscriptions_new
  JOIN product ON subscriptions_new.product_id = product.id;

CREATE VIEW `subscription_with_features` AS SELECT
subscriptions_new.id,subscriptions_name,product_id,discount_applicable,status,percentage_discount,downloads_limit,consultaion_hours,
review_limit,payment_terms_id,description,price
FROM subscriptions_new
WHERE status = 'active' AND product_id = 0;

CREATE VIEW `subscription_for_products` AS SELECT
subscriptions_new.id,subscriptions_name,product_id,discount_applicable,status,percentage_discount,downloads_limit,consultaion_hours,review_limit,payment_terms_id,description,price
FROM subscriptions_new
JOIN product ON subscriptions_new.product_id = product.id
WHERE status = 'active' AND product_status = 'active';