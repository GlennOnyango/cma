--backup
mysqldump -u root -h localhost --no-data -p cma_data > /var/www/html/dataupdate.sql
--connect
 mysql -u root -p cma_data
---allow file transfer
sudo chmod -R 777 /var/www/html/controller/userImage/
