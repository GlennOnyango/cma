<?php
require_once(__DIR__ . '/../config/Database.php');
class Role {
	private $conn;
    // Constructor
    public function __construct(){
      $database = new Database();
      $db = $database->initiateConnection();
      $this->conn = $db;
    }

  // Get role by id
  public function getRole($id){
    try{
      $stmt = $this->conn->prepare("SELECT * FROM role WHERE id=:id");
      $stmt->bindparam(":id", $id);
      $stmt->execute();
      return $stmt->fetch();
    }catch(PDOException $e){
      echo $e->getMessage();
    }
  }
    
    // Get role by id
  public function getAllowedRolePaths(){
    return [
        1=>[
            '/view/admin',
            '/view/admin/',
            '/view/admin/index.php',
            '/view/admin/users.php',
            '/view/admin/new-user.php',
            '/view/edit-petition.php',
            '/view/house-resolution.php',
            '/view/new-petition.php',
            '/view/pdf-download.php',
            '/view/profile.php',
            '/view/summary.php',
            '/view/assign-staff.php',
            '/view/update-status.php',
            '/view/review.php',
            '/view/edit-profile.php',
            '/controller/petitionStatus.php',
            '/controller/petition.php',
            '/controller/admin.php',
            '/view/admin/edit-user.php',
        ],
        2=>[
            '/view/secretary.php',
            '/view/edit-petition.php',
            '/view/house-resolution.php',
            '/view/new-petition.php',
            '/view/pdf-download.php',
            '/view/profile.php',
            '/view/summary.php',
            '/view/edit-profile.php',
            '/controller/petitionStatus.php',
            '/controller/petition.php',
            '/controller/admin.php',
            '/view/admin/edit-user.php',
        ],
        3=>[
            '/view/speaker.php',
            '/view/edit-petition.php',
            '/view/house-resolution.php',
            '/view/approve.php',
            '/view/pdf-download.php',
            '/view/profile.php',
            '/view/summary.php',
            '/view/edit-profile.php',
            '/controller/petitionStatus.php',
            '/controller/petition.php',
            '/controller/admin.php',
            '/view/admin/edit-user.php',
        ],
        4=>[
            '/view/staff.php',
            '/view/edit-petition.php',
            '/view/house-resolution.php',
            '/view/pdf-download.php',
            '/view/profile.php',
            '/view/summary.php',
            '/view/edit-profile.php',
            '/view/review.php',
            '/view/update-status.php',
            '/controller/petitionStatus.php',
            '/controller/petition.php',
            '/controller/admin.php',
            '/view/admin/edit-user.php',
        ],
         5=>[
            '/view/clerk.php',
            '/view/edit-petition.php',
            '/view/house-resolution.php',
            '/view/pdf-download.php',
            '/view/profile.php',
            '/view/summary.php',
            '/view/edit-profile.php',
            '/view/review.php',
            '/view/update-status.php',
            '/controller/petitionStatus.php',
            '/controller/petition.php',
            '/controller/admin.php',
            '/view/admin/edit-user.php',
        ],
    ];
  }
}