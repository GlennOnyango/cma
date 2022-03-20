<?php
exit;
    require_once '../vendor/autoload.php';
	echo "ajsdhjksad";
	exit;

    // if (php_sapi_name() != 'cli') {
        // throw new Exception('This application must be run on the command line.');
    // }
	
	$authCode = isset($_GET['code'])?$_GET['code']:'';
    
    /**
     * Returns an authorized API client.
     * @return Google_Client the authorized client object
     */
    function getClient($authCode)
    {
        $client = new Google_Client();
        $client->setApplicationName('Google Calendar API PHP Quickstart');
          $client->setScopes(Google_Service_Calendar::CALENDAR);
        $client->addScope(Google_Service_Directory::ADMIN_DIRECTORY_USER);
        $client->addScope(Google_Service_Directory::ADMIN_DIRECTORY_GROUP);
        $client->addScope(Google_Service_Directory::ADMIN_DIRECTORY_GROUP_MEMBER);
        $client->setAuthConfig('../config/client_secret_120213978309-97la4l7jbci7hgre8hn9g8tmiuff5081.apps.googleusercontent.com.json');
        $client->setAccessType('offline');
        $client->setPrompt('select_account consent');
    
        // Load previously authorized token from a file, if it exists.
        // The file token.json stores the user's access and refresh tokens, and is
        // created automatically when the authorization flow completes for the first
        // time.
        $tokenPath = 'token.json';
        if (file_exists($tokenPath)) {
            $accessToken = json_decode(file_get_contents($tokenPath), true);
            $client->setAccessToken($accessToken);
        }
    
        // If there is no previous token or it's expired.
        if ($client->isAccessTokenExpired()) {
            // Refresh the token if possible, else fetch a new one.
            if ($client->getRefreshToken()) {
                $client->fetchAccessTokenWithRefreshToken($client->getRefreshToken());
            } else {
                // Request authorization from the user.
                $authUrl = $client->createAuthUrl();
				// print_r($authUrl);
				// exit;
                // printf("Open the following link in your browser:\n%s\n", $authUrl);
                // print 'Enter verification code: ';
                // $authCode = trim(fgets(STDIN));
    
                // Exchange authorization code for an access token.
                $accessToken = $client->fetchAccessTokenWithAuthCode($authCode);
                $client->setAccessToken($accessToken);
    
                // Check to see if there was an error.
                if (array_key_exists('error', $accessToken)) {
                    throw new Exception(join(', ', $accessToken));
                }
            }
            // Save the token to a file.
            if (!file_exists(dirname($tokenPath))) {
                mkdir(dirname($tokenPath), 0700, true);
            }
            file_put_contents($tokenPath, json_encode($client->getAccessToken()));
        }
        return $client;
    }
    
    
    // Get the API client and construct the service object.
    $client = getClient($authCode);
    $service = new Google_Service_Calendar($client);
	
	
	// Get the API client and construct the service object.
    $client = getClient($authCode);
    
    // get workspace users list
    $service = new Google_Service_Directory($client);
	$users = $service->users->listUsers();
	echo "<pre>";
	print_r($users);
	exit;
    $users = $service->users->listUsers(
        'my_customer',
        array(
            'customer' => 'my_customer',
            'orderBy' => 'email',
            'viewType' => 'domain_public',
            'query' => '',
            'projection' => 'full',
            'maxResults' => '100',
            'pageToken' => '',
        )
    );

    $usersList = array();
    foreach ($users->getUsers() as $user) {
        $usersList[] = $user->getPrimaryEmail();
    }

    // get calendar list
    $calendarList = $service->calendarList->listCalendarList();
    $calendarList = $calendarList->getItems();

	
	
	
	
	  
  
  