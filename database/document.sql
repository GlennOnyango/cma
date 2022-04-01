DROP TABLE IF EXISTS `documents`;
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
);

CREATE TABLE `documents_subscription` (
  `document_id` int NOT NULL,
  `subscription_id` int NOT NULL
);

CREATE TABLE `documents_service` (
  `document_id` int NOT NULL,
  `service_id` int NOT NULL
);
DROP TABLE IF EXISTS `documents_bought_service`;
CREATE TABLE documents_bought_service(
  `user_id` int NOT NULL,
  `service_id` int NOT NULL,
  `ref_no` varchar(1000) NOT NULL,
  `document_id` int NOT NULL,
  `download_count`int NOT NULL,
  `review_count` int NOT NULL
);



CREATE VIEW vw_document AS SELECT 
documents.id,document_name,document,subscriptions_name,category_id,subscription_id,category_name,
sub_category_id,status,downloads_limit,consultaion_hours,review_limit
FROM documents
JOIN documents_subscription ON  documents.id = documents_subscription.document_id
JOIN category ON documents.category_id = category.id
JOIN subscriptions_new ON  subscriptions_new.id = documents_subscription.subscription_id;


CREATE VIEW vw_document_service AS SELECT 
DISTINCT (documents.id), document_name,document,document_price,category_name,service_id,service_name,category_id,service_downloads,document_description,
service_reviews,service_validity
FROM documents
JOIN documents_service ON documents.id = documents_service.document_id
JOIN category ON documents.category_id = category.id
JOIN service ON documents_service.service_id = service.id;

CREATE VIEW vw_document_service_bought AS SELECT
documents.id, document_name,document,document_price,category_name,documents_bought_service.service_id,service_name,category_id,document_description,
service_reviews,service_validity,
payment.user_id,payment.type_paid,payment.product_id,documents_bought_service.download_count AS service_downloads
FROM payment
JOIN documents ON payment.product_id = documents.id
JOIN documents_service ON payment.product_id = documents_service.document_id
JOIN documents_bought_service ON documents_service.service_id = documents_bought_service.service_id
JOIN category ON documents.category_id = category.id
JOIN service ON documents_service.service_id = service.id
WHERE payment.type_paid = "documents";


---Get service downloads
CREATE VIEW vw_document_service_get_download AS
SELECT documents_service.document_id,documents_service.service_id,service.service_downloads,service.service_reviews FROM documents_service
JOIN service ON documents_service.service_id = service.id;


CREATE TABLE `documents_review` (
  `subscription_id` int NOT NULL,
  `document_id` int NOT NULL,
  `user_id` int NOT NULL,
  `review_status` varchar(10) NOT NULL DEFAULT 'none',
  `review_count` int NOT NULL DEFAULT 0,
  `rm_id` int not null DEFAULT 0,
  `advocate_assigned_id` int not null DEFAULT 0,
  `assignee_status` int not null DEFAULT 0,
  `date_assigned`  datetime DEFAULT null,
  `duration` varchar(10) DEFAULT null,
  `title` varchar(100) DEFAULT null,
  `description` varchar(100) DEFAULT null

);

-- ALTER TABLE documents_review ADD COLUMN `date_assigned`  datetime DEFAULT null;
-- ALTER TABLE documents_review ADD COLUMN `duration` varchar(10) DEFAULT null;
-- ALTER TABLE documents_review ADD COLUMN `subscription_id` int NOT NULL;

-- ALTER TABLE documents_review ADD COLUMN `title` varchar(100) DEFAULT null;
-- ALTER TABLE documents_review ADD COLUMN `description` varchar(1000) DEFAULT null;

CREATE TABLE `documents_download` (
  `subscription_id` int NOT NULL,
  `document_id` int NOT NULL,
  `user_id` int NOT NULL,
  `download_count` int not null DEFAULT 0,

);

-- ALTER TABLE documents_download ADD COLUMN `subscription_id` int NOT NULL;


CREATE VIEW `document_subscription_bought` AS SELECT 
documents.id,documents.document_name,documents.document,
payment.user_id,payment.type_paid,payment.product_id,
documents_subscription.document_id,
documents.category_id,category.category_name,documents.sub_category_id,review_status,
documents_review.review_count,documents_download.download_count,
subscriptions_new.subscriptions_name,documents_subscription.subscription_id,
(SELECT email FROM users WHERE id = payment.user_id) AS client_email,
rm_id,advocate_assigned_id,assignee_status
FROM payment
JOIN documents_subscription ON  payment.product_id = documents_subscription.subscription_id
JOIN documents ON documents_subscription.document_id = documents.id
JOIN category ON documents.category_id = category.id
JOIN documents_review ON documents_subscription.document_id = documents_review.document_id
JOIN subscriptions_new ON payment.product_id = subscriptions_new.id
JOIN documents_download ON documents_subscription.document_id = documents_download.document_id
WHERE payment.type_paid = "subscriptions" AND documents_download.user_id = payment.user_id  AND documents_review.user_id = payment.user_id;


CREATE VIEW `vw_documents_review` AS
SELECT documents_review.document_id,document_name,user_id,(SELECT userName FROM users WHERE id = user_id) AS client_name,
(SELECT email FROM users WHERE id = user_id) AS client_email,review_status,
rm_id,(SELECT userName FROM users WHERE id = rm_id) AS advocate_name,
advocate_assigned_id,(SELECT userName FROM users WHERE id = advocate_assigned_id) AS advocate_assigned_name,
assignee_status,duration,documents_review.title,documents_review.description,documents.document,subscriptions_name,documents_review.subscription_id
FROM documents_review
JOIN documents ON documents_review.document_id = documents.id
JOIN subscriptions_new ON documents_review.subscription_id = subscriptions_new.id
WHERE review_status = 'review';

CREATE VIEW `vw_documents_completed` AS
SELECT documents_review.document_id,document_name,user_id,(SELECT userName FROM users WHERE id = user_id) AS client_name,
(SELECT email FROM users WHERE id = user_id) AS client_email,review_status,
rm_id,(SELECT userName FROM users WHERE id = rm_id) AS advocate_name,
advocate_assigned_id,(SELECT userName FROM users WHERE id = advocate_assigned_id) AS advocate_assigned_name,
assignee_status,duration,documents_review.title,documents_review.description,documents.document,subscriptions_name,documents_review.subscription_id
FROM documents_review
JOIN documents ON documents_review.document_id = documents.id
JOIN subscriptions_new ON documents_review.subscription_id = subscriptions_new.id
WHERE review_status = 'completed';