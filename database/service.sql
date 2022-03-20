
DROP TABLE IF EXISTS `service`;
CREATE TABLE `service` (
  `id` int NOT NULL AUTO_INCREMENT,
  `service_name` varchar(255) NOT NULL,
  `service_status` varchar(255) NOT NULL ,
  `service_type` varchar(100) NOT NULL ,
  `service_validity` varchar(100) NOT NULL ,
  `service_downloads` int NOT NULL ,
  `service_reviews` int NOT NULL ,
  PRIMARY KEY (`id`)
) ;

CREATE VIEW service_details_documents AS 
SELECT id,document_name,document_preview,document_description,document_price AS price,documents_service.service_id
FROM documents
JOIN documents_service ON documents.id = documents_service.document_id;

CREATE VIEW service_details_videos AS 
SELECT id,video_name,video_preview,video_brief_description,price,videos_service.service_id
FROM videos
JOIN videos_service ON videos.id = videos_service.video_id;


CREATE VIEW `all_services` AS 
select 
`Documents`.`id` AS `id`,
`Documents`.`document_name` AS `name`,
`service`.`service_name` AS `service_name`,
'document' AS `service_type`,
`Documents`.`document_price` AS `price`,
`Documents`.`document_description` AS `description` 
from `Documents` 
join `service` on `Documents`.`service_id` = `service`.`id`
where `service`.`service_status` <> 'inactive'
union all 
select `videos`.`id` AS `id`,`videos`.`video_name` AS `video_name`,`service`.`service_name` AS `service_name`,
'video' AS `video`,'price' AS `price`,
`videos`.`video_brief_description` AS `video_brief_description` from `videos` 
join `service` on`videos`.`service_id` = `service`.`id` where ((`service`.`service_status` <> 'inactive') and
 (`videos`.`video_status` <> 'inactive'));
CREATE VIEW `user_cert_all` AS select `user_cert`.`user_id` AS `id`,`users`.`userName` AS `name`,`user_cert`.`reg` AS `reg`,`user_cert`.`kpin` AS `kra`,`user_cert`.`status` AS `status` from (`user_cert` join `users` on((`user_cert`.`user_id` = `users`.`id`))) ;
CREATE VIEW `vw_cons` AS select `consultation`.`id` AS `id`,`consultation`.`consultation_status` AS `consultation_status`,`consultation`.`duration` AS `duration`,`consultation`.`billing` AS `billing`,`lawyer_type`.`lawyer_type` AS `lawyer_type`,`practice_area`.`pa_name` AS `pa_name`,`subscriptions`.`subscriptions_name` AS `subscriptions_name` from (((`consultation` join `lawyer_type` on((`consultation`.`lawyer_type_id` = `lawyer_type`.`id`))) join `subscriptions` on((`consultation`.`sub_id` = `subscriptions`.`id`))) join `practice_area` on((`consultation`.`practise_area_id` = `practice_area`.`id`)));
CREATE VIEW `vw_consultation` AS select `consultation`.`id` AS `id`,`lawyer_type`.`lawyer_type` AS `lawyer_type`,`practice_area`.`pa_name` AS `pa_name`,`consultation`.`duration` AS `duration`,`consultation`.`billing` AS `billing`,`consultation`.`consultation_status` AS `consultation_status` from (((`consultation` join `subscriptions` on((`consultation`.`sub_id` = `subscriptions`.`id`))) join `lawyer_type` on((`consultation`.`lawyer_type_id` = `lawyer_type`.`lawyer_type`))) join `practice_area` on((`consultation`.`practise_area_id` = `practice_area`.`id`))) ;
CREATE VIEW `vw_document` AS select `Documents`.`id` AS `id`,`Documents`.`document_name` AS `document_name`,`Documents`.`document_price` AS `document_price`,`Documents`.`toc` AS `toc`,`Documents`.`document_type` AS `document_type`,`Documents`.`download_count` AS `download_count`,`category`.`category_name` AS `category_name`,`sub_category`.`sub_category_name` AS `sub_category_name`,`Documents`.`document_description` AS `document_description`,`Documents`.`service_id` AS `service_id`,`Documents`.`document` AS `document`,`Documents`.`subscription_id` AS `subscription_id`,`subscriptions`.`subscriptions_name` AS `subscriptions_name`,`subscriptions`.`downloads` AS `downloads` from ((((`Documents` join `subscriptions` on((`Documents`.`subscription_id` = `subscriptions`.`id`))) join `category` on((`Documents`.`category_id` = `category`.`id`))) join `sub_category` on((`Documents`.`sub_category_id` = `sub_category`.`id`))) join `service` on((`Documents`.`service_id` = `service`.`id`)));
CREATE VIEW `vw_document` AS select 
`Documents`.`id` AS `id`,`Documents`.`document_name` AS `document_name`,
`Documents`.`document_price` AS `document_price`,
`Documents`.`toc` AS `toc`,
`Documents`.`document_type` AS `document_type`,
`Documents`.`download_count` AS `download_count`,
`category`.`category_name` AS `category_name`,
`sub_category`.`sub_category_name` AS `sub_category_name`,
`Documents`.`document_description` AS `document_description`,
`Documents`.`service_id` AS `service_id`,
`Documents`.`document` AS `document`,
`Documents`.`subscription_id` AS `subscription_id`,
`subscriptions`.`subscriptions_name` AS `subscriptions_name`,
`subscriptions`.`downloads` AS `downloads`,
`Documents`.`review_status` AS `review_status`

from `Documents` 
join `subscriptions` on `Documents`.`subscription_id` = `subscriptions`.`id` 
join `category` on `Documents`.`category_id` = `category`.`id` 
join `sub_category` on `Documents`.`sub_category_id` = `sub_category`.`id`
join `service` on `Documents`.`service_id` = `service`.`id`;