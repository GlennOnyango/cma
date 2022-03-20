DROP TABLE IF EXISTS `videos`;
CREATE TABLE `videos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `video_name` varchar(255) NOT NULL,
  `video` varchar(500) NOT NULL,
  `video_preview` varchar(500) NOT NULL,
  `video_brief_description` varchar(255) DEFAULT NULL,
  `price` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ;

CREATE TABLE `videos_subscription` (
  `video_id` int NOT NULL,
  `subscription_id` int NOT NULL
);

CREATE TABLE `videos_service` (
  `video_id` int NOT NULL,
  `service_id` int NOT NULL
);

CREATE VIEW vw_videos AS SELECT
videos.id,video_name,subscriptions_name,video,status,subscription_id
FROM videos
JOIN videos_subscription ON  videos.id = videos_subscription.video_id
JOIN subscriptions_new ON  videos_subscription.subscription_id =  subscriptions_new.id;

CREATE VIEW vw_videos_service AS SELECT 
videos.id,video_name,video_preview,price,video,service_id,service_name,service_validity
FROM videos
JOIN videos_service ON videos.id = videos_service.video_id
JOIN service ON videos_service.service_id = service.id;

