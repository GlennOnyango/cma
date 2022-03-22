CREATE TABLE `rm` (
  `id` int NOT NULL AUTO_INCREMENT,
  `advocate_id` int NOT NULL DEFAULT 0,
  `client_id` int NOT NULL UNIQUE,
  `status` varchar(100) NOT NULL DEFAULT 'open',
  PRIMARY KEY (`id`)
);

CREATE VIEW vw_rm AS SELECT
id,(SELECT userName FROM users WHERE id = advocate_id) AS advocate ,(SELECT userName FROM users WHERE id = client_id) AS client,status,client_id
FROM rm;


INSERT INTO rm (client_id,advocate_id,status)SELECT DISTINCT user_id,0,'open' FROM payment  WHERE status = 'active' AND type_paid = 'subscriptions';

SELECT DISTINCT user_id,0 FROM payment  WHERE status = 'active' AND type_paid = 'subscriptions';

----==========================Trigger payment to rm===---------------------------------
DELIMITER $$

CREATE TRIGGER after_payment_insert
AFTER INSERT
ON payment FOR EACH ROW
BEGIN
    IF NEW.type_paid = 'subscriptions' THEN
        INSERT INTO rm (client_id,advocate_id,status)
        VALUES(NEW.user_id,0,'open');
    END IF;
END$$

DELIMITER ;