DROP TABLE IF EXISTS `business_unit`;
CREATE TABLE `business_unit` (
  `id` int NOT NULL AUTO_INCREMENT,
  `practice_id` int NOT NULL,
  `business_unit_status` varchar(255) NOT NULL DEFAULT 'inactive',
  `business_brief_description` varchar(255) DEFAULT NULL,
  `preview_video` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `practice_id` (`practice_id`),
  CONSTRAINT `business_unit_ibfk_1` FOREIGN KEY (`practice_id`) REFERENCES `practice_area` (`id`)
);

CREATE TABLE `business_heads`(
    `business_unit_id`   int NOT NULL,
    `business_unit_head` int NOT NULL
);

CREATE TABLE `business_members`(
    `business_unit_id`   int NOT NULL,
    `business_unit_member` int NOT NULL
);

CREATE VIEW business_unit_diplay AS SELECT
business_unit.id,`pa_name`,`business_unit_status`,`business_brief_description`,`preview_video`, 
`business_unit_head`,`userName`,`user_image`
FROM business_unit
JOIN business_heads ON business_unit.id = business_heads.business_unit_id
JOIN practice_area  ON business_unit.id = practice_area.id
JOIN users ON  business_heads.business_unit_head = users.id;

CREATE VIEW business_unit_members AS SELECT
business_unit.id,`pa_name`,`business_unit_status`,`business_brief_description`,`preview_video`, 
`business_unit_member`,`userName`,`user_image`
FROM business_unit
JOIN business_members ON business_unit.id = business_members.business_unit_id
JOIN practice_area  ON business_unit.id = practice_area.id
JOIN users ON  business_members.business_unit_member = users.id;


