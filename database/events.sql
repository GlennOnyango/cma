CREATE EVENT payments_legalize
ON SCHEDULE EVERY 1 MINUTE
STARTS CURRENT_TIMESTAMP
DO
   INSERT INTO messages(message,created_at)
   VALUES('Test MySQL recurring Event',NOW());



   DELIMITER $$
CREATE PROCEDURE LoopDemo()
BEGIN
	DECLARE myid  INT;
    DECLARE cudate datetime;
    DECLARE billing VARCHAR(50);
	DECLARE id,mydate,billing_type cursor for SELECT id,dateCreated,billing_type FROM payment;
        
        
	loop_label:  LOOP
        FETCH id INTO myid;
        FETCH mydate INTO cudate;
        FETCH billing_type INTO billing;

		IF  mydate < CURRENT_TIMESTAMP THEN 
			UPDAT
		END  IF;
            
		SET  x = x + 1;
		IF  (x mod 2) THEN
			ITERATE  loop_label;
		ELSE
			SET  str = CONCAT(str,x,',');
		END  IF;
	END LOOP;
	SELECT str;
END$$

DELIMITER ;